'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

import as from '../../../public/projects/img/as.png'
import covid19war from '../../../public/projects/img/covid19war.png'
import courseRegistration from '../../../public/projects/img/courseRegistration.png'
import marh from '../../../public/projects/img/marh.png'
import onlineFoodOrdering from '../../../public/projects/img/onlineFoodOrdering.png'
import queueBookingApp from '../../../public/projects/img/queueBookingApp.png'
import reloadRocket from '../../../public/projects/img/reloadRocket.png'
import riddlesOfTheTowerOfMathematics from '../../../public/projects/img/riddlesOfTheTowerOfMathematics.png'
import { ImageType } from '../experiences/experiences'

interface Project {
  name: string
  tools: string
  role: string[]
  date: number
  img: ImageType
  videoUrl?: string
  category: string
  group: boolean
  leader: boolean
  details?: {
    description: string
    details: string[]
  }
}

// แทนที่จะ import video โดยตรง เราจะใช้ path แทน
const videoPath = {
  after_school: '/projects/video/after_school.mp4',
  covid19war: '/projects/video/covid.mp4',
  marh: '/projects/video/marh.mp4',
  onlineFoodOrdering: '/projects/video/online.mp4',
  queueBookingApp: '/projects/video/booking.mp4',
  towerOfMathematics: '/projects/video/tower.mp4',
}

const projects: Project[] = [
  {
    name: 'Queue Booking App',
    tools: 'Flutter',
    role: ['Full Stack Developer'],
    date: 2023,
    img: queueBookingApp,
    videoUrl: videoPath.queueBookingApp,
    category: 'Mobile',
    group: true,
    leader: true,
    details: {
      description:
        'To streamline the restaurant booking process, improve customer experience, and potentially increase restaurant capacity by offering real-time table availability and a queue management system',
      details: [
        'Led a three-month Flutter project for restaurant bookings to enhance customer experience and manage table availability as a Full-stack Mobile Developer.',
        "Designed the app's logic and delegated design tasks to the team, ensuring efficient task organization to meet submission.",
      ],
    },
  },
  {
    name: 'AFTER SCHOOL',
    tools: 'Unity',
    role: ['Game Design', 'Game Developer'],
    date: 2023,
    img: as,
    videoUrl: videoPath.after_school,
    category: 'Game',
    group: true,
    leader: true,
    details: {
      description:
        'AFTER SCHOOL is a 3D horror game that combines puzzle-solving and stealth elements. The game is set in a haunted school where the protagonist, Tsuki, must escape while avoiding three ghosts.',
      details: [
        'Developed a single-player 2D horror game demo using Unity.',
        'Features puzzles, item collection, an inventory system, and three difficulty levels.',
        'Focused on designing a fun and engaging game concept.',
        'Collaborated with teammates to create the game demo.',
        'Aimed to visualize and bring the game design to life.',
        'Provided a clearer representation of the gameplay and mechanics.',
      ],
    },
  },
  {
    name: 'RIDDLES OF THE TOWER OF MATHEMATICS',
    tools: 'Unity',
    role: ['Game Design', 'Game Developer'],
    date: 2022,
    img: riddlesOfTheTowerOfMathematics,
    videoUrl: videoPath.towerOfMathematics,
    category: 'Game',
    group: true,
    leader: false,
    details: {
      description:
        'Tower of Mathematics for children who are not good at math in elementary school.',
      details: [
        'Created 2D pixel games for educational purposes using Unity.',
        'Incorporated features such as user login, level selection, and a scoring system based on correct answers to math equations.',
        'Designed game mechanics.',
        'Collaborated with teammates to develop and bring the game to life.',
      ],
    },
  },
  {
    name: 'Covid19War',
    tools: 'Pygame',
    role: ['Game Design', 'Game Developer'],
    date: 2022,
    img: covid19war,
    videoUrl: videoPath.covid19war,
    category: 'Game',
    group: false,
    leader: false,
    details: {
      description:
        'Covid19War is an engaging 2D shooter game developed using the Pygame library. Players control a character tasked with defeating COVID-19 viruses and confronting formidable bosses. The game incorporates power-up items, a scoring system, immersive sound effects, and progressive difficulty for an enjoyable gaming experience.',
      details: [
        'Developed a 2D shooter game using the Pygame library.',
        'Incorporated power-up items, a scoring system, and progressive difficulty.',
        'Designed the game mechanics and collaborated with teammates to develop the game.',
      ],
    },
  },
  {
    name: 'Reload Rocket',
    tools: 'Figma',
    role: ['UX/UI Designer'],
    date: 2023,
    img: reloadRocket,
    category: 'UI/UX',
    group: true,
    leader: true,
    details: {
      description:
        'Reload Rocket is a game top-up website that allows users to purchase game credits and redeem codes for various games.',
      details: [
        'Led a team of designers to create a user-friendly interface for a game top-up website.',
        'Designed the website layout, user flow, and interactive elements.',
        'Ensured the website design was visually appealing and easy to navigate.',
      ],
    },
  },
  {
    name: 'Course Registration',
    tools: 'Figma',
    role: ['UX/UI Designer'],
    date: 2023,
    img: courseRegistration,
    category: 'UI/UX',
    group: true,
    leader: true,
    details: {
      description:
        'User-friendly interface design for an educational course registration system.',
      details: [
        'Led a team of designers to create a user-friendly interface for an educational course registration system.',
        'Designed the layout, user flow, and interactive elements.',
        'Ensured the design was visually appealing and easy to navigate.',
      ],
    },
  },
  {
    name: 'Online Food Ordering',
    tools: 'React, Node.js, MongoDB',
    role: ['Full Stack Developer'],
    date: 2023,
    img: onlineFoodOrdering,
    videoUrl: videoPath.onlineFoodOrdering,
    category: 'Web',
    group: true,
    leader: true,
    details: {
      description:
        'An online food ordering system that simplifies ordering, payments, and safety with online menus and contactless transactions.',
      details: [
        'Served as a back-end developer and team leader for an online food-ordering system.',
        'Created a secure, real-time payment system.',
        'Managed the back-end infrastructure of the application.',
        'Independently researched advanced concepts to enhance the project.',
        'Aimed to integrate advanced features with the front-end for improved functionality.',
      ],
    },
  },
  {
    name: 'MARH',
    tools: 'Stop Motion',
    role: ['Animator'],
    date: 2021,
    img: marh,
    videoUrl: videoPath.marh,
    category: 'Animation',
    group: true,
    leader: false,
    details: {
      description:
        'Scientists discover deadly flowers hallucinogenic power, driving villagers to primal instincts. Marh escapes, only to find a global epidemic mirroring his hallucinations.',
      details: [
        'Created a stop-motion animation film titled "MARH."',
        'Developed the storyline, characters, and animation sequences.',
        'Focused on creating a visually captivating and engaging narrative.',
      ],
    },
  },
]

