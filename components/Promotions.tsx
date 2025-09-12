'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Promotions = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 30) // 30 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const offers = [
    {
      title: 'Taste of Zen Combo',
      japanese: '禅の味セット',
      price: '₹999',
      originalPrice: '₹1,200',
      description: 'Experience our signature dishes in one perfect meal: Shojin Tempura, Vegetarian Sushi Rolls, Miso Soup, and Matcha Ice Cream.',
      features: [
        'Shojin Tempura (₹450)',
        'Vegetarian Sushi Rolls (₹400)', 
        'Miso Soup (₹220)',
        'Matcha Ice Cream (₹300)'
      ],
      savings: 'Save ₹201',
      badge: 'Best Value',
      image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ]

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            linear-gradient(rgba(233, 166, 166, 0.15), rgba(107, 142, 35, 0.15)),
            url("https://images.pexels.com/photos/1907642/pexels-photo-1907642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") center/cover fixed,
            linear-gradient(135deg, #E9A6A6 0%, #6B8E23 50%, #FAF3E0 100%)
          `
        }}
      />
      
      {/* Content Layer */}
      <div className="relative z-10 section-padding">
        {/* Floating Sakura Petals */}
        <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute sakura-petal"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
            animate={{
              y: [-20, 800],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <div className="container-zen relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-zen-green font-sawarabi text-xl mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            特典
          </motion.p>
          
          <motion.h2
            className="text-zen-title mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Special Offers
          </motion.h2>
          
          <motion.p
            className="text-zen-subtitle max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Discover our exclusive promotions and seasonal specials
          </motion.p>
        </motion.div>

        {/* Main Offer Card */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {offers.map((offer) => (
            <motion.div
              key={offer.title}
              className="card-zen overflow-hidden relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Background Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-sakura/5 to-zen-green/5"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* Content */}
                <div className="space-y-6">
                  {/* Badge */}
                  <motion.div
                    className="inline-block"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <span className="bg-sakura text-white px-4 py-2 rounded-full text-sm font-medium">
                      {offer.badge}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <h3 className="text-4xl font-sawarabi text-ink-black mb-2">
                      {offer.title}
                    </h3>
                    <p className="text-zen-green font-sawarabi text-lg">
                      {offer.japanese}
                    </p>
                  </motion.div>

                  {/* Price */}
                  <motion.div
                    className="flex items-baseline space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <span className="text-5xl font-bold text-zen-green">
                      {offer.price}
                    </span>
                    <span className="text-xl text-gray-400 line-through">
                      {offer.originalPrice}
                    </span>
                    <span className="bg-zen-green text-white px-3 py-1 rounded-full text-sm font-medium">
                      {offer.savings}
                    </span>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    className="text-lg text-gray-600 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    {offer.description}
                  </motion.p>

                  {/* Features */}
                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    {offer.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                      >
                        <div className="w-2 h-2 bg-sakura rounded-full flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                  >
                    <button className="btn-primary px-8 py-4 text-lg">
                      Order Now
                    </button>
                  </motion.div>
                </div>

                {/* Image */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 1 }}
                >
                  <div className="aspect-square rounded-3xl overflow-hidden">
                    <motion.img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-12 h-12 bg-sakura/20 rounded-full"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-8 h-8 bg-zen-green/20 rounded-full"
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div
            className="card-zen p-8 bg-gradient-to-r from-white to-rice-paper"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.h4
              className="text-2xl font-sawarabi text-ink-black mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              Limited Time Offer
            </motion.h4>
            
            <motion.p
              className="text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              Hurry! This special offer expires in:
            </motion.p>

            <div className="grid grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((unit, index) => (
                <motion.div
                  key={unit.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.3 + index * 0.1, duration: 0.6 }}
                >
                  <motion.div
                    className="bg-zen-green text-white text-2xl md:text-3xl font-bold p-4 rounded-2xl mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.5 
                    }}
                  >
                    {unit.value.toString().padStart(2, '0')}
                  </motion.div>
                  <p className="text-sm text-gray-600 font-medium">
                    {unit.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Offer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.div
            className="max-w-3xl mx-auto card-zen p-8 bg-gradient-to-r from-sakura/5 to-zen-green/5"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h4
              className="text-3xl font-sawarabi text-ink-black mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              🍃 Free Matcha Ice Cream
            </motion.h4>
            
            <motion.p
              className="text-xl text-zen-green font-sawarabi mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              First 100 Customers Only
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              Be among the first 100 guests at ZenBites and receive a complimentary 
              Matcha Ice Cream with any main course order. A sweet beginning to your zen journey!
            </motion.p>

            <motion.button
              className="btn-secondary px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              Claim Your Spot
            </motion.button>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Promotions