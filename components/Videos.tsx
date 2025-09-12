'use client'

import { motion } from 'framer-motion'
import { lanternGlowAnimation } from '@/utils/animations'

const Videos = () => {
  const videos = [
    {
      title: 'The Philosophy of Shojin Ryori',
      japanese: '精進料理の哲学',
      description: 'Discover the spiritual foundations of Buddhist temple cuisine and how mindful cooking becomes a form of meditation.',
      embedId: 'dQw4w9WgXcQ', // YouTube video ID
      thumbnail: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '12:34',
      type: 'educational'
    },
    {
      title: 'ZenBites Dining Experience',
      japanese: 'ZenBites食事体験',
      description: 'Take a virtual tour through our restaurant and witness the artistry behind each carefully crafted dish.',
      embedId: 'dQw4w9WgXcQ', // YouTube video ID
      thumbnail: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '8:42',
      type: 'promotional'
    }
  ]

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            linear-gradient(rgba(250, 243, 224, 0.85), rgba(255, 255, 255, 0.90)),
            url("https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") center/cover fixed,
            linear-gradient(135deg, #FAF3E0 0%, #ffffff 50%, #E9A6A6 100%)
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
            動画
          </motion.p>
          
          <motion.h2
            className="text-zen-title mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Experience ZenBites
          </motion.h2>
          
          <motion.p
            className="text-zen-subtitle max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Immerse yourself in the world of mindful cooking and dining
          </motion.p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <motion.div
                className="card-zen overflow-hidden"
                whileHover={{
                  boxShadow: [
                    '0 0 20px rgba(233, 166, 166, 0.5)',
                    '0 0 40px rgba(233, 166, 166, 0.7)',
                    '0 0 20px rgba(233, 166, 166, 0.5)'
                  ],
                  scale: 1.05
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' as const }}
              >
                {/* Video Thumbnail/Player */}
                <div className="relative aspect-video bg-gray-900 overflow-hidden">
                  <motion.img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/20" />

                  {/* Play Button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <motion.button
                      className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors shadow-2xl"
                      whileHover={{ 
                        scale: 1.1, 
                        boxShadow: '0 0 30px rgba(233, 166, 166, 0.6)' 
                      }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(255, 255, 255, 0.3)',
                          '0 0 40px rgba(233, 166, 166, 0.4)',
                          '0 0 20px rgba(255, 255, 255, 0.3)'
                        ]
                      }}
                      transition={{
                        boxShadow: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <svg className="w-8 h-8 text-zen-green ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </motion.button>
                  </motion.div>

                  {/* Duration Badge */}
                  <motion.div
                    className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    {video.duration}
                  </motion.div>

                  {/* Type Badge */}
                  <motion.div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium capitalize ${
                      video.type === 'educational' 
                        ? 'bg-zen-green/90 text-white' 
                        : 'bg-sakura/90 text-white'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    {video.type}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    <h3 className="text-2xl font-sawarabi text-ink-black mb-2 group-hover:text-zen-green transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-zen-green font-sawarabi text-sm">
                      {video.japanese}
                    </p>
                  </motion.div>

                  <motion.p
                    className="text-gray-600 leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    {video.description}
                  </motion.p>

                  <motion.button
                    className="btn-secondary text-sm px-6 py-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    Watch Video
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h3 className="text-3xl font-sawarabi text-ink-black mb-6">
              Ready to Experience ZenBites?
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Join us for a culinary journey that nourishes both body and spirit. 
              Book your table and discover the transformative power of mindful dining.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                className="btn-primary px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reserve Your Table
              </motion.button>
              
              <motion.button
                className="btn-secondary px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Menu
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="flex items-center space-x-8 text-6xl">
            <motion.span
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              🏮
            </motion.span>
            <motion.span
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              🌸
            </motion.span>
            <motion.span
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              🎋
            </motion.span>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Videos