export default function Projects() {
  // Get unique categories
  const categories = [
    'All',
    ...new Set(projects.map((project) => project.category)),
  ]

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])

  useEffect(() => {
    let result = [...projects]

    // Sort by date (newest first)
    result.sort((a, b) => b.date - a.date)

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter((project) => project.category === selectedCategory)
    }

    setFilteredProjects(result)
  }, [selectedCategory])

  const handleProjectClick = (project: Project) => {
    let mediaContent = ''

    // สร้างเนื้อหาวิดีโอหรือรูปภาพพร้อม thumbnail แบบ YouTube style
    if (project.videoUrl) {
      mediaContent = `
      <div class="flex justify-center my-6 relative">
        <div id="video-container" class="relative rounded-lg shadow-lg w-full max-w-2xl aspect-video overflow-hidden">
          <!-- ภาพ Thumbnail และปุ่มเล่น -->
          <div id="thumbnail-container" class="absolute inset-0 z-10 cursor-pointer">
            <img src="${project.img.src}" class="w-full h-full object-cover" alt="${project.name}" />
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-20 transition-opacity">
              <div class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-600 flex items-center justify-center play-button transform transition-transform hover:scale-110">
                <svg class="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- วิดีโอที่โหลดไว้แล้วแต่ยังไม่แสดง -->
          <video 
            id="project-video" 
            class="w-full h-full hidden" 
            controls 
            preload="auto" 
            playsinline
            poster="${project.img.src}"
          >
            <source src="${project.videoUrl}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          
          <!-- Loading progress indicator -->
          <div id="loading-progress" class="absolute bottom-0 left-0 h-1 bg-red-600 z-20 transition-all" style="width:0%"></div>
        </div>
      </div>
    `
    } else {
      mediaContent = `
      <div class="flex justify-center my-6">
        <img src="${project.img.src}" class="rounded-lg shadow-lg w-full max-w-2xl" alt="${project.name}" loading="lazy">
      </div>
    `
    }

    // สร้าง HTML สำหรับรายละเอียดโปรเจกต์เพิ่มเติม
    let detailsListHTML = ''
    if (
      project.details &&
      project.details.details &&
      project.details.details.length > 0
    ) {
      detailsListHTML = `
      <div class="my-6 flex flex-col">
        <h3 class="font-semibold text-lg mb-3">Project Details</h3>
        <ul class="list-disc pl-5 space-y-2 text-start">
          ${project.details.details
            .map((detail) => `<li class="text-base">${detail}</li>`)
            .join('')}
        </ul>
      </div>
    `
    }

    // ใช้ description จาก project.details ถ้ามี
    const description =
      project.details && project.details.description
        ? project.details.description
        : ''

    // เพิ่มกลุ่มและผู้นำ (ถ้ามี)
    const projectTypeHTML = `
    <div class="flex flex-wrap justify-center gap-3">
      ${
        project.group
          ? '<span class="badge badge-primary badge-outline">Group Project</span>'
          : '<span class="badge badge-outline">Individual Project</span>'
      }
      ${
        project.leader
          ? '<span class="badge badge-primary badge-outline">Team Leader</span>'
          : ''
      }
    </div>
  `

    const html = `
    <div class="max-h-[70vh] overflow-y-auto px-4">
      <!-- Details Section -->
      <div class="flex flex-col items-center gap-4">
        <div class="flex flex-col items-center">
          <h3 class="font-semibold text-lg mb-1">Tools & Technologies</h3>
          <p class="text-base-content/80">${project.tools}</p>
        </div>

        
        <div class="flex flex-col items-center">
          <h3 class="font-semibold text-lg mb-1">My Role</h3>
          <div class="flex flex-wrap gap-2 justify-center">
            ${project.role
              .map(
                (role) => `<span class="badge badge-secondary">${role}</span>`
              )
              .join('')}
          </div>
        </div>
            
        ${projectTypeHTML}
        
      </div>
      
      <!-- Media Section -->
      ${mediaContent}
      
      <!-- Description Section -->
      <div class="my-6">
        <h3 class="font-semibold text-lg mb-2">About This Project</h3>
        <p class="text-base leading-relaxed">${description}</p>
      </div>
      
      <!-- Additional Details Section -->
      ${detailsListHTML}
    </div>
  `

    Swal.fire({
      title: `<h2 class="text-2xl font-bold">${project.name} (${project.date})</h2>`,
      html: html,
      width: '800px',
      showCloseButton: true,
      showConfirmButton: false,
      customClass: {
        container: 'my-swal-container',
        popup: 'my-swal-popup',
        title: 'my-swal-title',
        htmlContainer: 'my-swal-html',
      },
      didOpen: () => {
        if (project.videoUrl) {
          const thumbnailContainer = document.getElementById(
            'thumbnail-container'
          ) as HTMLDivElement
          const videoElement = document.getElementById(
            'project-video'
          ) as HTMLVideoElement
          const loadingProgress = document.getElementById(
            'loading-progress'
          ) as HTMLDivElement

          if (thumbnailContainer && videoElement) {
            // เริ่มโหลดวิดีโอในพื้นหลังเมื่อเปิด modal
            // การตั้งค่า preload="auto" จะทำให้เบราว์เซอร์เริ่มโหลดวิดีโอทันที

            // แสดงความคืบหน้าในการโหลดวิดีโอ
            videoElement.addEventListener('progress', () => {
              // ถ้าวิดีโอมีข้อมูลเวลาทั้งหมด
              if (videoElement.duration) {
                for (let i = 0; i < videoElement.buffered.length; i++) {
                  // คำนวณเปอร์เซ็นต์ที่โหลดแล้ว
                  const bufferedEnd = videoElement.buffered.end(i)
                  const progressPercentage =
                    (bufferedEnd / videoElement.duration) * 100
                  loadingProgress.style.width = `${progressPercentage}%`
                }
              }
            })

            // เมื่อโหลดเสร็จพอที่จะเล่นได้
            videoElement.addEventListener('canplay', () => {
              if (thumbnailContainer) {
                const playButton =
                  thumbnailContainer.querySelector('.play-button')
                if (playButton) {
                  playButton.classList.add('ready')
                }
              }
            })

            // คลิกที่ thumbnail เพื่อเริ่มเล่น
            thumbnailContainer.addEventListener('click', () => {
              thumbnailContainer.classList.add('hidden')
              videoElement.classList.remove('hidden')

              // เล่นวิดีโอ
              videoElement.play().catch((error) => {
                console.warn('Auto-play prevented:', error)
                // ในกรณีที่ browser ป้องกันการ autoplay
                videoElement.controls = true
              })

              // ซ่อนแถบโหลด
              loadingProgress.classList.add('hidden')
            })

            // จัดการข้อผิดพลาดในการโหลดวิดีโอ
            videoElement.addEventListener('error', () => {
              thumbnailContainer.innerHTML = `
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
              <div class="text-white text-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-red-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-lg font-bold">Video could not be loaded</p>
                <p class="text-sm mt-1">Please check your connection and try again</p>
              </div>
            </div>
          `
            })
          }
        }
      },
    })
  }

  return (
    <section id='projects' className='py-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-10'>
          <h2 className='text-4xl md:text-5xl font-bold inline-block relative'>
            My Project
            <span className='block h-1 w-24 bg-primary mx-auto mt-4'></span>
          </h2>
          <p className='mt-4 text-lg opacity-80 max-w-2xl mx-auto'>
            A collection of my recent projects and works
          </p>
        </div>

        {/* Category Filters */}
        <div className='flex flex-wrap justify-center gap-2 mb-8'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`btn btn-sm ${
                selectedCategory === category
                  ? 'btn-primary text-neutral'
                  : 'btn-outline'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center'>
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className='card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer w-full max-w-xs'
              onClick={() => handleProjectClick(project)}
            >
              <figure className='relative h-48 overflow-hidden'>
                <Image
                  src={project.img}
                  alt={project.name}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                  className='object-cover'
                  priority={index < 4}
                />
                <div className='absolute top-2 right-2'>
                  <div className='badge badge-primary text-white'>
                    {project.date}
                  </div>
                </div>
                {project.videoUrl && (
                  <div className='absolute bottom-2 right-2'>
                    <div className='badge badge-accent'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      Video
                    </div>
                  </div>
                )}
              </figure>
              <div className='card-body flex flex-col justify-between'>
                <div className='card-titled flex flex-col justify-around items-center gap-3 min-h-16'>
                  <h2 className='text-lg font-bold text-center'>
                    {project.name}
                  </h2>
                  <div className='badge badge-outline'>{project.category}</div>
                </div>

                <p className='text-sm text-gray-700 my-4 line-clamp-3 min-h-24'>
                  {project.details?.description || ''}
                </p>

                <div className='card-actions justify-end mt-3'>
                  {project.role.map((role, idx) => (
                    <div
                      key={idx}
                      className='badge badge-secondary badge-outline'
                    >
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state when no projects match filter */}
        {filteredProjects.length === 0 && (
          <div className='text-center'>
            <p className='text-lg text-gray-700'>
              No projects found in this category
            </p>
          </div>
        )}
      </div>

      <style jsx global>{`
        .aspect-video {
          aspect-ratio: 16/9;
        }

        /* ถ้าคุณยังไม่มี styles สำหรับ SweetAlert */
        .my-swal-popup {
          max-height: 95vh;
          padding: 1.5rem 0;
          border-radius: 1rem;
        }
        .my-swal-container {
          z-index: 9999;
        }
        .my-swal-title {
          margin-bottom: 0.5rem !important;
          padding: 0.5rem 1rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        .my-swal-html {
          margin-top: 0.5rem !important;
        }
      `}</style>
    </section>
  )
}
