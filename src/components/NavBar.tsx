'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react' // Using Headless UI for potential mobile menu later
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link' // Use Next.js Link for internal navigation

const navigation = [
  { name: 'Services', href: '#services' },
  { name: 'Why ShoreSupport?', href: '#benefits' }, // Pointing to Benefits section
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact-final' }, // Pointing to final CTA section
]

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">ShoreSupport Systems</span>
            {/* Placeholder Logo */}
            <div className="h-8 w-auto font-bold text-lg text-blue-700">ShoreSupport</div>
          </Link>
        </div>
        <div className="flex lg:hidden"> {/* Mobile menu button */}
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12"> {/* Desktop Links */}
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"> {/* Desktop CTA Button */}
          <Link
            href="#contact-final" 
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
          >
            Get Free Consultation
          </Link>
        </div>
      </nav>
      {/* Mobile Menu Dialog */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">ShoreSupport Systems</span>
               <div className="h-8 w-auto font-bold text-lg text-blue-700">ShoreSupport</div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)} // Close menu on click
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="#contact-final"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-blue-600 hover:bg-blue-500"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
} 