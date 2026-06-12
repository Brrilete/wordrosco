import { useRef, useState } from 'react'

export type RecognitionStatus = 'idle' | 'listening' | 'processing' | 'error' | 'unsupported'

interface UseSpeechRecognitionOptions {
  lang?: string
  onResult: (transcript: string) => void
  onError?: (msg: string) => void
}

export function useSpeechRecognition({
  lang = 'en-GB',
  onResult,
  onError,
}: UseSpeechRecognitionOptions) {
  const [status, setStatus] = useState<RecognitionStatus>('idle')
  const recognitionRef = useRef<any>(null)

  const isSupported =
    typeof window !== 'undefined' &&
    !!(window.SpeechRecognition || (window as any).webkitSpeechRecognition)

  function start() {
    if (!isSupported) {
      setStatus('unsupported')
      onError?.('Tu navegador no soporta reconocimiento de voz. Usa Chrome.')
      return
    }

    // Cancel synthesis so the mic does not pick up the definition voice
    window.speechSynthesis?.cancel()

    const SpeechRecognition =
      window.SpeechRecognition || (window as any).webkitSpeechRecognition

    const recognition = new SpeechRecognition()
    recognition.lang = lang
    recognition.interimResults = false
    recognition.maxAlternatives = 3
    recognition.continuous = false

    recognition.onstart = () => setStatus('listening')

    recognition.onresult = (event: any) => {
      setStatus('processing')
      const results = Array.from(event.results[0]) as any[]
      const best = results.reduce((a, b) =>
        a.confidence >= b.confidence ? a : b
      )
      const transcript = best.transcript.trim().toLowerCase()
      onResult(transcript)
      setStatus('idle')
    }

    recognition.onerror = (event: any) => {
      setStatus('error')
      const msg =
        event.error === 'no-speech'   ? 'No te escuché, inténtalo de nuevo' :
        event.error === 'not-allowed' ? 'Permiso de micrófono denegado' :
        event.error === 'network'     ? 'Error de red en el reconocimiento' :
                                        'Error en el reconocimiento de voz'
      onError?.(msg)
      setTimeout(() => setStatus('idle'), 2000)
    }

    recognition.onend = () => {
      if (status === 'listening') setStatus('idle')
    }

    recognitionRef.current = recognition
    recognition.start()
  }

  function stop() {
    recognitionRef.current?.stop()
    setStatus('idle')
  }

  return { start, stop, status, isSupported }
}
