'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { shojiSlideAnimation } from '@/utils/animations'

const Culture = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const cultureContent = [
    {
      title: 'Shojin Ryori History',
      japanese: '精進料理の歴史',
      content: 'Shojin Ryori, the Buddhist temple cuisine of Japan, originated in the 6th century when Buddhism was introduced from China. This sacred culinary tradition emphasizes simplicity, seasonality, and the complete absence of animal products, reflecting the Buddhist principle of non-violence (ahimsa).',
      icon: '🏮',
      timeline: '6th Century'
    },
    {
      title: 'Traditional Techniques',
      japanese: '伝統的技法',
      content: 'The art involves sophisticated knife skills, precise timing, and the "rule of five" - incorporating five colors, five flavors, and five cooking methods in each meal. Every ingredient is treated with reverence, and nothing is wasted, embodying the Buddhist principle of gratitude.',
      icon: '🔪',
      timeline: 'Ancient Methods'
    },
    {
      title: 'Sacred Utensils',
      japanese: '神聖な道具',
      content: 'Traditional tools include the oroshi (grater), suribachi (mortar), and specialized knives like the nakiri for vegetables. Each utensil has been refined over centuries to enhance the natural flavors and textures of plant-based ingredients without violence.',
      icon: '🥢',
      timeline: 'Handcrafted Tools'
    },
    {
      title: 'Modern Zen Kitchen',
      japanese: '現代の禅厨房',
      content: 'At ZenBites, we honor these ancient traditions while embracing modern techniques. Our kitchen becomes a meditation space where every chop, stir, and seasoning is performed with mindful intention, creating not just meals, but spiritual experiences.',
      icon: '✨',
      timeline: 'Present Day'
    }
  ]

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            linear-gradient(rgba(250, 243, 224, 0.88), rgba(250, 243, 224, 0.92)),
            url("https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") center/cover fixed,
            linear-gradient(135deg, #FAF3E0 0%, #6B8E23 50%, #8B5E3C 100%)
          `
        }}
      />
      
      {/* Content Layer */}
      <div className="relative z-10 section-padding">
        <div className="container-zen">
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
            文化
          </motion.p>
          
          <motion.h2
            className="text-zen-title mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            The Culture of Mindful Cooking
          </motion.h2>
          
          <motion.p
            className="text-zen-subtitle max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Discover the ancient art of Shojin Ryori and how it transforms cooking into a spiritual practice
          </motion.p>
        </motion.div>

        {/* Timeline Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {cultureContent.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-zen-green text-white shadow-lg scale-105'
                  : 'bg-white/80 text-gray-700 hover:bg-zen-green/10 hover:text-zen-green'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <span className="text-2xl">{item.icon}</span>
              <div className="text-left">
                <div className="font-medium">{item.title}</div>
                <div className="text-xs opacity-70 font-sawarabi">{item.japanese}</div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Content Panel with Shoji Door Effect */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="card-zen overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="p-8 md:p-12"
                variants={shojiSlideAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.8 }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <motion.div
                      className="flex items-center space-x-4 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.6 }}
                    >
                      <span className="text-6xl">{cultureContent[activeIndex].icon}</span>
                      <div>
                        <h3 className="text-3xl font-sawarabi text-ink-black mb-2">
                          {cultureContent[activeIndex].title}
                        </h3>
                        <p className="text-zen-green font-sawarabi">
                          {cultureContent[activeIndex].japanese}
                        </p>
                      </div>
                    </motion.div>

                    <motion.p
                      className="text-lg text-gray-700 leading-relaxed mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                    >
                      {cultureContent[activeIndex].content}
                    </motion.p>

                    <motion.div
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      <div className="w-8 h-0.5 bg-gradient-to-r from-sakura to-zen-green" />
                      <span className="text-sm font-medium text-zen-green">
                        {cultureContent[activeIndex].timeline}
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* Visual Element */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <div className="aspect-square bg-gradient-to-br from-sakura/20 to-zen-green/20 rounded-3xl flex items-center justify-center relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div 
                          className="w-full h-full bg-repeat"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                          }}
                        />
                      </div>

                      {/* Main Icon */}
                      <motion.div
                        className="text-8xl relative z-10"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0] 
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {cultureContent[activeIndex].icon}
                      </motion.div>

                      {/* Floating Elements */}
                      <motion.div
                        className="absolute top-1/4 left-1/4 w-3 h-3 bg-sakura/50 rounded-full"
                        animate={{
                          y: [-10, 10, -10],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      <motion.div
                        className="absolute top-1/3 right-1/4 w-4 h-4 bg-zen-green/50 rounded-full"
                        animate={{
                          y: [10, -10, 10],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1,
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Fun Fact Section */}
        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.div
            className="card-zen p-8 bg-gradient-to-r from-sakura/5 to-zen-green/5"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h4
              className="text-2xl font-sawarabi text-zen-green mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              禅の心 (Zen no Kokoro)
            </motion.h4>
            
            <motion.p
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <strong>Fun Fact:</strong> In traditional Shojin Ryori, monks rise at 3 AM to begin 
              food preparation, treating each ingredient as a teacher. The act of washing rice, 
              cutting vegetables, and arranging dishes becomes a form of moving meditation, 
              where the cook's state of mind directly influences the energy of the meal.
            </motion.p>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Culture