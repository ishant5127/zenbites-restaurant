'use client'

import { motion } from 'framer-motion'
import { fadeInUpAnimation, slideInLeftAnimation } from '@/utils/animations'

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
            url("https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") center/cover no-repeat,
            linear-gradient(135deg, #8B5E3C 0%, #6B8E23 50%, #1C1C1C 100%)
          `
        }}
      />
      
      {/* Enhanced Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      
      {/* Additional Zen Atmosphere Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zen-green/10 via-transparent to-sakura/5" />
      
      {/* Zen Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="zen-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="2" fill="#E9A6A6" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#zen-pattern)" />
        </svg>
      </div>

      {/* Sakura Petals - Hero Section Only */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`hero-petal-${i}`}
            className="absolute sakura-petal"
            style={{
              left: `${10 + (i * 12)}%`,
              top: '-10px',
              width: '8px',
              height: '8px',
              backgroundColor: '#E9A6A6',
              borderRadius: '50% 0 50% 0',
              opacity: 0.6,
            }}
            animate={{
              y: [0, 800],
              x: [0, Math.sin(i) * 50, Math.cos(i) * 30, 0],
              rotate: [0, 360, 180, 360],
              opacity: [0, 0.6, 0.8, 0.4, 0],
            }}
            transition={{
              duration: 12 + (i * 2),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          {...fadeInUpAnimation}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Japanese Title */}
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-sawarabi text-white mb-4 drop-shadow-2xl"
            style={{
              textShadow: '4px 4px 8px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,0.6), 0 0 20px rgba(233,166,166,0.3)'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            禅咬
          </motion.h1>

          {/* English Title */}
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-sawarabi text-white mb-6 drop-shadow-2xl"
            style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6), 0 0 15px rgba(233,166,166,0.3)'
            }}
            {...slideInLeftAnimation}
            transition={{ duration: 1, delay: 0.8 }}
          >
            ZenBites
          </motion.h2>

          {/* Subtitle */}
          <motion.div
            className="backdrop-blur-sm bg-black/20 rounded-lg px-8 py-4 mb-8 border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-white mb-2 font-light drop-shadow-lg">
              Buddhist Japanese Vegetarian Kitchen
            </p>
            <p className="text-lg md:text-xl text-sakura font-sawarabi drop-shadow-lg">
              Mindful Dining, Authentic Flavors
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.button
              onClick={() => scrollToSection('#menu')}
              className="px-10 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-zen-green to-zen-green/90 text-white shadow-2xl backdrop-blur-sm border border-white/20 hover:from-zen-green/90 hover:to-zen-green transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 15px 40px rgba(107, 142, 35, 0.4)' 
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Menu
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="px-10 py-4 text-lg font-medium rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white hover:text-zen-green transition-all duration-300 shadow-xl"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 15px 40px rgba(255, 255, 255, 0.3)' 
              }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve a Table
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm font-light mb-2 group-hover:text-sakura transition-colors">
            Scroll to explore
          </span>
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            whileHover={{ scale: 1.1 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </motion.button>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-sakura/30 rounded-full"
        animate={{
          y: [-20, 20, -20],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-6 h-6 bg-zen-green/30 rounded-full"
        animate={{
          y: [20, -20, 20],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-rice-paper/50 rounded-full"
        animate={{
          y: [-15, 15, -15],
          x: [-10, 10, -10],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  )
}

export default Hero