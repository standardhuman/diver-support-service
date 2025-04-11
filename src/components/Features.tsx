'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircleIcon, CurrencyDollarIcon, CalendarDaysIcon, SparklesIcon, CubeIcon, UserCircleIcon } from '@heroicons/react/24/outline'

// Story-driven points replacing old features
const storyPoints = [
  {
    name: 'Reliable Income, Zero Hassle',
    description: "Imagine getting paid consistently without ever chasing an invoice. Our automated system handles billing and payments, so your income flows smoothly while you focus on diving.",
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Supplies Ready, Always',
    description: "No more last-minute scrambles for anodes or supplies. Our inventory support ensures you have exactly what you need, when you need it, reducing downtime and stress.",
    icon: CubeIcon,
  },
  {
    name: 'Optimized Schedule, Maximized Dives',
    description: "We manage incoming requests and optimize your routes, filling your schedule efficiently. Spend less time driving and more time underwater, maximizing your earning potential.",
    icon: CalendarDaysIcon,
  },
  {
    name: 'Elevated Client Experience',
    description: "Impress your clients with their own secure portal showing service logs, videos, and account details. Offer a professional, transparent experience that sets you apart.",
    icon: SparklesIcon,
  },
  {
    name: 'Your Business Hub',
    description: "Manage your operations effortlessly through your personal diver portal. Track jobs, view schedules, monitor income projections, and handle client requests all in one place.",
    icon: UserCircleIcon,
  },
];

export default function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div id="features" className="bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Leave the Admin Ashore</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Focus on what you love. We provide the systems to handle the rest, giving you back your time and freedom.
          </p>
        </motion.div>

        <motion.dl
          ref={ref}
          className="space-y-12 sm:space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {storyPoints.map((point) => (
            <motion.div key={point.name} className="relative flex flex-col sm:flex-row sm:items-start gap-x-6 gap-y-4" variants={itemVariants}>
              <dt className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <point.icon className="h-6 w-6" aria-hidden="true" />
                </div>
              </dt>
              <dd className="flex-auto">
                <p className="text-lg font-semibold leading-7 text-gray-900">{point.name}</p>
                <p className="mt-1 text-base leading-7 text-gray-600">{point.description}</p>
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </div>
  )
} 