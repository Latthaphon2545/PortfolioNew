'use client'

// app/page.tsx
import Image from 'next/image'
import Link from 'next/link'

import profile from '../../../public/myProfile/profile.png'

import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiMongodb,
  SiAmazon,
  SiFirebase,
} from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'

const skills = [
  {
    name: 'TypeScript',
    icon: SiTypescript,
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
  },
  {
    name: 'React',
    icon: SiReact,
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
  },
  {
    name: 'HTML',
    icon: SiHtml5,
  },
  {
    name: 'CSS',
    icon: SiCss3,
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
  },
  {
    name: 'Git',
    icon: SiGit,
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
  },
  {
    name: 'AWS',
    icon: SiAmazon,
  },
  {
    name: 'Firebase',
    icon: SiFirebase,
  },
  {
    name: 'AzureAD',
    icon: VscAzure,
  },
]

export default function HomePage() {
  return (
    <main className='py-16 bg-gradient-to-r from-base-200 to-base-100'>
      {/* Hero Section */}
      <section className='px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
            <div className='flex-1 space-y-6'>
              <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-[rgb(216,64,64)] to-[rgb(236,220,191)] text-transparent bg-clip-text'>
                Latthaphon Phoemmanirat
              </h1>
              <h2 className='text-3xl text-gray-600 font-semibold'>
                Full Stack Developer
              </h2>
              <p className='text-xl text-gray-600'>
                Coding is not just a skill; it&apos;s the art of turning
                imagination into reality in the digital realm.
              </p>
              <div className='flex gap-4'>
                <Link
                  href='#projects'
                  className='px-6 py-3 btn btn-primary text-neutral'
                >
                  See Projects
                </Link>
                <Link
                  href='#about'
                  className='px-6 py-3 btn btn-outline btn-primary hover:text-neutral'
                >
                  About Me
                </Link>
              </div>
            </div>
            <div className='relative overflow-hidden flwx-1'>
              <Image src={profile} alt='Hero Image' width={400} height={400} />
              {/* <div className='absolute inset-0 shadow-[inset_0_0_20px_20px_white]' /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='mx-10 mt-10'>
        <div className='carousel carousel-center rounded-box max-w-full'>
          {skills.map((skill) => (
            <div key={skill.name} className='carousel-item relative mx-4'>
              <div className='p-4  rounded-box text-center hover:bg-base-300 transition-colors duration-300'>
                <skill.icon
                  size={50}
                  className='mx-auto hover:scale-110 transition-transform duration-300'
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
