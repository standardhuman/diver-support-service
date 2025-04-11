'use client'

import Link from 'next/link'

const navigation = {
  main: [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact-final' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ]
}

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="h-8 w-auto font-bold text-lg text-white">ShoreSupport</div>
            <p className="text-sm leading-6 text-gray-300">
              Empowering independent divers to reclaim time and grow their business through expert operational support.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="md:grid md:grid-cols-1 md:gap-8">
               <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                 <ul role="list" className="mt-6 space-y-4">
                   {navigation.legal.map((item) => (
                     <li key={item.name}>
                       <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                         {item.name}
                       </Link>
                     </li>
                   ))}
                 </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; {new Date().getFullYear()} ShoreSupport Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 