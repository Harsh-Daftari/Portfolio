import { motion } from 'framer-motion'

const links = [
  {
    label: 'LinkedIn',
    value: 'Connect professionally',
    href: 'https://www.linkedin.com/in/harsh-daftari/',
  },
  {
    label: 'GitHub',
    value: 'Browse the code',
    href: 'https://github.com/harsh-daftari',
  },
  {
    label: 'Email',
    value: 'Start a conversation',
    href: 'mailto:harshdaftari@gmail.com',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 px-6 border-t border-line">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="eyebrow text-emerald"
        >
          Contact
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-6xl text-bone mt-5 tracking-tight text-balance"
        >
          Let's talk research.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group glass rounded-xl p-7 flex flex-col items-center gap-2 transition-shadow duration-300 hover:shadow-emerald-glow"
            >
              <span className="font-display text-xl text-bone group-hover:text-emerald transition-colors duration-300">
                {link.label}
              </span>
              <span className="text-xs text-ash font-light">{link.value}</span>
            </motion.a>
          ))}
        </div>

        <p className="mt-24 text-xs text-ash/60 font-mono tracking-wider">
          © {new Date().getFullYear()} Harsh Daftari — All research is independent and for informational purposes.
        </p>
      </div>
    </section>
  )
}
