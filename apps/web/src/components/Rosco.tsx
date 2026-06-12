import type { LetterStatus } from '@wordrosco/types'

const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

interface RoscoProps {
  currentLetter: string | null
  letterStatus: Record<string, LetterStatus>
  correct: number
}

const COLOR: Record<LetterStatus, { fill: string; stroke: string; text: string }> = {
  correct:    { fill: '#10b981', stroke: '#10b981', text: '#fff' },
  wrong:      { fill: '#ef4444', stroke: '#ef4444', text: '#fff' },
  passed:     { fill: '#f59e0b', stroke: '#f59e0b', text: '#fff' },
  unanswered: { fill: '#111827', stroke: '#2a3a55', text: '#94a3b8' },
}

export default function Rosco({ currentLetter, letterStatus, correct }: RoscoProps) {
  const cx = 250, cy = 250, r = 210, lr = 22
  const total = ALPHABET.length

  return (
    <svg viewBox="0 0 500 500" style={{ width: '100%', height: '100%' }}>
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {ALPHABET.map((letter, i) => {
        const angle = (i / total) * 2 * Math.PI - Math.PI / 2
        const x = cx + r * Math.cos(angle)
        const y = cy + r * Math.sin(angle)
        const status = letterStatus[letter] ?? 'unanswered'
        const isCurrent = letter === currentLetter
        const colors = isCurrent
          ? { fill: '#4f8ef7', stroke: '#4f8ef7', text: '#fff' }
          : COLOR[status]

        return (
          <g key={letter}>
            <circle
              cx={x} cy={y} r={lr}
              fill={colors.fill}
              stroke={colors.stroke}
              strokeWidth={2}
              filter={isCurrent ? 'url(#glow)' : undefined}
            />
            <text
              x={x} y={y + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={colors.text}
              fontFamily="Syne, sans-serif"
              fontWeight="800"
              fontSize="15"
            >
              {letter}
            </text>
          </g>
        )
      })}

      {/* Centre display */}
      {currentLetter && (
        <>
          <text
            x={250} y={240}
            textAnchor="middle"
            fill="#4f8ef7"
            fontFamily="Syne, sans-serif"
            fontWeight="800"
            fontSize="52"
          >
            {currentLetter}
          </text>
          <text
            x={250} y={272}
            textAnchor="middle"
            fill="#64748b"
            fontFamily="DM Sans, sans-serif"
            fontSize="11"
          >
            LETRA ACTUAL
          </text>
          <text
            x={250} y={298}
            textAnchor="middle"
            fill="#10b981"
            fontFamily="Syne, sans-serif"
            fontWeight="700"
            fontSize="17"
          >
            {correct}/{ALPHABET.length}
          </text>
        </>
      )}
    </svg>
  )
}
