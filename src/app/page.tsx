'use client'

import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

// Import icons (adjust imports as needed based on final icon choices)
import { CheckCircleIcon, CurrencyDollarIcon, CalendarDaysIcon, SparklesIcon, CubeIcon, UserCircleIcon, ClockIcon, BuildingStorefrontIcon, WrenchScrewdriverIcon, BookOpenIcon, UserGroupIcon, ShieldCheckIcon, ArrowPathIcon, LightBulbIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline' 

export default function Home() {
  return (
    <div className="bg-white text-gray-800 antialiased font-sans">
      {/* 0: Navigation Bar */}
      <NavBar />

      {/* 1: Hero Section */}
      <Hero />

      {/* 2: Problem Section */}
      <section id="problem" className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Sound Familiar?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Is Admin Killing Your Profit & Your Free Time?</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Independent divers often spend up to 30% of their valuable time on unpaid admin—time that could be spent diving, growing the business, or simply relaxing.
            </p>
          </div>
          {/* Refined Icons + Text Grid */}
          <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
            {
              [
                { name: 'Invoicing Headaches', description: 'Wasting hours creating invoices and chasing late payments?', icon: CurrencyDollarIcon },
                { name: 'Scheduling Chaos', description: 'Struggling to optimize routes and fit in more dives?', icon: CalendarDaysIcon },
                { name: 'Inconsistent Growth', description: 'Finding it hard to market effectively and attract new clients?', icon: UserGroupIcon },
                { name: 'Inventory Hassles', description: 'Running out of anodes or supplies at the critical moment?', icon: WrenchScrewdriverIcon },
                { name: 'Tech Overwhelm', description: 'Frustrated managing websites, service logs, and software?', icon: BuildingStorefrontIcon },
                { name: 'Lost Personal Time', description: 'Working late on paperwork instead of enjoying your evenings?', icon: ClockIcon },
              ].map((item) => (
                <div key={item.name} className="flex flex-col items-center text-center sm:items-start sm:text-left gap-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <item.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold leading-7 text-gray-900">{item.name}</h3>
                  <p className="text-base leading-7 text-gray-600">{item.description}</p>
                </div>
              ))
            }
          </div>
           <p className="mt-16 text-center text-lg leading-8 text-gray-700 font-medium">You deserve to focus on diving, not drowning in paperwork.</p>
        </div>
      </section>

      {/* 3: Solution Section */}
      <section id="solution" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-16 lg:gap-y-8 items-center">
             {/* Image/Graphic Column */}
            <div className="lg:col-span-6 xl:col-span-5">
               <div className="aspect-h-3 aspect-w-4 rounded-lg bg-gray-100 overflow-hidden">
                 {/* Replace with <Image> component when ready */}
                 <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">[Image: Brian / Conceptual Graphic]</div>
               </div>
            </div>
            {/* Text Column */}
            <div className="mt-8 lg:mt-0 lg:col-span-6 xl:col-span-7">
              <h2 className="text-base font-semibold leading-7 text-blue-600">The ShoreSupport Solution</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Built For Divers, By a Diver.</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                ShoreSupport Systems acts as your dedicated background team, providing tailored support using systems proven successful in a thriving dive business (scaled from 0 to nearly 200 clients in under 2 years!).
              </p>
              <dl className="mt-8 max-w-xl space-y-4 text-base leading-7 text-gray-600 lg:max-w-none">
                 <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <CheckCircleIcon className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                       Maintain Full Control:
                    </dt>
                    <dd className="inline"> You keep 100% control of your clients, work standards, insurance, and independence.</dd>
                 </div>
                 <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                       <CheckCircleIcon className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                       Support for Every Stage:
                    </dt>
                    <dd className="inline"> Whether you're established or just starting, we tailor solutions to help you reclaim time and scale effectively.</dd>
                 </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 4: How It Works Section */}
      <section id="how-it-works" className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Getting Started</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">More Diving, Less Admin in 4 Simple Steps</p>
          </div>
          {/* Refined 4-Step Layout */}
          <div className="relative mx-auto grid max-w-md grid-cols-1 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-x-8">
            {/* Connecting Lines (Hidden on mobile) */}
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gray-300 hidden lg:block" aria-hidden="true"></div>

            {
              [
                { name: 'Discovery Call', description: 'We listen to understand your business, goals, and pain points (no obligation).' },
                { name: 'Tailored Plan', description: 'We propose specific support services designed for your maximum benefit & ROI.' },
                { name: 'Seamless Execution', description: 'Our team expertly handles the agreed-upon tasks in the background.' },
                { name: 'You Thrive', description: 'Focus on diving, enjoy smoother operations, increased profits, and more free time.' },
              ].map((step, index) => (
                <div key={step.name} className="relative rounded-lg bg-white p-8 shadow-md ring-1 ring-gray-900/5 text-center lg:text-left">
                   <div className="flex justify-center lg:justify-start">
                     <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold text-white">{index + 1}</span>
                   </div>
                   <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">{step.name}</h3>
                   <p className="mt-2 text-base leading-7 text-gray-600">{step.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* 5: Services Section */}
      <section id="services" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
           <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Our Services</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What We Handle, So You Can Focus on the Water</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Select the support you need, from individual services to comprehensive packages designed for ultimate efficiency.
              </p>
            </div>
            
            <div className="space-y-16">
              {/* Service Category 1: Seamless Operations */}
              <div>
                <div className="mb-10 border-b border-gray-200 pb-5">
                  <h3 className="text-2xl font-semibold leading-7 text-gray-900 sm:text-3xl">Seamless Operations Suite</h3>
                  <p className="mt-2 text-lg leading-8 text-gray-600">Automate the mundane, optimize your workflow.</p>
                </div>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                  <div className="flex flex-col items-start">
                    <dt className="font-semibold text-gray-900 flex items-center gap-x-3">
                       <CurrencyDollarIcon className="h-7 w-7 text-blue-600" />Automated Invoicing & Payments
                    </dt>
                    <dd className="mt-2 leading-7 text-gray-600">Reliable billing and payment processing without the chase.</dd>
                  </div>
                  <div className="flex flex-col items-start">
                     <dt className="font-semibold text-gray-900 flex items-center gap-x-3">
                       <CalendarDaysIcon className="h-7 w-7 text-blue-600" />Intelligent Scheduling & Routing
                    </dt>
                    <dd className="mt-2 leading-7 text-gray-600">Maximize dive time with optimized schedules and routes.</dd>
                  </div>
                  <div className="flex flex-col items-start">
                     <dt className="font-semibold text-gray-900 flex items-center gap-x-3">
                       <WrenchScrewdriverIcon className="h-7 w-7 text-blue-600" />Proactive Inventory Management
                    </dt>
                    <dd className="mt-2 leading-7 text-gray-600">Ensure you always have the necessary supplies and anodes on hand.</dd>
                  </div>
                </dl>
              </div>

              {/* Service Category 2: Premium Client Experience */}
               <div>
                <div className="mb-10 border-b border-gray-200 pb-5">
                  <h3 className="text-2xl font-semibold leading-7 text-gray-900 sm:text-3xl">Premium Client Experience</h3>
                  <p className="mt-2 text-lg leading-8 text-gray-600">Impress clients and build loyalty.</p>
                </div>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                   <div className="flex flex-col items-start">
                      <dt className="font-semibold text-gray-900 flex items-center gap-x-3">
                         <BuildingStorefrontIcon className="h-7 w-7 text-blue-600" />Professional Digital Presence
                      </dt>
                      <dd className="mt-2 leading-7 text-gray-600">Modern website, SEO, and Google Business Profile management.</dd>
                    </div>
                    <div className="flex flex-col items-start">
                       <dt className="font-semibold text-gray-900 flex items-center gap-x-3">
                          <UserGroupIcon className="h-7 w-7 text-blue-600" />Dedicated Client Portals
                      </dt>
                      <dd className="mt-2 leading-7 text-gray-600">Secure online access for clients to view logs, videos, and manage their account.</dd>
                    </div>
                 </dl>
              </div>

              {/* Service Category 3: Diver Business Hub & Growth */}
               <div>
                 <div className="mb-10 border-b border-gray-200 pb-5">
                   <h3 className="text-2xl font-semibold leading-7 text-gray-900 sm:text-3xl">Diver Business Hub & Growth</h3>
                   <p className="mt-2 text-lg leading-8 text-gray-600">Your command center for tracking and expansion.</p>
                </div>
                 <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                   <div className="flex flex-col items-start">
                      <dt className="font-semibold text-gray-900 flex items-center gap-x-3">
                          <UserCircleIcon className="h-7 w-7 text-blue-600" />Personalized Diver Portal
                      </dt>
                      <dd className="mt-2 leading-7 text-gray-600">Track work, schedule, client requests, and projected income easily.</dd>
                    </div>
                     <div className="flex flex-col items-start">
                       <dt className="font-semibold text-gray-900 flex items-center gap-x-3">
                           <SparklesIcon className="h-7 w-7 text-blue-600" />Growth Support & Lead Gen
                      </dt>
                      <dd className="mt-2 leading-7 text-gray-600">Marketing and lead generation assistance to expand your reach.</dd>
                    </div>
                     <div className="flex flex-col items-start">
                       <dt className="font-semibold text-gray-900 flex items-center gap-x-3">
                           <BookOpenIcon className="h-7 w-7 text-blue-600" />Complete Start-up System
                      </dt>
                      <dd className="mt-2 leading-7 text-gray-600">Comprehensive package to launch & scale effectively from Day 1.</dd>
                    </div>
                 </dl>
              </div>
            </div>
        </div>
      </section>

      {/* 6: Benefits Section */}
      <section id="benefits" className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
            <h2 className="text-base font-semibold leading-7 text-blue-600">The ShoreSupport Advantage</h2>
             <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">More Time, More Profit, More Freedom.</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
             {
               [
                 { name: 'Reclaim Your Time', description: 'Slash admin hours (up to 30%!) and focus on billable diving.', icon: ClockIcon },
                 { name: 'Boost Profitability', description: 'Increase efficiency, get paid faster, potentially attract more clients.', icon: CurrencyDollarIcon },
                 { name: 'Leave Work Dockside', description: 'Reduce stress and enjoy your evenings & weekends again.', icon: SparklesIcon }, // Consider a relax/hammock icon if available
                 { name: 'Leverage Proven Systems', description: 'Benefit immediately from workflows perfected in a successful dive business.', icon: CheckCircleIcon },
                 { name: 'Maintain Full Independence', description: 'You remain the boss. We provide expert support you choose.', icon: ShieldCheckIcon },
                 { name: 'Elevate Client Experience', description: 'Offer professional portals, logs, and communication that impress.', icon: UserGroupIcon },
               ].map((item) => (
                <div key={item.name} className="flex flex-col items-center text-center sm:items-start sm:text-left gap-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <item.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold leading-7 text-gray-900">{item.name}</h3>
                  <p className="text-base leading-7 text-gray-600">{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

       {/* 7: Founder/Why Us Section */}
      <section id="why-us" className="py-24 sm:py-32">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-16 lg:gap-y-8 items-center">
            {/* Image Column */} 
            <div className="lg:col-span-6 xl:col-span-5 lg:order-last">
               <div className="aspect-h-4 aspect-w-3 rounded-lg bg-gray-100 overflow-hidden">
                 {/* Replace with <Image> component of Brian */}
                 <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">[Founder Photo Placeholder]</div>
               </div>
            </div>
            {/* Text Column */}
            <div className="mt-8 lg:mt-0 lg:col-span-6 xl:col-span-7 lg:order-first">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Why ShoreSupport?</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Partner Has Walked in Your Dive Boots.</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                 I'm Brian Cline - USCG Master, instructor, fleet manager, and diver who built my own hull cleaning business to nearly 200 clients. I've lived the late nights managing invoices, the scheduling headaches, and the pressure of inconsistent growth. I know the challenges firsthand.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                 My passion evolved from just diving to building the <strong className="font-semibold text-gray-900">efficient systems that eliminate these admin burdens and unlock true business potential.</strong> That's why I created ShoreSupport – to apply my proven expertise to help your business thrive.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                 My goal is simple: Handle the backend operations you dislike, so you can focus on the diving you love. It's your business, amplified by my experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8: Pricing Philosophy Section */}
       <section id="pricing" className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Fair Pricing Focused on Your Success</h2>
           <p className="mt-6 text-lg leading-8 text-gray-600">
             We believe in transparent partnership. Our pricing is designed to provide clear Return on Investment by saving you valuable time and boosting your efficiency. We offer flexible options, including targeted commissions only on new business we generate for you. Let's find the perfect plan during your free consultation – no hidden fees, just clear value.
           </p>
            <div className="mt-10">
               <a
                 href="#contact" // Link to final CTA/contact form
                 className="inline-block rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow hover:bg-blue-700"
               >
                 Discuss Pricing in a Free Consultation
               </a>
             </div>
         </div>
       </section>

       {/* 9: Testimonials Section (Placeholder) */}
       <section id="testimonials" className="py-24 sm:py-32">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
           <div className="mx-auto max-w-2xl text-center">
             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Don't Just Take Our Word For It</h2>
             <p className="mt-4 text-lg leading-8 text-gray-600">
               Hear from divers who reclaimed their time and grew their business with ShoreSupport.
             </p>
           </div>
           {/* Placeholder for Testimonial Cards/Slider */}
           <div className="mt-16 text-center text-gray-500">
             [Testimonials Coming Soon]
           </div>
         </div>
       </section>

      {/* 10: Final Call-to-Action Section */}
      <section id="contact-final" className="bg-blue-700"> {/* High contrast background */}
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Spend Less Time Managing, More Time Diving?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Discover how ShoreSupport Systems can transform your business operations and give you back your freedom. Schedule your free, no-obligation consultation today.
          </p>
          <div className="mt-10">
            <a
              href="#contact" // Link to the contact form section (or a dedicated page/Calendly)
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-700 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              Schedule Your Free Consultation
            </a>
          </div>
          {/* Optional: Direct contact info */}
          {/* <p className="mt-8 text-sm text-gray-300">Or email us at <a href="mailto:info@shoresupport.com" className="font-medium hover:text-white">info@shoresupport.com</a></p> */}
        </div>
      </section>

      {/* Placeholder for the actual Contact Form Component (or integrate CallToAction here) */}
      {/* <CallToAction /> Currently, the CTA section (10) has its own button. Decide if you want a separate form section or link the button to #contact where the CallToAction component renders the form. For now, leaving separate conceptually. */}

      {/* 11: Footer */}
      <Footer />
    </div>
  )
}
