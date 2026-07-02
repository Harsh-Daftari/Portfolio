import { useRef, useState, type MouseEvent, type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlassCardProps {
  href: string
  eyebrow: string
  title: string
  description: string
  accent: 'emerald' | 'champagne'
  children: (hovered: boolean) => ReactNode
  index: number
}

export default function GlassCard({
  href,
  eyebrow,
  title,
  description,
  accent,
  children,
  index,
}: GlassCardProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [glow, setGlow] = useState({ x: 50, y: 50 })
  const [hovered, setHovered] = useState(false)

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    setTilt({ x: (py - 0.5) * -8, y: (px - 0.5) * 8 })
    setGlow({ x: px * 100, y: py * 100 })
  }

  function handleLeave() {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }

  const accentColor = accent === 'emerald' ? '#00C896' : '#C8A96B'

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl glass shadow-glass overflow-hidden"
      style={{ perspective: 1000 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        y: hovered ? -6 : 0,
      }}
      whileTap={{ scale: 0.985 }}
    >
      {/* cursor-follow glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(360px circle at ${glow.x}% ${glow.y}%, ${
            accent === 'emerald' ? 'rgba(0,200,150,0.16)' : 'rgba(200,169,107,0.16)'
          }, transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full p-8 md:p-9">
        <div className="flex items-center justify-between mb-8">
          <span className="eyebrow text-ash">{eyebrow}</span>
          <span
            className="text-xs font-mono opacity-40 group-hover:opacity-90 transition-opacity duration-300"
            style={{ color: accentColor }}
          >
            ↗
          </span>
        </div>

        <div className="flex-1 flex items-center justify-center py-6 min-h-[160px]">
          {children(hovered)}
        </div>

        <div className="mt-8">
          <h3 className="font-display text-2xl md:text-[1.7rem] text-bone mb-2 tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-ash leading-relaxed font-light">{description}</p>
        </div>
      </div>

      {/* border glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1px ${accentColor}55, 0 0 30px ${accentColor}22` }}
      />
    </motion.a>
  )
}
