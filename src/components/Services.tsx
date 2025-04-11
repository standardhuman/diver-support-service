'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline'

const serviceCategories = [
  {
    category: "Streamlined Operations",
    items: [
      { name: 'Automated Invoicing & Payments', description: 'Reliable billing and payment processing without the chase.', icon: CurrencyDollarIcon },
      { name: 'Intelligent Scheduling & Routing', description: 'Maximize dive time with optimized schedules and routes.', icon: CalendarDaysIcon },
      { name: 'Proactive Inventory Management', description: 'Ensure you always have the necessary supplies and anodes on hand.', icon: WrenchScrewdriverIcon },
      { name: 'Financial Admin Support', description: 'Guidance on bookkeeping and expense tracking basics.', icon: BookOpenIcon },
    ]
  },
  {
    category: "Premium Client Experience",
    items: [
      { name: 'Professional Digital Presence', description: 'Modern website, SEO, and Google Business Profile management.', icon: BuildingStorefrontIcon },
      { name: 'Dedicated Client Portals', description: 'Secure online access for clients to view logs, videos, and manage their account.', icon: UserGroupIcon },
    ]
  },
  {
    category: "Business Growth & Support",
    items: [
      { name: 'Targeted Client Acquisition', description: 'Marketing and lead generation support to expand your reach.', icon: UserGroupIcon },
      { name: 'Insurance & Compliance Resources', description: 'Navigate requirements with helpful information and guidance.', icon: ShieldCheckIcon },
    ]
  }
];

export default function Services() {
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
    <div id="services" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="mx-auto max-w-2xl text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How We Support You</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            A comprehensive suite of services designed to handle the complexities of your business, so you don't have to.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {serviceCategories.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl font-semibold leading-7 text-gray-900 mb-8 text-center sm:text-left">{category.category}</h3>
              <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
                {category.items.map((service) => (
                  <motion.div key={service.name} className="relative" variants={itemVariants}>
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-blue-100">
                        <service.icon className="h-6 w-6 text-blue-700" aria-hidden="true" />
                      </div>
                      {service.name}
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto pl-13">{service.description}</p>
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 