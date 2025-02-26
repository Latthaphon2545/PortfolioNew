import React from 'react'

import Image from 'next/image'

import profile1 from '../../../public/myProfile/TLP_2420.png'
import profile2 from '../../../public/myProfile/TLP_2421.png'
import profile3 from '../../../public/myProfile/TLP_2422.png'
import profile4 from '../../../public/myProfile/TLP_2423.png'
import profile5 from '../../../public/myProfile/TLP_2424.png'
import profile6 from '../../../public/myProfile/TLP_2425.png'

const profile = [profile1, profile2, profile3, profile4, profile5, profile6]

const AboutMe: React.FC = () => {
  return (
    <section id='about' className='py-16'>
      <div className='container mx-auto px-8'>
        <div className='text-center mb-10'>
          <h2 className='text-4xl md:text-5xl font-bold inline-block relative'>
            About Me
            <span className='block h-1 w-24 bg-primary mx-auto mt-4'></span>
          </h2>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-evenly gap-8'>
          <div className='carousel carousel-center bg-base-200 rounded-box max-w-md space-x-4 p-8 shadow-xl'>
            {profile.map((image, index) => (
              <div key={index} className='carousel-item w-full'>
                <Image
                  src={image}
                  width={500}
                  height={256}
                  alt='Latthaphon Phoemmanirat'
                />
              </div>
            ))}
          </div>
          <div className='lg:w-1/2 bg-white p-6 rounded-lg shadow-xl'>
            <p className='text-lg mb-4'>
              Hi, I&apos;m{' '}
              <span className='font-semibold text-[#A31D1D]'>
                Latthaphon Phoemmanirat (Game)
              </span>
              , a Full Stack Developer from Khon Kaen University.
            </p>
            <p className='text-lg mb-4'>
              I specialize in modern technologies like{' '}
              <span className='font-semibold text-[#A31D1D]'>
                React, Next.js,
              </span>{' '}
              and{' '}
              <span className='font-semibold text-[#A31D1D]'>Tailwind CSS</span>{' '}
              to build user-friendly projects that satisfy clients.
            </p>
            <p className='text-lg mb-4'>
              Outside of work, I enjoy walking, reading, and cooking. Check out
              my work on my portfolio page.
            </p>
            <h3 className='text-2xl font-semibold mt-8 mb-4 text-[#A31D1D]'>
              Academic Background
            </h3>
            <ul className='space-y-4'>
              <li className='p-4 bg-base-200 rounded-lg shadow-md'>
                <p className='font-semibold text-[#A31D1D]'>
                  Khon Kaen University
                </p>
                <p>Digital Media Engineering</p>
                <p>Bachelor&apos;s in Digital Media Engineering (4th year)</p>
              </li>
              <li className='p-4 bg-base-200 rounded-lg shadow-md'>
                <p className='font-semibold text-[#A31D1D]'>Wiang Sa School</p>
                <p>
                  High School Diploma with a focus on Science and Mathematics
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
