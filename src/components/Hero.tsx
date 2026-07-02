import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const easeOut = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState({ x: 50, y: 40 })

  useEffect(() => {
    function handleMove(e: PointerEvent) {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      setMouse({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      })
    }
    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  const particles = Array.from({ length: 26 })

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* base gradient wash */}
      <div className="absolute inset-0 bg-black" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 20%, rgba(0,200,150,0.10), transparent 60%), radial-gradient(ellipse 60% 45% at 80% 75%, rgba(200,169,107,0.07), transparent 60%)',
        }}
      />

      {/* mouse-follow glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-[background] duration-300 ease-out"
        style={{
          background: `radial-gradient(500px circle at ${mouse.x}% ${mouse.y}%, rgba(0,200,150,0.09), transparent 65%)`,
        }}
      />

      {/* fine vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 220px rgba(0,0,0,0.9)' }}
      />

      {/* floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((_, i) => {
          const size = 1 + (i % 3)
          const left = (i * 37) % 100
          const delay = (i % 10) * 0.6
          const duration = 12 + (i % 6) * 3
          const isGold = i % 4 === 0
          return (
            <motion.span
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                bottom: '-5%',
                background: isGold ? '#C8A96B' : '#00C896',
                opacity: 0.35,
              }}
              animate={{ y: ['0vh', '-105vh'], opacity: [0, 0.5, 0] }}
              transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
            />
          )
        })}
      </div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="eyebrow text-champagne mb-7"
        >
          Equity Research Analyst
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: 'blur(14px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, delay: 0.15, ease: easeOut }}
          className="font-display font-normal text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight text-bone text-balance"
        >
          Harsh Daftari
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.35, ease: easeOut }}
          className="mt-7 text-sm md:text-base font-mono tracking-wide text-emerald/90 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
        >
          <span>Equity Research</span>
          <span className="text-ash">·</span>
          <span>Valuation</span>
          <span className="text-ash">·</span>
          <span>Investment Analysis</span>
          <span className="text-ash">·</span>
          <span>CFA Level I</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: easeOut }}
          className="mt-8 max-w-xl text-base md:text-lg text-ash font-light leading-relaxed text-balance"
        >
          Researching India's next decade of growth through deep fundamental
          analysis, valuation, and investment frameworks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: easeOut }}
          className="mt-11 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#research"
            className="group relative px-8 py-3.5 rounded-full bg-emerald text-black font-medium text-sm tracking-wide overflow-hidden transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span className="relative z-10">View Research</span>
            <span className="absolute inset-0 bg-gradient-to-r from-emerald to-champagne opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-line text-bone font-medium text-sm tracking-wide backdrop-blur-sm hover:border-champagne/60 hover:text-champagne transition-colors duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.a
        href="#research"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-9 z-10 flex flex-col items-center gap-3 text-ash hover:text-emerald transition-colors duration-300"
      >
        <span className="eyebrow">Explore the Library</span>
        <motion.div
          className="w-[1px] h-10 bg-gradient-to-b from-emerald to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.9, 0.3, 0.9] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.a>
    </section>
  )
}
