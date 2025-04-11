'use client'

import { motion } from 'framer-motion'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Hero() {
  const heroStyle = {
    backgroundImage: `url(${basePath}/hero-background.jpg)`,
  };

  return (
    <section 
      className="relative bg-cover bg-center py-32 sm:py-48" 
      style={heroStyle}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Dive More. Manage Less. Grow Faster.
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200">
              ShoreSupport Systems provides expert operational support—built by a successful diver—to handle your admin, streamline your business, and free you up to focus on what you do best.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact-final"
                className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Schedule Your Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 