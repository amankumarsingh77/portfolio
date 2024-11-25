'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative"
      >
        {/* Background gradient */}
        <div className="fixed inset-0 bg-gradient-radial from-blue-900/10 via-gray-900 to-black -z-10" />
        
        {/* Animated background shapes */}
        <div className="fixed inset-0 overflow-hidden -z-10">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-conic from-blue-500/30 via-transparent to-transparent animate-spin-slow" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-conic from-purple-500/30 via-transparent to-transparent animate-spin-slow-reverse" />
        </div>

        {/* Content */}
        <main className="relative z-0">
          <Header />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </motion.div>
    </AnimatePresence>
  );
}