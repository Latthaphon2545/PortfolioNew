import React from 'react'

import a1 from '../../../public/experiences/a1.jpg'
import a2 from '../../../public/experiences/a2.jpg'
import cas1 from '../../../public/experiences/cas1.jpg'
import cas2 from '../../../public/experiences/cas2.jpg'
import cas3 from '../../../public/experiences/cas3.jpg'
import cas4 from '../../../public/experiences/cas4.jpg'
import cas5 from '../../../public/experiences/cas5.jpg'
import cas6 from '../../../public/experiences/cas6.jpg'
import r1 from '../../../public/experiences/r1.jpg'
import r2 from '../../../public/experiences/r1.jpg'
import ta1 from '../../../public/experiences/ta1.png'
import ta2 from '../../../public/experiences/ta2.png'
import di1 from '../../../public/experiences/di1.png'
import di2 from '../../../public/experiences/di2.png'
import di3 from '../../../public/experiences/di3.jpg'

import Image from 'next/image'

import { MdOutlineZoomIn } from 'react-icons/md'
import Swal from 'sweetalert2'

interface Experience {
  title: string
  position?: string
  company?: string
  at?: string
  img: ImageType[]
  date: string
  description: string[]
}

export interface ImageType {
  src: string
  height: number
  width: number
  blurDataURL?: string
}

const experiences: Record<string, Experience[]> = {
  Internship: [
    {
      title: 'Internship & Co-op',
      position: 'Full Stack Web Developer',
      company: 'Digio',
      img: [di1, di2, di3],
      date: '04/2024 - 10/2024',
      description: [
        'Acquired practical experience as a Full Stack Web Developer while interning at Digio, where I developed a web admin for mobile banking and a web admin for managing company stock devices (Demo).',
        'Communicated directly with bank IT staff to understand their needs.',
        'Participated in two-week sprints, providing daily progress updates to the team.',
        'Gained essential insights into the functionality of banking applications.',
      ],
    },
  ],
  Awards: [
    {
      title: 'Outstanding Student Award',
      at: 'Khon Kaen University',
      date: '2021 - 2022',
      img: [r1, r2],
      description: [
        'Received the Academic Excellence Award for the highest GPA in the Digital Media Engineering program.',
        '2nd year - 3.74',
        '3rd year - 3.81',
      ],
    },
    {
      title: 'KKU Game 2021',
      at: 'Khon Kaen University',
      date: '2021 - 2022',
      img: [a1, a2],
      description: [
        'Participated in the KKU Game 2021 competition, where I placed 2nd in the a-math category.',
      ],
    },
  ],
  VOLUNTEER: [
    {
      title: 'Data Structures Course Teaching Assistant',
      position: 'Teaching Assistant',
      at: 'Khon Kaen University',
      img: [ta1, ta2],
      date: '2022',
      description: [
        'Assisted the professor in teaching Data Structures to second-year students by providing guidance, answering questions, and clarifying concepts. Helped grade assignments and worked collaboratively with another assistant to support students in their learning process.',
      ],
    },
    {
      title: 'Staff Computer Engineering Summer Camp (CESCa)',
      position: 'Mentor',
      img: [cas1, cas2, cas3, cas4, cas5, cas6],
      at: 'Khon Kaen University',
      date: '2021',
      description: [
        'Served as a mentor for high school students attending the CESCa camp at the university. Responsibilities included hosting events as an emcee, ensuring the well-being of participants, and engaging with students interested in programming and the Digital Media Engineering (DME) field.',
      ],
    },
  ],
}

export default function Experiences() {
  // Click img to open in full size use sweetalert2
  const handleClick = (img: string, title: string) => {
    Swal.fire({
      title: title,
      imageUrl: img,
      imageWidth: 800,
      imageHeight: 300,
      imageAlt: 'Image',
      showCloseButton: true,
      showConfirmButton: false,
      // closebutton add padding
      customClass: {
        closeButton: 'py-10',
      },
    })
  }

  return (
    <section
      id='skills'
      className='py-20 bg-gradient-to-br from-base-200 via-base-100 to-base-200'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-10'>
          <h2 className='text-4xl md:text-5xl font-bold inline-block relative'>
            My Experiences
            <span className='block h-1 w-24 bg-primary mx-auto mt-4'></span>
          </h2>
          <p className='mt-4 text-lg opacity-80 max-w-2xl mx-auto'>
            My professional experiences
          </p>
        </div>
        <div className='space-y-12'>
          {Object.entries(experiences).map(([category, items]) => (
            <div key={category}>
              <h3 className='text-2xl font-semibold mb-5'>{category}</h3>
              {items.map((experience, index) => (
                <div
                  key={index}
                  className='shadow-lg bg-white p-6 rounded-lg mb-6'
                >
                  <h4 className='text-xl font-semibold mb-2'>
                    {experience.title}
                  </h4>
                  {experience.position && (
                    <h5 className='text-lg opacity-70'>
                      {experience.position} at{' '}
                      {experience.company || experience.at}
                    </h5>
                  )}
                  <p className='text-sm text-gray-600 mb-4'>
                    Date: {experience.date}
                  </p>

                  <div className='flex flex-col gap-5 lg:flex-row lg:items-start lg:space-x-6'>
                    <ul className='list-disc ml-5 lg:w-1/2 mt-5 lg:mt-0'>
                      {experience.description.map((desc, idx) => (
                        <li key={idx} className='mb-2'>
                          {desc}
                        </li>
                      ))}
                    </ul>
                    {experience.img.length > 0 && (
                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {experience.img.map((img, idx) => (
                          <div key={idx} className='relative'>
                            <Image
                              src={img}
                              alt={experience.title}
                              width={500}
                              height={300}
                              className='rounded-lg shadow-lg h-48 object-cover'
                            />
                            {/* Click to see image in full size icon */}
                            <MdOutlineZoomIn
                              onClick={() =>
                                handleClick(img.src, experience.title)
                              }
                              className='absolute top-2 right-2 text-2xl text-white bg-primary rounded-full p-1 cursor-pointer'
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-500 {
          perspective: 1000px;
        }
        .rotate-y-180 {
          transform: rotateY(10deg);
        }
      `}</style>
    </section>
  )
}
