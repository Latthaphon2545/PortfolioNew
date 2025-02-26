'use client'

import Link from 'next/link'
import React from 'react'

interface LinkItem {
  name: string
  href: string
}

const links: LinkItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experiences', href: '#experiences' },
]

const Navbar: React.FC = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-75 bg-white m-5 rounded-box'>
      <div className='navbar bg-transparent rounded-box container mx-auto'>
        <div className='navbar-start'>
          <Link className='btn btn-ghost text-xl' href='#home'>
            Latthaphon Portfolio
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='navbar-end'>
          <Link className='btn' href='#contact'>
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
