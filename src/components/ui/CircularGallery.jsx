import { motion } from "framer-motion"

export default function CircularGallery({ items = [] }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 absolute top-1/2 -translate-y-1/2"
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear"
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="relative w-[200px] h-[260px] sm:w-[220px] sm:h-[280px] md:w-[260px] md:h-[320px] lg:w-[300px] lg:h-[380px] xl:w-[320px] xl:h-[420px] shrink-0"
            style={{
              transform: `rotate(${(index % 5 - 2) * (typeof window !== 'undefined' && window.innerWidth < 768 ? 1.2 : 3)}deg)`
            }}
          >
            <div className="glass-ultra rounded-2xl overflow-hidden w-full h-full shadow-glow">
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
