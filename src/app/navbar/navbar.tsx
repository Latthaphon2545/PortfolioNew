'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'

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
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    if (currentScrollY > lastScrollY) {
      setIsVisible(false) // ซ่อนเมื่อเลื่อนลง
    } else {
      setIsVisible(true) // แสดงเมื่อเลื่อนขึ้น
    }
    setLastScrollY(currentScrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-75 bg-white m-5 rounded-box transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
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
