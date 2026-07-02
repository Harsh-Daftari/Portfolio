import { motion } from 'framer-motion'

export default function WhiskyBottle({ hovered }: { hovered: boolean }) {
  const particles = Array.from({ length: 7 })

  return (
    <motion.svg
      viewBox="0 0 200 240"
      className="w-40 h-40 md:w-48 md:h-48 overflow-visible"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
      style={{ filter: hovered ? 'drop-shadow(0 0 22px rgba(200,169,107,0.45))' : 'drop-shadow(0 0 6px rgba(200,169,107,0.12))' }}
    >
      <defs>
        <linearGradient id="glassBody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="50%" stopColor="#0d0d0d" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>
        <linearGradient id="liquidAmber" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8A96B" />
          <stop offset="100%" stopColor="#8a6f3f" />
        </linearGradient>
        <clipPath id="bottleClip">
          <path d="M82,70 L82,190 Q82,196 88,196 L112,196 Q118,196 118,190 L118,70 Z" />
        </clipPath>
      </defs>

      {/* bottle body */}
      <path
        d="M82,70 L82,190 Q82,196 88,196 L112,196 Q118,196 118,190 L118,70 Z"
        fill="url(#glassBody)"
        stroke="#2a2a2a"
        strokeWidth="1"
      />

      {/* liquid with gentle wobble */}
      <g clipPath="url(#bottleClip)">
        <motion.path
          d="M78,130 Q100,124 122,130 L122,200 L78,200 Z"
          fill="url(#liquidAmber)"
          animate={{
            d: [
              'M78,130 Q100,124 122,130 L122,200 L78,200 Z',
              'M78,132 Q100,127 122,131 L122,200 L78,200 Z',
              'M78,130 Q100,124 122,130 L122,200 L78,200 Z',
            ],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          opacity="0.9"
        />
      </g>

      {/* glass highlight */}
      <rect x="86" y="76" width="4" height="108" fill="#ffffff" opacity="0.06" rx="2" />

      {/* bottle neck */}
      <path d="M92,40 L92,70 L108,70 L108,40 Z" fill="url(#glassBody)" stroke="#2a2a2a" strokeWidth="1" />

      {/* label */}
      <rect x="84" y="145" width="32" height="22" fill="#050505" stroke="#C8A96B" strokeWidth="0.6" opacity="0.85" />
      <text x="100" y="154" textAnchor="middle" fontSize="5" fill="#C8A96B" fontFamily="IBM Plex Mono, monospace" letterSpacing="0.5">RKL</text>
      <text x="100" y="161" textAnchor="middle" fontSize="3.2" fill="#8C8C8C" fontFamily="IBM Plex Mono, monospace">EST. RESEARCH</text>

{/* cork — pops upward on hover */}
<g
  transform={`translate(0 ${hovered ? -35 : 0})`}
  style={{
    transition: 'transform 450ms cubic-bezier(0.22, 1, 0.36, 1)',
  }}
>
  <rect
    x="94"
    y="26"
    width="12"
    height="16"
    rx="2"
    fill="#C8A96B"
    stroke="#8a6f3f"
    strokeWidth="0.6"
  />
  <rect
    x="92"
    y="22"
    width="16"
    height="7"
    rx="2"
    fill="#0a0a0a"
    stroke="#C8A96B"
    strokeWidth="0.8"
  />
</g>      {/* champagne splash particles */}
      {particles.map((_, i) => {
        const angle = (i / particles.length) * Math.PI - Math.PI / 2
        const dist = 26 + (i % 3) * 8
        const tx = 100 + Math.cos(angle) * dist
        const ty = 30 + Math.sin(angle) * dist * 0.8
        return (
          <motion.circle
            key={i}
            cx="100"
            cy="30"
            r={i % 2 === 0 ? 2.2 : 1.4}
            fill="#C8A96B"
            initial={false}
            animate={
              hovered
                ? { cx: tx, cy: ty - 40, opacity: [0, 1, 0], scale: [0.4, 1, 0.6] }
                : { opacity: 0 }
            }
            transition={{ duration: 0.9, delay: i * 0.04, ease: 'easeOut' }}
          />
        )
      })}
    </motion.svg>
  )
}
