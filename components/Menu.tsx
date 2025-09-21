'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { bentoRevealAnimation, staggerContainer } from '@/utils/animations'

const Menu = () => {
  const menuItems = [
    {
      name: 'Edamame',
      japanese: '枝豆',
      price: '₹250',
      description: 'Steamed young soybeans with sea salt and sesame',
      category: 'appetizer',
      image: '/images/Edamame.jpg'
    },
    {
      name: 'Goma-ae',
      japanese: '胡麻和え',
      price: '₹280',
      description: 'Spinach with rich sesame dressing',
      category: 'appetizer',
      image: '/images/Goma-ae.jpg'
    },
    {
      name: 'Miso Soup',
      japanese: '味噌汁',
      price: '₹220',
      description: 'Traditional fermented soybean broth with tofu and wakame',
      category: 'soup',
      image: '/images/Miso Soup.jpg'
    },
    {
      name: 'Shojin Tempura',
      japanese: '精進天ぷら',
      price: '₹450',
      description: 'Light, crispy vegetables in traditional temple-style batter',
      category: 'main',
      image: '/images/Shojin tempura.jpg'
    },
    {
      name: 'Vegetarian Sushi Rolls',
      japanese: 'ベジ寿司',
      price: '₹400',
      description: 'Fresh cucumber, avocado, and pickled vegetables',
      category: 'main',
      image: '/images/Veg Sushi Roll.jpg'
    },
    {
      name: 'Tofu Steak',
      japanese: '豆腐ステーキ',
      price: '₹500',
      description: 'Grilled tofu with teriyaki glaze and seasonal vegetables',
      category: 'main',
      image: '/images/Tofu Steak.jpg'
    },
    {
      name: 'Zaru Soba',
      japanese: 'ざる蕎麦',
      price: '₹380',
      description: 'Cold buckwheat noodles with dipping sauce',
      category: 'main',
      image: '/images/Zaru Soba.jpg'
    },
    {
      name: 'Matcha Ice Cream',
      japanese: '抹茶アイス',
      price: '₹300',
      description: 'Creamy green tea ice cream with red bean paste',
      category: 'dessert',
      image: '/images/Matcha Ice Cream.jpg'
    },
    {
      name: 'Sweet Red Bean Mochi',
      japanese: 'あんこ餅',
      price: '₹320',
      description: 'Soft rice cakes filled with sweet adzuki bean paste',
      category: 'dessert',
      image: '/images/Sweet Red Bean Mochi.jpg'
    },
    {
      name: 'Green Tea',
      japanese: '緑茶',
      price: '₹150',
      description: 'Premium sencha green tea from Uji, Kyoto',
      category: 'beverage',
      image: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Yuzu Lemonade',
      japanese: '柚子レモネード',
      price: '₹180',
      description: 'Refreshing citrus drink with Japanese yuzu',
      category: 'beverage',
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ]

  const categories = [
    { name: 'All', japanese: '全部', filter: 'all' },
    { name: 'Appetizers', japanese: '前菜', filter: 'appetizer' },
    { name: 'Soups', japanese: 'スープ', filter: 'soup' },
    { name: 'Mains', japanese: '主菜', filter: 'main' },
    { name: 'Desserts', japanese: 'デザート', filter: 'dessert' },
    { name: 'Beverages', japanese: '飲み物', filter: 'beverage' },
  ]

  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory)

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.88)),
            url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") center/cover fixed,
            linear-gradient(135deg, #ffffff 0%, #FAF3E0 50%, #E9A6A6 100%)
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
            献立
          </motion.p>
          
          <motion.h2
            className="text-zen-title mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Our Menu
          </motion.h2>
          
          <motion.p
            className="text-zen-subtitle max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Thoughtfully crafted dishes that celebrate the pure essence of plant-based ingredients
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.filter}
              onClick={() => setSelectedCategory(category.filter)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category.filter
                  ? 'bg-zen-green text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-zen-green/10 hover:text-zen-green'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-center">
                <div className="font-medium">{category.name}</div>
                <div className="text-xs font-sawarabi opacity-70">{category.japanese}</div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.name}
              className="card-zen overflow-hidden group cursor-pointer"
              variants={bentoRevealAnimation}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover="hover"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Price Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-zen-green/90 text-white px-3 py-1 rounded-full font-medium"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {item.price}
                </motion.div>

                {/* Category Badge */}
                <motion.div
                  className="absolute top-4 left-4 bg-white/90 text-zen-green px-3 py-1 rounded-full text-xs font-medium capitalize"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {item.category}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <motion.div
                  className="mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <h3 className="text-xl font-sawarabi text-ink-black mb-1 group-hover:text-zen-green transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-zen-green font-sawarabi text-sm">
                    {item.japanese}
                  </p>
                </motion.div>

                <motion.p
                  className="text-gray-600 text-sm leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  {item.description}
                </motion.p>

                {/* Decorative Element */}
                <motion.div
                  className="mt-4 w-12 h-0.5 bg-gradient-to-r from-sakura to-zen-green"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-zen-green/5 opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.p
            className="text-lg text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Experience the harmony of flavors in every bite
          </motion.p>
          
          <motion.button
            className="btn-primary px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Reserve Your Table
          </motion.button>
        </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Menu