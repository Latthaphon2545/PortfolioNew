import Link from 'next/link'
import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaMobile,
} from 'react-icons/fa'

interface LinkItem {
  name: string
  href: string
}

interface SocialItem {
  icon: React.ElementType
  href: string
  profile: string
}

const links: LinkItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experiences', href: '#experiences' },
]

const socials: SocialItem[] = [
  {
    icon: FaFacebook,
    href: 'https://www.facebook.com/lattapon.games/?_rdc=1&_rdr',
    profile: 'Latthaphon Phoemmanirat',
  },
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/g.x_me/',
    profile: 'g.x_me',
  },
  {
    icon: FaGithub,
    href: 'https://github.com/Latthaphon2545',
    profile: 'Latthaphon2545',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/latthaphon-phoemmanirat-5295a32a0/',
    profile: 'Latthaphon Phoemmanirat',
  },
  { icon: FaMobile, href: 'tel:+66949054456', profile: '+66949054456' },
]

export default function Footer() {
  return (
    <footer
      className='footer footer-center bg-base-200 text-base-content rounded p-10 '
      id='contact'
    >
      <nav className='grid grid-flow-col gap-4 mb-4'>
        {links.map((link, index) => (
          <Link key={index} href={link.href} className='hover:underline'>
            {link.name}
          </Link>
        ))}
      </nav>

      <nav>
        <div className='flex flex-col md:flex-row justify-center gap-4'>
          {socials.map((social, index) => (
            <div key={index} className='flex items-center'>
              <Link
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-row gap-3 items-center hover:underline'
              >
                <social.icon className='w-6 h-6' aria-hidden='true' />
                <span>{social.profile}</span>
              </Link>
              {index < socials.length - 1 && (
                <span className='hidden md:inline-block divider divider-horizontal'>
                  |
                </span>
              )}
            </div>
          ))}
        </div>
      </nav>

      <aside className='mt-4'>
        <p>Copyright © {new Date().getFullYear()} - Latthaphon Portfolio</p>
      </aside>
    </footer>
  )
}
