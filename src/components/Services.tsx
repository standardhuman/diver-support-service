'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  DocumentCheckIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  ClipboardDocumentListIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Client Acquisition Support',
    description: 'Targeted marketing, SEO, and lead generation to help grow your client base.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Invoicing & Payment Processing',
    description: 'Streamlined billing system with automated payment tracking and follow-up.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Scheduling Coordination',
    description: 'Efficient management of service requests and route optimization.',
    icon: CalendarIcon,
  },
  {
    name: 'Digital Presence Management',
    description: 'Professional website, SEO, and online service log management.',
    icon: DocumentCheckIcon,
  },
  {
    name: 'Equipment & Inventory Support',
    description: 'Tracking systems and sourcing assistance for your equipment needs.',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Insurance & Compliance',
    description: 'Guidance and resources for maintaining proper coverage and compliance.',
    icon: ShieldCheckIcon,
  },
]

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div id="services" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Support Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the services that best fit your needs. We offer flexible packages to support your business growth.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200"
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">{service.name}</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 