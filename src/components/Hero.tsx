'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative bg-[url('/hero-background.jpg')] bg-cover bg-center py-32 sm:py-48">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              DIVER SUPPORT SERVICE
            </h1>
            {/* Optional: Add back the tagline if needed, adjusted for contrast */}
            {/* <p className="mt-6 text-lg leading-8 text-gray-300">
              Empowering independent hull cleaning divers with expert operational support. 
              Streamline your admin, boost your efficiency, and reclaim your time.
            </p> */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#services" // Changed href to point to services section
                className="rounded-md bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Learn More
              </a>
              {/* Removed secondary learn more link */}
            </div>
          </motion.div>
        </div>
        {/* Removed the old placeholder Image component */}
      </div>
    </section>
  )
} 