'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CallToAction() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Basic form submission handler (replace with actual logic later)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement actual form submission logic (e.g., send to an API endpoint)
    alert('Form submitted (placeholder)!'); 
  };

  return (
    <div id="contact" className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to Leave Admin Ashore?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Let's discuss how ShoreSupport can free up your time and help grow your business. Get started with a no-obligation consultation.
          </p>
        </motion.div>

        {/* Simplified Form - Consider if a multi-step or conditional form is needed later */}
        <motion.form
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants} // Apply variants for smooth appearance
          transition={{ delay: 0.2 }} // Slight delay after title
          onSubmit={handleSubmit} 
          className="mx-auto mt-16 max-w-xl"
        >
          <div className="grid grid-cols-1 gap-y-6">
            {/* Simplified to just Name and Email for initial contact */}
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                autoComplete="name"
                placeholder="Your Name"
                className="block w-full rounded-md border-0 bg-gray-100 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="email"
                placeholder="Your Email Address"
                className="block w-full rounded-md border-0 bg-gray-100 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition duration-150 ease-in-out"
              />
            </div>
            {/* Removed Message Textarea for simplicity - can be added back */}
            {/* <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea name="message" id="message" rows={4} placeholder="How can we help?" className="block w-full rounded-md border-0 bg-gray-100 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 transition duration-150 ease-in-out"></textarea>
            </div> */}
          </div>
          <div className="mt-8 flex justify-center"> {/* Centered button */}
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-150 ease-in-out"
            >
              Request Consultation
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  )
} 