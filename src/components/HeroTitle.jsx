import { motion, useReducedMotion } from 'framer-motion'
import { wordReveal, charReveal, stagger } from '../motion'

function Words({ text, className = '', delay = 0 }) {
  const parts = text.split(' ')
  return (
    <motion.span
      className={className}
      variants={stagger(0.08)}
      initial="hidden"
      animate="show"
      transition={{ delayChildren: delay }}
      style={{ display: 'inline' }}
    >
      {parts.map((w, i) => (
        <span
          key={`${w}-${i}`}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'top',
            marginRight: '0.28em',
            perspective: 900,
          }}
        >
          <motion.span
            style={{ display: 'inline-block', transformOrigin: '50% 100%' }}
            variants={wordReveal}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

function Chars({ text }) {
  return (
    <motion.span
      variants={stagger(0.028)}
      initial="hidden"
      animate="show"
      style={{ display: 'inline-block' }}
    >
      {text.split('').map((c, i) => (
        <span
          key={`${c}-${i}`}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}
        >
          <motion.span style={{ display: 'inline-block' }} variants={charReveal}>
            {c === ' ' ? '\u00A0' : c}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

export default function HeroTitle() {
  const reduce = useReducedMotion()
  if (reduce) {
    return (
      <h1 className="hero-title">
        Your Vision. Our Code. <span className="grad">Limitless Possibilities.</span>
      </h1>
    )
  }
  return (
    <h1 className="hero-title" style={{ perspective: 1000 }}>
      <Words text="Your Vision. Our Code." />
      <span className="grad hero-grad-pulse">
        <Chars text="Limitless Possibilities." />
      </span>
    </h1>
  )
}
