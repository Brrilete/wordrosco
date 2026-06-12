import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGameStore } from '@/store/gameStore'
import { useSettingsStore } from '@/store/settingsStore'
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition'
import { gameApi } from '@/api/game'
import Rosco from '@/components/Rosco'
import type { EndSessionResponse } from '@wordrosco/types'
import styles from './Game.module.css'

// ── Speech synthesis ──────────────────────────────────────────────────────────

function speak(text: string, lang: string) {
  if (!window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = lang
  utterance.rate = 0.9
  utterance.pitch = 1
  window.speechSynthesis.speak(utterance)
}

// ── Mic button states ─────────────────────────────────────────────────────────

const MIC_LABEL: Record<string, string> = {
  idle:        '🎤 Hablar',
  listening:   '🔴 Escuchando...',
  processing:  '⏳ Procesando...',
  error:       '⚠️ Error',
  unsupported: '🎤 No soportado',
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Game() {
  const navigate = useNavigate()
  const store = useGameStore()
  const { definitionLang, speechEnabled, inputMode, toggleSpeech } = useSettingsStore()

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const [answer, setAnswer] = useState('')
  const [feedback, setFeedback] = useState<{ text: string; ok: boolean } | null>(null)
  const [result, setResult] = useState<EndSessionResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [voiceError, setVoiceError] = useState<string | null>(null)

  const isVoiceMode = inputMode === 'voice'

  // Speech recognition hook — always en-GB because answers are in English
  const { start: startListening, status: micStatus } = useSpeechRecognition({
    lang: 'en-GB',
    onResult: (transcript) => {
      setAnswer(transcript)
      // Auto-submit after a short pause so user sees what was heard
      setTimeout(() => handleSubmitWith(transcript), 600)
    },
    onError: (msg) => {
      setVoiceError(msg)
      setTimeout(() => setVoiceError(null), 3000)
    },
  })

  // ── Lifecycle ───────────────────────────────────────────────────────────────

  useEffect(() => {
    if (store.phase === 'idle') navigate('/')
  }, [store.phase, navigate])

  useEffect(() => {
    if (store.sessionId && store.phase === 'playing') fetchQuestion()
  }, [store.sessionId])

  useEffect(() => {
    if (store.phase !== 'playing') return
    timerRef.current = setInterval(() => { store.tick() }, 1000)
    return () => clearInterval(timerRef.current!)
  }, [store.phase])

  useEffect(() => {
    if (store.timeLeft === 0 && store.phase === 'playing') handleEndGame()
  }, [store.timeLeft])

  // ── Game logic ──────────────────────────────────────────────────────────────

  async function fetchQuestion() {
    if (!store.sessionId) return
    try {
      const q = await gameApi.getQuestion(store.sessionId)
      if ((q as any).finished) { handleEndGame(); return }
      store.setQuestion(q.letter, q.definition, q.hint, q.remaining)
      if (speechEnabled) speak(q.definition, definitionLang)
      if (!isVoiceMode) inputRef.current?.focus()
    } catch {
      handleEndGame()
    }
  }

  // Shared submit logic — accepts a value directly so voice can call it too
  async function handleSubmitWith(value: string) {
    if (!value.trim() || !store.sessionId || !store.currentLetter || loading) return
    setLoading(true)
    window.speechSynthesis.cancel()
    try {
      const res = await gameApi.submitAnswer(store.sessionId, { answer: value.trim() })
      setAnswer('')
      if (res.correct) {
        setFeedback({ text: '✓ Correcto', ok: true })
        store.markCorrect(store.currentLetter, res.nextLetter, res.remaining)
      } else {
        setFeedback({ text: `✗ Era: ${(res as any).correctAnswer}`, ok: false })
        store.markWrong(store.currentLetter, res.nextLetter, res.remaining)
      }
      setTimeout(() => {
        setFeedback(null)
        if (res.nextLetter === null) handleEndGame()
        else fetchQuestion()
      }, 900)
    } finally {
      setLoading(false)
    }
  }

  // Keyboard submit — reads from state
  function handleSubmit() {
    handleSubmitWith(answer)
  }

  async function handlePass() {
    if (!store.sessionId || !store.currentLetter || loading) return
    setLoading(true)
    window.speechSynthesis.cancel()
    try {
      const res = await gameApi.pass(store.sessionId)
      store.markPassed(store.currentLetter, res.nextLetter)
      setAnswer('')
      setFeedback(null)
      if (res.nextLetter === null) handleEndGame()
      else fetchQuestion()
    } finally {
      setLoading(false)
    }
  }

  async function handleEndGame() {
    clearInterval(timerRef.current!)
    window.speechSynthesis.cancel()
    if (!store.sessionId) return
    try {
      const res = await gameApi.endSession(store.sessionId)
      setResult(res)
      store.endGame()
    } catch {
      store.endGame()
    }
  }

  const m = Math.floor(store.timeLeft / 60)
  const s = store.timeLeft % 60
  const timeStr = `${m}:${s.toString().padStart(2, '0')}`
  const timeLow = store.timeLeft < 30
  const micActive = micStatus === 'listening' || micStatus === 'processing'

  // ── Result screen ───────────────────────────────────────────────────────────
  if (result) {
    return (
      <div className={styles.resultContainer}>
        <div className={styles.resultCard}>
          <div className={styles.resultTitle}>
            {result.score >= 90 ? '🏆 ¡Increíble!' :
             result.score >= 70 ? '🎉 ¡Muy bien!' :
             result.score >= 50 ? '👍 ¡Buen intento!' : '📚 Sigue practicando'}
          </div>
          <div className={styles.resultScore}>{result.score}</div>
          <div className={styles.resultScoreLabel}>de 100 puntos</div>
          <div className={styles.resultStats}>
            <div className={styles.resultStat}>
              <span className={styles.statValGreen}>{result.correctCount}</span>
              <span className={styles.statLabel}>Aciertos</span>
            </div>
            <div className={styles.resultStat}>
              <span className={styles.statValRed}>{result.wrongCount}</span>
              <span className={styles.statLabel}>Fallos</span>
            </div>
            <div className={styles.resultStat}>
              <span className={styles.statValMuted}>{result.passedCount}</span>
              <span className={styles.statLabel}>Pasadas</span>
            </div>
          </div>
          <div className={styles.review}>
            {result.review.map((r) => (
              <div key={r.letter} className={styles.reviewItem}>
                <span className={`${styles.reviewDot} ${styles['dot_' + r.status]}`} />
                <span className={styles.reviewLetter}>{r.letter}</span>
                <div className={styles.reviewContent}>
                  <div className={styles.reviewDef}>{r.definition.substring(0, 50)}...</div>
                  <div>
                    {r.userAnswer && r.userAnswer !== r.correctAnswer && (
                      <span className={styles.reviewWrong}>{r.userAnswer} → </span>
                    )}
                    <span className={styles.reviewCorrect}>✓ {r.correctAnswer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.resultActions}>
            <button className={styles.btnPrimary} onClick={() => { store.reset(); navigate('/') }}>
              Jugar de nuevo
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── Game screen ─────────────────────────────────────────────────────────────
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>WordRosco</div>
        <div className={styles.hud}>
          <div className={styles.hudItem}>
            <span className={`${styles.hudVal} ${timeLow ? styles.hudRed : styles.hudGold}`}>{timeStr}</span>
            <span className={styles.hudLabel}>Tiempo</span>
          </div>
          <div className={styles.hudItem}>
            <span className={`${styles.hudVal} ${styles.hudGreen}`}>{store.correct}</span>
            <span className={styles.hudLabel}>Aciertos</span>
          </div>
          <div className={styles.hudItem}>
            <span className={`${styles.hudVal} ${styles.hudRed}`}>{store.wrong}</span>
            <span className={styles.hudLabel}>Fallos</span>
          </div>
          <button
            className={`${styles.btnSpeechToggle} ${!speechEnabled ? styles.speechOff : ''}`}
            onClick={toggleSpeech}
            title={speechEnabled ? 'Silenciar voz' : 'Activar voz'}
          >
            {speechEnabled ? '🔊' : '🔇'}
          </button>
        </div>
      </header>

      <div className={styles.roscoWrap}>
        <Rosco
          currentLetter={store.currentLetter}
          letterStatus={store.letterStatus}
          correct={store.correct}
        />
      </div>

      <div className={styles.defBox}>
        <div className={styles.defHeader}>
          <div className={styles.defMeta}>
            <span className={styles.defLangBadge}>
              {definitionLang === 'en-GB' ? '🇬🇧 English' : '🇪🇸 Español'}
            </span>
            <span className={styles.defLetter}>EMPIEZA POR {store.currentLetter}</span>
          </div>
          <button
            className={styles.btnRepeat}
            onClick={() => store.currentDefinition && speak(store.currentDefinition, definitionLang)}
            title="Repetir definición"
            disabled={!speechEnabled || !store.currentDefinition}
          >
            🔊
          </button>
        </div>

        <div className={styles.defText}>{store.currentDefinition ?? '...'}</div>
        <div className={styles.defHint}>{store.currentHint ? `💡 ${store.currentHint}` : ''}</div>

        {/* ── Keyboard mode ── */}
        {!isVoiceMode && (
          <div className={styles.answerRow}>
            <input
              ref={inputRef}
              className={styles.answerInput}
              type="text"
              placeholder="Tu respuesta en inglés..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
            />
            <button className={styles.btnCheck} onClick={handleSubmit} disabled={loading}>✓</button>
            <button className={styles.btnPass} onClick={handlePass} disabled={loading}>Pasar</button>
          </div>
        )}

        {/* ── Voice mode ── */}
        {isVoiceMode && (
          <div className={styles.voiceRow}>
            {/* Show what was heard */}
            {answer && (
              <div className={styles.voiceTranscript}>
                🎙️ <strong>{answer}</strong>
              </div>
            )}

            {/* Error message */}
            {voiceError && (
              <div className={styles.voiceErrorMsg}>{voiceError}</div>
            )}

            <div className={styles.voiceButtons}>
              <button
                className={`${styles.btnMic} ${micActive ? styles.btnMicActive : ''}`}
                onClick={startListening}
                disabled={loading || micActive}
              >
                <span className={styles.btnMicIcon}>{micActive ? '🔴' : '🎤'}</span>
                <span>{MIC_LABEL[micStatus] ?? '🎤 Hablar'}</span>
              </button>
              <button className={styles.btnPass} onClick={handlePass} disabled={loading}>
                Pasar
              </button>
            </div>

            <p className={styles.voiceHint}>
              Di la palabra en inglés y se enviará automáticamente
            </p>
          </div>
        )}

        {feedback && (
          <div className={`${styles.feedback} ${feedback.ok ? styles.feedbackOk : styles.feedbackErr}`}>
            {feedback.text}
          </div>
        )}
      </div>
    </div>
  )
}
