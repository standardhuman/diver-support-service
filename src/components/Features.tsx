'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ClockIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Reclaim Your Time',
    description: 'Spend less time on admin and more time diving or growing your business. We handle the paperwork, scheduling, and invoicing, freeing up to 30% of your workweek.',
    icon: ClockIcon,
  },
  {
    name: 'Grow Your Business',
    description: 'Leverage proven systems for client acquisition, digital presence, and efficient operations. Scale confidently, whether you\'re established or just starting.',
    icon: ChartBarIcon,
  },
  {
    name: 'Leave Work Dockside',
    description: 'Our streamlined support means your work is done when you leave the marina. Enjoy the freedom and improved work-life balance you deserve.',
    icon: UserGroupIcon,
  },
]

export default function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Optional Title - Kept minimal */}
        {/* <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="mx-auto max-w-2xl text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose ShoreSupport?</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Focus on your passion, we handle the rest.
          </p>
        </motion.div> */}

        <motion.dl
          ref={ref}
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature) => (
            <motion.div key={feature.name} className="relative flex flex-col lg:flex-row lg:items-start gap-x-8" variants={itemVariants}>
              <dt className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <feature.icon className="h-7 w-7" aria-hidden="true" />
                </div>
              </dt>
              <dd className="mt-4 lg:mt-1 flex flex-auto flex-col">
                <p className="text-xl font-semibold leading-7 text-gray-900">{feature.name}</p>
                <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </div>
  )
} 