import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ClockIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'More Dive Time',
    description: 'Focus on what you do best - diving and cleaning. We handle the time-consuming administrative tasks.',
    icon: ClockIcon,
  },
  {
    name: 'Increased Efficiency',
    description: 'Leverage our proven systems for invoicing, scheduling, and client management to streamline your operations.',
    icon: ChartBarIcon,
  },
  {
    name: 'Maintain Independence',
    description: 'Keep full control of your business while we provide expert background support to help you grow.',
    icon: UserGroupIcon,
  },
]

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600">Proven Systems</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Built by divers, for divers. Our support services are designed to help you thrive professionally and personally.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 