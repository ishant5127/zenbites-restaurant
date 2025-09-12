'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: '禅心', href: '#hero', en: 'Home' },
    { name: '物語', href: '#about', en: 'About' },
    { name: '献立', href: '#menu', en: 'Menu' },
    { name: '文化', href: '#culture', en: 'Culture' },
    { name: '動画', href: '#videos', en: 'Videos' },
    { name: '特典', href: '#promotions', en: 'Offers' },
    { name: '連絡', href: '#contact', en: 'Contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-white/20' 
          : 'bg-black/30 backdrop-blur-md border-b border-white/10'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="container-zen section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-sakura to-zen-green rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-sawarabi text-xl drop-shadow-md">禅</span>
            </div>
            <div>
              <h1 className={`font-sawarabi text-2xl transition-colors duration-300 ${
                isScrolled ? 'text-ink-black' : 'text-white drop-shadow-lg'
              }`}>ZenBites</h1>
              <p className={`text-xs font-light transition-colors duration-300 ${
                isScrolled ? 'text-zen-green' : 'text-rice-paper drop-shadow-md'
              }`}>Buddhist Japanese Kitchen</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`group flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-ink-black hover:text-zen-green hover:bg-zen-green/10' 
                    : 'text-white hover:text-sakura hover:bg-white/10 drop-shadow-md'
                }`}
                whileHover={{ y: -2, scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <span className="text-sm font-sawarabi font-medium">{item.name}</span>
                <span className="text-xs font-light opacity-90">{item.en}</span>
                <motion.div
                  className="h-0.5 w-0 bg-gradient-to-r from-sakura to-zen-green group-hover:w-full transition-all duration-300"
                  layoutId="navbar-indicator"
                />
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-zen-green to-zen-green/90 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(107, 142, 35, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve Table
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className={`w-6 h-0.5 bg-ink-black transition-all ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <motion.div
              className={`w-6 h-0.5 bg-ink-black transition-all ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <motion.div
              className={`w-6 h-0.5 bg-ink-black transition-all ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-zen py-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full flex items-center justify-between py-3 text-left text-ink-black hover:text-zen-green border-b border-gray-100 last:border-b-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ x: 10 }}
                >
                  <div>
                    <div className="font-sawarabi text-lg">{item.name}</div>
                    <div className="text-sm text-gray-600">{item.en}</div>
                  </div>
                  <motion.div
                    className="w-2 h-2 bg-sakura rounded-full"
                    whileHover={{ scale: 1.5 }}
                  />
                </motion.button>
              ))}
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="btn-primary w-full"
                >
                  Reserve Table
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar