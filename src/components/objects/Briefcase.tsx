import { motion } from 'framer-motion'

export default function Briefcase({ hovered }: { hovered: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="w-60 h-60 md:w-48 md:h-48 overflow-visible"
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        filter: hovered
          ? 'drop-shadow(0 0 22px rgba(0,200,150,0.35))'
          : 'drop-shadow(0 0 6px rgba(0,0,0,0.4))',
      }}
    >
      <defs>
        <linearGradient id="leather" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c1712" />
          <stop offset="100%" stopColor="#0c0906" />
        </linearGradient>

        <radialGradient id="emeraldGlow" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#00C896" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00C896" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* subtle glow */}
      <motion.circle
        cx="100"
        cy="100"
        r="60"
        fill="url(#emeraldGlow)"
        animate={{
          opacity: hovered ? 1 : 0.45,
          scale: hovered ? 1.08 : 1,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* body */}
      <rect
        x="50"
        y="70"
        width="100"
        height="80"
        rx="8"
        fill="url(#leather)"
        stroke="#3a2f22"
        strokeWidth="1"
      />

      {/* stitching */}
      <rect
        x="56"
        y="76"
        width="88"
        height="68"
        rx="4"
        fill="none"
        stroke="#4a3c2a"
        strokeWidth="0.5"
        strokeDasharray="2 2"
        opacity="0.5"
      />

      {/* handle shadow */}
      <path
        d="M85,70 L85,56 Q85,48 100,48 Q115,48 115,56 L115,70"
        fill="none"
        stroke="#1c1712"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* handle */}
      <path
        d="M85,70 L85,56 Q85,48 100,48 Q115,48 115,56 L115,70"
        fill="none"
        stroke="#3a2f22"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* locks */}
      <motion.g
        animate={{
          y: hovered ? -2 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <rect
          x="68"
          y="86"
          width="16"
          height="14"
          rx="2.5"
          fill="#B8B8B8"
          stroke="#6e6e6e"
          strokeWidth="1"
        />
        <circle cx="76" cy="93" r="2.4" fill="#3a3a3a" />

        <rect
          x="116"
          y="86"
          width="16"
          height="14"
          rx="2.5"
          fill="#B8B8B8"
          stroke="#6e6e6e"
          strokeWidth="1"
        />
        <circle cx="124" cy="93" r="2.4" fill="#3a3a3a" />
      </motion.g>

      {/* corner plates */}
      <rect
        x="50"
        y="70"
        width="14"
        height="14"
        rx="2"
        fill="#8C8C8C"
        opacity="0.5"
      />
      <rect
        x="136"
        y="70"
        width="14"
        height="14"
        rx="2"
        fill="#8C8C8C"
        opacity="0.5"
      />

      {/* feet */}
      <rect x="58" y="148" width="8" height="5" rx="1.5" fill="#1c1712" />
      <rect x="134" y="148" width="8" height="5" rx="1.5" fill="#1c1712" />
    </motion.svg>
  )
}