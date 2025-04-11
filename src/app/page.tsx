import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Services from '@/components/Services'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Services />
      <CallToAction />
      <Footer />
    </main>
  )
}
