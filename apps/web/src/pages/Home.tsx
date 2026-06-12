import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import { gameApi } from '@/api/game'
import { useAuthStore } from '@/store/authStore'
import { useGameStore } from '@/store/gameStore'
import { useSettingsStore } from '@/store/settingsStore'
import type { Level } from '@wordrosco/types'
import styles from './Home.module.css'

const LEVELS: { id: Level; name: string; time: string }[] = [
  { id: 'A2', name: 'Básico',     time: '150s' },
  { id: 'B1', name: 'Intermedio', time: '130s' },
  { id: 'B2', name: 'Avanzado',   time: '110s' },
  { id: 'C1', name: 'Superior',   time: '90s'  },
  { id: 'C2', name: 'Maestro',    time: '75s'  },
]

const CHROME =
  typeof navigator !== 'undefined' &&
  /Chrome/.test(navigator.userAgent) &&
  !/Edg/.test(navigator.userAgent)

const SPEECH_SUPPORTED =
  typeof window !== 'undefined' &&
  !!(window.SpeechRecognition || (window as any).webkitSpeechRecognition)

export default function Home() {
  const navigate = useNavigate()
  const user = useAuthStore((s) => s.user)
  const logout = useAuthStore((s) => s.logout)
  const startSession = useGameStore((s) => s.startSession)
  const {
    definitionLang, speechEnabled, inputMode,
    setDefinitionLang, toggleSpeech, setInputMode,
  } = useSettingsStore()
  const [level, setLevel] = useState<Level | null>(null)

  const { data: leaderboard } = useQuery({
    queryKey: ['leaderboard'],
    queryFn: gameApi.getLeaderboard,
  })

  const { mutate, isPending, error } = useMutation({
    mutationFn: () => gameApi.startSession({ level: level! }),
    onSuccess: (data) => {
      startSession(data.sessionId, data.level, data.timeLimitSec, data.firstLetter)
      navigate('/game')
    },
  })

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>WordRosco</div>
        <div className={styles.userArea}>
          <span className={styles.username}>{user?.displayName}</span>
          <button className={styles.logout} onClick={logout}>Salir</button>
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>El Rosco Final</h1>
        <p className={styles.subtitle}>Definiciones · Respuestas en inglés</p>

        {/* ── Level selector ── */}
        <div className={styles.levelGrid}>
          {LEVELS.map((l) => (
            <button
              key={l.id}
              className={`${styles.levelCard} ${level === l.id ? styles.selected : ''}`}
              onClick={() => setLevel(l.id)}
            >
              <div className={styles.levelBadge}>{l.id}</div>
              <div className={styles.levelName}>{l.name}</div>
              <div className={styles.levelTime}>{l.time}</div>
            </button>
          ))}
        </div>

        {/* ── Settings panel ── */}
        <div className={styles.settingsPanel}>
          <div className={styles.settingsTitle}>Opciones</div>

          <div className={styles.settingRow}>
            <span className={styles.settingLabel}>Idioma de las definiciones</span>
            <div className={styles.toggle}>
              <button
                className={`${styles.toggleBtn} ${definitionLang === 'es-ES' ? styles.toggleActive : ''}`}
                onClick={() => setDefinitionLang('es-ES')}
              >
                🇪🇸 Español
              </button>
              <button
                className={`${styles.toggleBtn} ${definitionLang === 'en-GB' ? styles.toggleActive : ''}`}
                onClick={() => setDefinitionLang('en-GB')}
              >
                🇬🇧 English
              </button>
            </div>
          </div>

          <div className={styles.settingRow}>
            <span className={styles.settingLabel}>Voz de la definición</span>
            <button
              className={`${styles.toggleBtn} ${speechEnabled ? styles.toggleActive : ''}`}
              onClick={toggleSpeech}
            >
              {speechEnabled ? '🔊 Activada' : '🔇 Silenciada'}
            </button>
          </div>

          <div className={styles.settingRow}>
            <div className={styles.settingLabelGroup}>
              <span className={styles.settingLabel}>Modo de respuesta</span>
              {!SPEECH_SUPPORTED && (
                <span className={styles.settingNote}>
                  Voz no disponible en este navegador — usa Chrome
                </span>
              )}
            </div>
            <div className={styles.toggle}>
              <button
                className={`${styles.toggleBtn} ${inputMode === 'keyboard' ? styles.toggleActive : ''}`}
                onClick={() => setInputMode('keyboard')}
              >
                ⌨️ Teclado
              </button>
              <button
                className={`${styles.toggleBtn} ${inputMode === 'voice' ? styles.toggleActive : ''}`}
                onClick={() => setInputMode('voice')}
                disabled={!SPEECH_SUPPORTED}
              >
                🎤 Voz
              </button>
            </div>
          </div>

          {inputMode === 'voice' && SPEECH_SUPPORTED && (
            <div className={styles.voiceInfo}>
              💡 Di la palabra en inglés cuando veas el botón del micrófono.
            </div>
          )}
        </div>

        {error && <p className={styles.error}>Error al iniciar la partida. Inténtalo de nuevo.</p>}

        <button
          className={styles.startBtn}
          disabled={!level || isPending}
          onClick={() => mutate()}
        >
          {isPending ? 'Iniciando...' : 'Empezar el Rosco'}
        </button>

        {user && (
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statVal}>{user.totalGames}</span>
              <span className={styles.statLabel}>Partidas</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statVal}>{user.totalCorrect}</span>
              <span className={styles.statLabel}>Aciertos totales</span>
            </div>
          </div>
        )}

        {/* ── Leaderboard ── */}
        {leaderboard && leaderboard.length > 0 && (
          <div className={styles.leaderboard}>
            <h2 className={styles.leaderboardTitle}>🏆 Top 10</h2>
            <table className={styles.leaderboardTable}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Jugador</th>
                  <th>Nivel</th>
                  <th>✅</th>
                  <th>❌</th>
                  <th>⏱️</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((entry) => (
                  <tr key={entry.rank} className={entry.displayName === user?.displayName ? styles.myRow : ''}>
                    <td>{entry.rank}</td>
                    <td>{entry.displayName}</td>
                    <td>{entry.level}</td>
                    <td>{entry.correctCount}</td>
                    <td>{entry.wrongCount}</td>
                    <td>{entry.timeUsedSec}s</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}