'use client'

import React from 'react'
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
  SiSequelize,
  SiPrisma,
  SiMysql,
} from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'

const skillCategories = {
  Frontend: [
    { name: 'HTML', icon: SiHtml5, color: '#e34c26', value: 100 },
    { name: 'CSS', icon: SiCss3, color: '#264de4', value: 70 },
    { name: 'JavaScript', icon: SiJavascript, color: '#f0db4f', value: 100 },
    { name: 'TypeScript', icon: SiTypescript, color: '#007acc', value: 100 },
    { name: 'React', icon: SiReact, color: '#61DAFB', value: 100 },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000', value: 80 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38b2ac', value: 100 },
  ],
  Backend: [
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', value: 90 },
  ],
  Database: [
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', value: 90 },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', value: 70 },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', value: 50 },
    { name: 'Sequelize', icon: SiSequelize, color: '#52B0E7', value: 50 },
    { name: 'Prisma', icon: SiPrisma, color: '#2D3748', value: 50 },
  ],
  'DevOps & Tools': [
    { name: 'Git', icon: SiGit, color: '#F05032', value: 50 },
    // { name: 'AWS', icon: SiAmazon, color: '#FF9900', value: 40 },
    { name: 'Azure AD', icon: VscAzure, color: '#0078D4', value: 50 },
  ],
}

const Skills: React.FC = () => {
  return (
    <section
      id='skills'
      className='py-20 bg-gradient-to-br from-base-200 via-base-100 to-base-200'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-10'>
          <h2 className='text-4xl md:text-5xl font-bold inline-block relative'>
            My Skills
            <span className='block h-1 w-24 bg-primary mx-auto mt-4'></span>
          </h2>
          <p className='mt-4 text-lg opacity-80 max-w-2xl mx-auto'>
            Technologies and tools I&apos;ve been working with recently
          </p>
        </div>

        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className='mb-16 last:mb-0'>
            <div className='flex items-center mb-8'>
              <h3 className='text-2xl md:text-3xl font-bold text-primary'>
                {category}
              </h3>
              <div className='h-px bg-base-300 flex-grow ml-4'></div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6'>
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <div
                    key={index}
                    className='relative bg-base-100 rounded-lg shadow-lg p-5 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105'
                  >
                    <IconComponent
                      className='text-4xl sm:text-5xl mb-4 transition-all duration-300'
                      style={{ color: skill.color }}
                    />
                    <h4 className='text-sm sm:text-base font-medium text-center'>
                      {skill.name}
                    </h4>
                    {/* <div className='w-full mt-2 flex items-center justify-between gap-2'>
                      <progress
                        className='progress progress-primary'
                        value={skill.value}
                        max='100'
                      />
                      <span className='font-semibold'>{skill.value}%</span>
                    </div> */}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Floating shapes for visual effect */}
      <div className='absolute top-20 right-10 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl -z-10'></div>
      <div className='absolute bottom-20 left-10 w-72 h-72 bg-secondary opacity-5 rounded-full blur-3xl -z-10'></div>
    </section>
  )
}

export default Skills
