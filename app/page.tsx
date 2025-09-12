'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import Culture from '@/components/Culture'
import Videos from '@/components/Videos'
import Promotions from '@/components/Promotions'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about" className="rice-paper-bg">
        <About />
      </section>
      
      <section id="menu" className="bg-white">
        <Menu />
      </section>
      
      <section id="culture" className="rice-paper-bg">
        <Culture />
      </section>
      
      <section id="videos" className="bg-gradient-to-b from-rice-paper to-white">
        <Videos />
      </section>
      
      <section id="promotions" className="bg-gradient-to-r from-sakura/10 to-zen-green/10">
        <Promotions />
      </section>
      
      <section id="contact" className="rice-paper-bg">
        <Contact />
      </section>
      
      <Footer />
    </main>
  )
}