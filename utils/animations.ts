import anime from 'animejs'

// Sakura petals animation using anime.js
export const initializeSakuraAnimation = () => {
  // Create sakura petals
  const createSakuraPetals = () => {
    const container = document.body
    const petalCount = 15

    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement('div')
      petal.className = 'sakura-petal'
      petal.style.position = 'fixed'
      petal.style.pointerEvents = 'none'
      petal.style.zIndex = '1'
      
      // Random starting position
      petal.style.left = Math.random() * window.innerWidth + 'px'
      petal.style.top = '-10px'
      
      // Random size
      const size = Math.random() * 8 + 6
      petal.style.width = size + 'px'
      petal.style.height = size + 'px'
      
      // Random opacity
      petal.style.opacity = (Math.random() * 0.5 + 0.3).toString()
      
      container.appendChild(petal)

      // Animate the petal
      anime({
        targets: petal,
        translateY: window.innerHeight + 100,
        translateX: [
          { value: '+=' + (Math.random() * 100 - 50), duration: 2000 },
          { value: '+=' + (Math.random() * 100 - 50), duration: 2000 },
        ],
        rotate: Math.random() * 360,
        opacity: [
          { value: petal.style.opacity, duration: 0 },
          { value: 0, duration: 1000, delay: 3000 }
        ],
        duration: 8000 + Math.random() * 4000,
        easing: 'easeOutQuart',
        complete: () => {
          if (petal.parentNode) {
            petal.parentNode.removeChild(petal)
          }
        }
      })
    }
  }

  // Create petals every 3 seconds
  createSakuraPetals()
  setInterval(createSakuraPetals, 3000)
}

// Scroll-triggered animations
export const fadeInUpAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
}

export const slideInLeftAnimation = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
}

export const slideInRightAnimation = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
}

export const scaleAnimation = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
}

// Bento box reveal animation for menu items
export const bentoRevealAnimation = {
  initial: { opacity: 0, y: 30, rotateY: -15 },
  animate: { opacity: 1, y: 0, rotateY: 0 },
  whileHover: { 
    y: -10, 
    rotateY: 5, 
    scale: 1.02,
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
  },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
}

// Shoji sliding door animation
export const shojiSlideAnimation = {
  initial: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
  animate: { opacity: 1, clipPath: 'inset(0 0% 0 0)' },
  exit: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
}

// Lantern glow effect for videos
export const lanternGlowAnimation = {
  whileHover: {
    boxShadow: [
      '0 0 20px rgba(233, 166, 166, 0.5)',
      '0 0 40px rgba(233, 166, 166, 0.7)',
      '0 0 20px rgba(233, 166, 166, 0.5)'
    ],
    scale: 1.05,
    transition: { duration: 2, repeat: Infinity, repeatType: 'reverse' }
  }
}

// Stagger animation for value cards
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

// Brushstroke underline animation
export const brushstrokeAnimation = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
  transition: { duration: 0.6, ease: 'easeOut' }
}