import { motion } from 'framer-motion'

export default function MemoDocument({ hovered }: { hovered: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="w-45 h-45 md:w-64 md:h-64 overflow-visible"
      animate={{ y: [0, -7, 0], rotate: [0, 0.6, 0, -0.6, 0] }}
      transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
      style={{ filter: hovered ? 'drop-shadow(0 0 20px rgba(0,200,150,0.3))' : 'drop-shadow(0 0 6px rgba(255,255,255,0.06))' }}
    >
      <defs>
        <linearGradient id="paperGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#151515" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
      </defs>

      {/* paper */}
      <rect x="45" y="30" width="110" height="140" rx="3" fill="url(#paperGrad)" stroke="#2a2a2a" strokeWidth="1" />
      <rect x="45" y="30" width="110" height="10" rx="3" fill="#111111" />

      {/* header */}
      <text x="55" y="50" fontSize="6" fill="#C8A96B" fontFamily="IBM Plex Mono, monospace" letterSpacing="1">MEMORANDUM</text>
      <line x1="55" y1="56" x2="145" y2="56" stroke="#2a2a2a" strokeWidth="0.8" />

      {/* keyword tags */}
      <g fontFamily="IBM Plex Mono, monospace" fontSize="5.2" fill="#8C8C8C">
        <rect x="55" y="64" width="26" height="10" rx="2" fill="none" stroke="#3a3a3a" strokeWidth="0.6" />
        <text x="59" y="71">RISK</text>

        <rect x="85" y="64" width="26" height="10" rx="2" fill="none" stroke="#3a3a3a" strokeWidth="0.6" />
        <text x="89" y="71">DEBT</text>

        <rect x="55" y="78" width="42" height="10" rx="2" fill="none" stroke="#3a3a3a" strokeWidth="0.6" />
        <text x="59" y="85">COVENANTS</text>

        <rect x="101" y="78" width="30" height="10" rx="2" fill="none" stroke="#3a3a3a" strokeWidth="0.6" />
        <text x="105" y="85">RATING</text>
      </g>

      {/* body lines */}
      <g stroke="#232323" strokeWidth="2.4" strokeLinecap="round">
        <line x1="55" y1="98" x2="145" y2="98" />
        <line x1="55" y1="106" x2="140" y2="106" />
        <line x1="55" y1="114" x2="145" y2="114" />
        <line x1="55" y1="122" x2="120" y2="122" />
      </g>

      {/* handwritten line reveal on hover */}
      <g>
        <motion.rect
          x="53" y="134" height="16"
          fill="#0a0a0a"
          initial={false}
          animate={{ width: hovered ? 0 : 96 }}
          transition={{ duration: hovered ? 0 : 0.3 }}
        />
        <text x="55" y="146" fontSize="6.5" fill="#796644" fontFamily="Fraunces, serif" fontStyle="italic">
          Thank you for trusting us.
        </text>
        <motion.rect
          x="53" y="132" height="18"
          fill="#0a0a0a"
          initial={{ width: 96 }}
          animate={{ width: hovered ? 0 : 96 }}
          transition={{ duration: hovered ? 1.1 : 0, ease: 'easeInOut', delay: hovered ? 0.15 : 0 }}
          style={{ transformOrigin: 'right' }}
        />
      </g>

      {/* fountain pen nib gliding above the line */}
      <motion.g
        initial={{ x: 53, y: 132, opacity: 0 }}
        animate={
          hovered
            ? { x: [53, 149], y: 132, opacity: [0, 1, 1, 0] }
            : { x: 53, opacity: 0 }
        }
        transition={{ duration: 1.1, delay: hovered ? 0.15 : 0, ease: 'easeInOut' }}
      >
        <g transform="translate(6,10) scale(0.45)">
  <path
    d="M0,-10 L8,0 L0,14 L-8,0 Z"
    fill="#C8A96B"
    stroke="#8a6f3f"
    strokeWidth="1"
  />

  <circle
    cx="0"
    cy="2"
    r="2"
    fill="#111111"
  />

  <line
    x1="0"
    y1="-10"
    x2="0"
    y2="14"
    stroke="#8a6f3f"
    strokeWidth="1"
  />
</g>
      </motion.g>

      {/* seal */}
      <circle cx="128" cy="150" r="9" fill="none" stroke="#C8A96B" strokeWidth="1" opacity={hovered ? 0.9 : 0.4} />
      <text x="128" y="153" fontSize="6" fill="#C8A96B" textAnchor="middle" fontFamily="Fraunces, serif" opacity={hovered ? 0.9 : 0.4}>R</text>
    </motion.svg>
  )
}
