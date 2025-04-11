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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Chained to the Desk After a Day Underwater?</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Independent divers spend up to 30% of their time on unpaid admin. Time that could be spent diving, growing the business, or simply relaxing.
            </p>
          </div>
          {/* Placeholder for Icons + Text Grid */}
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
            {/* Example Item (Repeat for other pain points) */}
            <div className="flex items-start gap-x-4">
              <CurrencyDollarIcon className="h-8 w-8 flex-none text-blue-600" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Invoicing Headaches</h3>
                <p className="mt-1 text-base leading-7 text-gray-600">Wasting hours creating invoices and chasing late payments?</p>
              </div>
            </div>
            <div className="flex items-start gap-x-4">
              <CalendarDaysIcon className="h-8 w-8 flex-none text-blue-600" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Scheduling Chaos</h3>
                <p className="mt-1 text-base leading-7 text-gray-600">Struggling to optimize routes and fit in more dives?</p>
              </div>
            </div>
            <div className="flex items-start gap-x-4">
              <UserGroupIcon className="h-8 w-8 flex-none text-blue-600" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Inconsistent Growth</h3>
                <p className="mt-1 text-base leading-7 text-gray-600">Finding it hard to market effectively and attract new clients?</p>
              </div>
            </div>
             <div className="flex items-start gap-x-4">
              <WrenchScrewdriverIcon className="h-8 w-8 flex-none text-blue-600" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Inventory Hassles</h3>
                <p className="mt-1 text-base leading-7 text-gray-600">Running out of anodes or supplies at the wrong time?</p>
              </div>
            </div>
             <div className="flex items-start gap-x-4">
              <BuildingStorefrontIcon className="h-8 w-8 flex-none text-blue-600" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Tech Overwhelm</h3>
                <p className="mt-1 text-base leading-7 text-gray-600">Frustrated with managing websites, logs, and software?</p>
              </div>
            </div>
             <div className="flex items-start gap-x-4">
              <ClockIcon className="h-8 w-8 flex-none text-blue-600" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Lost Personal Time</h3>
                <p className="mt-1 text-base leading-7 text-gray-600">Working late on admin instead of enjoying your evenings?</p>
              </div>
            </div>
            {/* ... Add other pain points as icon+text blocks ... */}
          </div>
           <p className="mt-16 text-center text-lg leading-8 text-gray-700 font-medium">You deserve to focus on diving, not drowning in paperwork.</p>
        </div>
      </section>

      {/* 3: Solution Section */}
      <section id="solution" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
               {/* Visual Placeholder: Approaching photo of Brian or conceptual graphic */}
               <div className="w-full h-80 bg-gray-200 rounded-lg mb-8 lg:mb-0 flex items-center justify-center text-gray-500">[Image/Graphic Placeholder]</div>
            </div>
            <div className="lg:col-span-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The Support System Built For Divers, By a Diver.</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                ShoreSupport Systems acts as your dedicated background team, providing tailored support using systems proven successful in a thriving dive business (0 to 200 clients in &lt;2 years!).
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                <strong className="font-semibold text-gray-900">Crucially:</strong> You maintain 100% control of your clients, your work standards, your insurance, and your independence.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                 Whether you're established and looking to reclaim time, or new and needing a complete system to scale, we have solutions designed for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4: How It Works Section */}
      <section id="how-it-works" className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple Steps to More Diving, Less Admin</h2>
          </div>
          {/* Placeholder for 4-Step Graphic - Using simple numbered list for now */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center sm:text-left">
              <div className="mb-4 flex justify-center sm:justify-start">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">1</span>
              </div>
              <h3 className="text-lg font-semibold leading-7 text-gray-900">Discovery Call</h3>
              <p className="mt-1 text-base leading-7 text-gray-600">We listen to understand your business, goals, and pain points (no obligation).</p>
            </div>
             <div className="text-center sm:text-left">
              <div className="mb-4 flex justify-center sm:justify-start">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">2</span>
              </div>
              <h3 className="text-lg font-semibold leading-7 text-gray-900">Tailored Plan</h3>
              <p className="mt-1 text-base leading-7 text-gray-600">We propose specific support services designed for your maximum benefit & ROI.</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="mb-4 flex justify-center sm:justify-start">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">3</span>
              </div>
              <h3 className="text-lg font-semibold leading-7 text-gray-900">Seamless Execution</h3>
              <p className="mt-1 text-base leading-7 text-gray-600">Our team expertly handles the agreed-upon tasks in the background.</p>
            </div>
             <div className="text-center sm:text-left">
              <div className="mb-4 flex justify-center sm:justify-start">
                 <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">4</span>
              </div>
              <h3 className="text-lg font-semibold leading-7 text-gray-900">You Thrive</h3>
              <p className="mt-1 text-base leading-7 text-gray-600">Focus on diving, enjoy smoother operations, increased profits, and more free time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5: Services Section */}
      <section id="services" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
           <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What We Handle, So You Can Focus on the Water</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Select the support you need, from individual services to comprehensive packages.
              </p>
            </div>
            {/* Reusing structure from previous Services redesign, grouped thematically */}
            {/* Placeholder icons, replace with high-quality custom ones later */}
            <div className="space-y-16">
              {/* Seamless Operations Suite */}
              <div>
                <h3 className="text-2xl font-semibold leading-7 text-gray-900 mb-8 text-center sm:text-left">Seamless Operations Suite</h3>
                <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
                    <div className="relative">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-blue-100">
                          <CurrencyDollarIcon className="h-6 w-6 text-blue-700" aria-hidden="true" />
                        </div> Automated Invoicing & Payments
                      </dt>
                      <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600"><p className="flex-auto pl-13">Reliable billing and payment processing without the chase.</p></dd>
                    </div>
                    <div className="relative">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-blue-100">
                          <CalendarDaysIcon className="h-6 w-6 text-blue-700" aria-hidden="true" />
                        </div> Intelligent Scheduling & Routing
                      </dt>
                      <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600"><p className="flex-auto pl-13">Maximize dive time with optimized schedules and routes.</p></dd>
                    </div>
                    <div className="relative">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-blue-100">
                           <WrenchScrewdriverIcon className="h-6 w-6 text-blue-700" aria-hidden="true" />
                        </div> Proactive Inventory Management
                      </dt>
                      <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600"><p className="flex-auto pl-13">Ensure you always have the necessary supplies and anodes on hand.</p></dd>
                    </div>
                </dl>
              </div>
              {/* Premium Client Experience */}
               <div>
                <h3 className="text-2xl font-semibold leading-7 text-gray-900 mb-8 text-center sm:text-left">Premium Client Experience</h3>
                 <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
                   <div className="relative">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-blue-100">
                          <BuildingStorefrontIcon className="h-6 w-6 text-blue-700" aria-hidden="true" />
                        </div> Professional Digital Presence
                      </dt>
                      <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600"><p className="flex-auto pl-13">Modern website, SEO, and Google Business Profile management.</p></dd>
                    </div>
                    <div className="relative">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-blue-100">
                          <UserGroupIcon className="h-6 w-6 text-blue-700" aria-hidden="true" />
                        </div> Dedicated Client Portals
                      </dt>
                      <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600"><p className="flex-auto pl-13">Secure online access for clients to view logs, videos, and manage their account.</p></dd>
                    </div>
                 </dl>
              </div>
              {/* Diver Business Hub & Growth */}
               <div>
                <h3 className="text-2xl font-semibold leading-7 text-gray-900 mb-8 text-center sm:text-left">Diver Business Hub & Growth</h3>
                 <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
                   <div className="relative">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-blue-100">
                           <UserCircleIcon className="h-6 w-6 text-blue-700" aria-hidden="true" />
                        </div> Personalized Diver Portal
                      </dt>
                      <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600"><p className="flex-auto pl-13">Track work, schedule, client requests, and projected income easily.</p></dd>
                    </div>
                     <div className="relative">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-blue-100">
                           <SparklesIcon className="h-6 w-6 text-blue-700" aria-hidden="true" /> {/* Growth icon */}
                        </div> Growth Support & Lead Gen
                      </dt>
                      <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600"><p className="flex-auto pl-13">Marketing and lead generation assistance to expand your reach.</p></dd>
                    </div>
                     <div className="relative">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-blue-100">
                           <BookOpenIcon className="h-6 w-6 text-blue-700" aria-hidden="true" /> {/* Blueprint/System icon */}
                        </div> Complete Start-up System
                      </dt>
                      <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600"><p className="flex-auto pl-13">Comprehensive package to launch & scale effectively from Day 1.</p></dd>
                    </div>
                 </dl>
              </div>
            </div>
        </div>
      </section>

      {/* 6: Benefits Section */}
      <section id="benefits" className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The ShoreSupport Advantage</h2>
             <p className="mt-4 text-lg leading-8 text-gray-600">More Time, More Profit, More Freedom.</p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
             {/* Example Benefit Item */}
            <div className="flex items-start gap-x-4">
              <ClockIcon className="h-8 w-8 flex-none text-blue-600" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Reclaim Your Time</h3>
                <p className="mt-1 text-base leading-7 text-gray-600">Slash admin hours (up to 30%!) and focus on billable diving.</p>
              </div>
            </div>
            <div className="flex items-start gap-x-4">
              <CurrencyDollarIcon className="h-8 w-8 flex-none text-blue-600" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Boost Profitability</h3>
                <p className="mt-1 text-base leading-7 text-gray-600">Increase efficiency, get paid faster, potentially attract more clients.</p>
              </div>
            </div>
             <div className="flex items-start gap-x-4">
              <SparklesIcon className="h-8 w-8 flex-none text-blue-600" aria-hidden="true" /> {/* Freedom/Relax icon placeholder */}
              <div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Leave Work Dockside</h3>
                <p className="mt-1 text-base leading-7 text-gray-600">Reduce stress and enjoy your evenings & weekends again.</p>
              </div>
            </div>
            <div className="flex items-start gap-x-4">
              <CheckCircleIcon className="h-8 w-8 flex-none text-blue-600" aria-hidden="true" /> {/* Proven system icon */}
              <div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Leverage Proven Systems</h3>
                <p className="mt-1 text-base leading-7 text-gray-600">Benefit immediately from workflows perfected in a successful dive business.</p>
              </div>
            </div>
            <div className="flex items-start gap-x-4">
              <ShieldCheckIcon className="h-8 w-8 flex-none text-blue-600" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Maintain Full Independence</h3>
                <p className="mt-1 text-base leading-7 text-gray-600">You remain the boss. We provide expert support you choose.</p>
              </div>
            </div>
             <div className="flex items-start gap-x-4">
              <UserGroupIcon className="h-8 w-8 flex-none text-blue-600" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Elevate Client Experience</h3>
                <p className="mt-1 text-base leading-7 text-gray-600">Offer professional portals, logs, and communication that impress.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* 7: Founder/Why Us Section */}
      <section id="why-us" className="py-24 sm:py-32">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 lg:order-last">
               {/* Visual Placeholder: Professional photo of Brian */}
               <div className="w-full h-80 bg-gray-200 rounded-lg mb-8 lg:mb-0 flex items-center justify-center text-gray-500">[Founder Photo Placeholder]</div>
            </div>
            <div className="lg:col-span-6 lg:order-first">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Partner Has Walked in Your Dive Boots.</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                 I'm Brian Cline - USCG Master, instructor, fleet manager, and diver who built my own hull cleaning business to nearly 200 clients. I know the challenges firsthand.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                 My passion evolved from diving to building the <strong className="font-semibold text-gray-900">systems that eliminate admin headaches and drive growth.</strong> That's why I created ShoreSupport – to apply my expertise to help your business thrive.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                 My goal is simple: Handle the backend you dislike, so you can focus on the diving you love. It's your business, supported by my proven expertise.
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
