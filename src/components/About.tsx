import { motion } from 'framer-motion'

const stats = [
  { value: 'CFA I', label: 'Level I Passed' },
  { value: '04', label: 'Major Research Projects' },
  { value: '01', label: 'Equity Research Internship' },
  { value: '2', label: 'Investment & Credit Analysis Focus' },
]

const credentials = [
  'CFA Level I',
  'BBA, Manipal University Jaipur',
  'Equity Research Analyst',
  'NISM Research Analyst',
]

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 px-6 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <span className="eyebrow text-champagne">About</span>
            <h2 className="font-display text-4xl md:text-5xl text-bone mt-4 mb-6 tracking-tight">
              Harsh Daftari
            </h2>
            <ul className="space-y-3">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3 text-ash font-light">
                  <span className="mt-2 w-1 h-1 rounded-full bg-emerald flex-shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="lg:col-span-3 grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl p-6 md:p-7 flex flex-col justify-between min-h-[140px] transition-shadow duration-300 hover:shadow-emerald-glow"
              >
                <span className="font-display text-3xl md:text-4xl text-bone">
                  {s.value}
                </span>
                <span className="text-xs text-ash mt-4 leading-snug font-light">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
