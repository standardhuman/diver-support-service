'use client'

import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Services from '@/components/Services'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="bg-white text-gray-800 antialiased">
      <Hero />
      <div className="py-24 sm:py-32">
        <Features /> 
      </div>
      <div className="bg-gray-50 py-24 sm:py-32">
        <Services />
      </div>
      <div className="py-24 sm:py-32">
        <CallToAction />
      </div>
      <Footer />
    </div>
  )
}
