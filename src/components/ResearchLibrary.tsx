import { motion } from 'framer-motion'
import GlassCard from './GlassCard'
import ProfileBust from './objects/ProfileBust'
import WhiskyBottle from './objects/WhiskyBottle'
import MemoDocument from './objects/MemoDocument'
import Briefcase from './objects/Briefcase'

const cards = [
  {
    eyebrow: 'Exhibit I',
    title: 'Profile',
    description: 'A closer look at the analyst behind the research.',
    href: 'https://harsh-daftari.github.io/Profile/',
    accent: 'emerald' as const,
    Object: ProfileBust,
  },
  {
    eyebrow: 'Exhibit II',
    title: 'Investment Thesis',
    description: 'A distilled, high-conviction case for RKL.',
    href: 'https://harsh-daftari.github.io/RKL-investment-thesis/',
    accent: 'champagne' as const,
    Object: WhiskyBottle,
  },
  {
    eyebrow: 'Exhibit III',
    title: 'Credit Underwriting Memo',
    description: 'Risk, debt structure, covenants, and rating rationale.',
    href: 'https://harsh-daftari.github.io/RKL-Credit-Underwriting-Memo/',
    accent: 'emerald' as const,
    Object: MemoDocument,
  },
  {
    eyebrow: 'Exhibit IV',
    title: 'Portfolio Project',
    description: 'A complete body of work, open for review.',
    href: 'https://harsh-daftari.github.io/portfolio-project/',
    accent: 'champagne' as const,
    Object: Briefcase,
  },
]

export default function ResearchLibrary() {
  return (
    <section id="research" className="relative py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <span className="eyebrow text-emerald">Research Library</span>
          <h2 className="font-display text-4xl md:text-5xl text-bone mt-4 tracking-tight text-balance">
            Four exhibits, one body of work.
          </h2>
          <p className="mt-4 text-ash font-light max-w-xl leading-relaxed">
            Each piece is a complete study — open one to read the full
            research in a new tab.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
          {cards.map((card, i) => (
            <GlassCard
              key={card.title}
              href={card.href}
              eyebrow={card.eyebrow}
              title={card.title}
              description={card.description}
              accent={card.accent}
              index={i}
            >
              {(hovered) => <card.Object hovered={hovered} />}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
