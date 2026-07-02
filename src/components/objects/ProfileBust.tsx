import { motion } from 'framer-motion'

export default function ProfileBust({ hovered }: { hovered: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="w-40 h-40 md:w-48 md:h-48"
      animate={{
        y: [0, -8, 0],
        rotate: hovered ? [0, -2, 0] : [0, 1.5, 0, -1.5, 0],
      }}
      transition={{
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        rotate: { duration: hovered ? 1.6 : 6, repeat: Infinity, ease: 'easeInOut' },
      }}
      style={{ filter: hovered ? 'drop-shadow(0 0 22px rgba(0,200,150,0.45))' : 'drop-shadow(0 0 6px rgba(0,200,150,0.12))' }}
    >
      <defs>
        <linearGradient id="bustGlass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="45%" stopColor="#0d0d0d" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <linearGradient id="bustFacetLight" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00C896" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#00C896" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* shoulders / base - low poly facets */}
      <polygon points="45,165 100,145 155,165 165,195 35,195" fill="url(#bustGlass)" stroke="#1f1f1f" strokeWidth="0.5" />
      <polygon points="100,145 155,165 165,195 100,190" fill="url(#bustFacetLight)" opacity="0.4" />

      {/* neck */}
      <polygon points="82,120 118,120 122,148 78,148" fill="#0f0f0f" stroke="#1f1f1f" strokeWidth="0.5" />

      {/* head - faceted low poly */}
      <polygon points="100,45 130,60 138,95 122,128 100,135" fill="url(#bustGlass)" stroke="#262626" strokeWidth="0.5" />
      <polygon points="100,45 70,60 62,95 78,128 100,135" fill="#0a0a0a" stroke="#262626" strokeWidth="0.5" />
      <polygon points="100,45 130,60 100,68 70,60" fill="url(#bustFacetLight)" opacity="0.6" />
      <polygon points="122,128 138,95 130,60 145,88 128,120" fill="#050505" />

      {/* subtle jaw highlight */}
      <polygon points="78,128 100,135 100,122 82,118" fill="#161616" opacity="0.7" />
      <polygon points="122,128 100,135 100,122 118,118" fill="#161616" opacity="0.5" />

      {/* eyes — blink idle animation */}
      <motion.ellipse
        cx="86" cy="88" rx="4.2" ry="2.6"
        fill="#00C896"
        animate={{ scaleY: [1, 1, 0.1, 1, 1, 1, 1, 0.1, 1] }}
        transition={{ duration: 5.5, repeat: Infinity, times: [0, 0.4, 0.44, 0.48, 0.6, 0.75, 0.9, 0.94, 1] }}
        style={{ transformOrigin: '86px 88px' }}
        opacity={hovered ? 0.95 : 0.55}
      />
      <motion.ellipse
        cx="114" cy="88" rx="4.2" ry="2.6"
        fill="#00C896"
        animate={{ scaleY: [1, 1, 0.1, 1, 1, 1, 1, 0.1, 1] }}
        transition={{ duration: 5.5, repeat: Infinity, times: [0, 0.4, 0.44, 0.48, 0.6, 0.75, 0.9, 0.94, 1] }}
        style={{ transformOrigin: '114px 88px' }}
        opacity={hovered ? 0.95 : 0.55}
      />

      {/* mouth: neutral vs smile, crossfaded on hover */}
      <motion.path
        d="M88,108 Q100,110 112,108"
        stroke="#8C8C8C"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        animate={{ opacity: hovered ? 0 : 0.8 }}
        transition={{ duration: 0.4 }}
      />
      <motion.path
        d="M86,106 Q100,118 114,106"
        stroke="#00C896"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.svg>
  )
}
