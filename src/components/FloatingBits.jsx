import { motion, useReducedMotion } from 'framer-motion'

const BITS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 7) % 94}%`,
  top: `${(i * 23 + 11) % 88}%`,
  size: 3 + (i % 5),
  dur: 4.5 + (i % 7) * 0.7,
  delay: (i % 9) * 0.35,
}))

export default function FloatingBits() {
  const reduce = useReducedMotion()
  if (reduce) return null

  return (
    <div className="floating-bits" aria-hidden="true">
      {BITS.map((b) => (
        <motion.span
          key={b.id}
          className="floating-bit"
          style={{
            left: b.left,
            top: b.top,
            width: b.size,
            height: b.size,
          }}
          animate={{
            y: [0, -28 - (b.id % 5) * 4, 0, 18, 0],
            x: [0, 12, -8, 0],
            opacity: [0.15, 0.85, 0.35, 0.9, 0.2],
            scale: [1, 1.6, 1, 1.3, 1],
          }}
          transition={{
            duration: b.dur,
            delay: b.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
