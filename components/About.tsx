'use client'

import { motion } from 'framer-motion'
import { fadeInUpAnimation, staggerContainer } from '@/utils/animations'

const About = () => {
  const values = [
    {
      title: 'Mindfulness',
      japanese: '正念',
      description: 'Every dish prepared with conscious intention and meditative care',
      icon: '🧘‍♀️'
    },
    {
      title: 'Sustainability',
      japanese: '持続',
      description: 'Plant-based cuisine that honors our earth and its resources',
      icon: '🌱'
    },
    {
      title: 'Wellness',
      japanese: '健康',
      description: 'Nourishing body and soul through pure, wholesome ingredients',
      icon: '💚'
    }
  ]

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            linear-gradient(rgba(250, 243, 224, 0.9), rgba(250, 243, 224, 0.85)),
            url("https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") center/cover fixed,
            linear-gradient(135deg, #FAF3E0 0%, #E9A6A6 50%, #6B8E23 100%)
          `
        }}
      />
      
      {/* Content Layer */}
      <div className="relative z-10 section-padding">
        {/* Enhanced Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E9A6A6' fill-opacity='0.15'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3Ccircle cx='60' cy='60' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

      {/* Zen Circle Background */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full border-2 border-zen-green/10 opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full border-2 border-sakura/20 opacity-40"></div>

      <div className="container-zen relative">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-zen-green font-sawarabi text-xl mb-6 tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            私たちについて
          </motion.p>
          
          <motion.h2
            className="text-zen-title mb-8 bg-gradient-to-r from-ink-black to-zen-green bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            About ZenBites
          </motion.h2>
          
          <motion.div
            className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 max-w-4xl mx-auto border border-white/20 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-zen-subtitle leading-relaxed text-center">
              Bringing Japan's ancient vegetarian culinary wisdom to India, ZenBites offers 
              a transformative dining experience rooted in Buddhist philosophy and the art of Shojin Ryori.
            </p>
          </motion.div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="card-zen p-8 md:p-12 text-center">
            <motion.h3
              className="text-3xl md:text-4xl font-sawarabi text-ink-black mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Our Mission
            </motion.h3>
            
            <motion.p
              className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              We believe that food is not just nourishment for the body, but medicine for the soul. 
              Our kitchen is a sanctuary where ancient Japanese Buddhist cooking techniques meet 
              contemporary culinary artistry, creating dishes that heal, inspire, and connect us 
              to the natural world.
            </motion.p>

            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-sakura to-zen-green mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </div>
        </motion.div>

        {/* Values Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="card-zen p-8 text-center group hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="text-6xl mb-6"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {value.icon}
              </motion.div>

              <motion.h4
                className="text-2xl font-sawarabi text-ink-black mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
              >
                {value.title}
              </motion.h4>

              <motion.p
                className="text-zen-green font-sawarabi text-lg mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
              >
                {value.japanese}
              </motion.p>

              <motion.p
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
              >
                {value.description}
              </motion.p>

              <motion.div
                className="w-0 h-0.5 bg-gradient-to-r from-sakura to-zen-green mx-auto mt-6 group-hover:w-full transition-all duration-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.8, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophy Quote */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <blockquote className="max-w-4xl mx-auto">
            <motion.p
              className="text-2xl md:text-3xl font-sawarabi text-zen-green leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              "When we eat with mindfulness, we transform not only our bodies but our consciousness, 
              creating harmony between ourselves and all living beings."
            </motion.p>
            
            <motion.cite
              className="text-lg text-gray-600 font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              — Buddhist Teaching on Mindful Eating
            </motion.cite>
          </blockquote>
        </motion.div>
      </div>
    </div>
    </div>
  )
}

export default About