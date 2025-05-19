import React from 'react'

import { press, inter } from '@/utils/font'
import Image from 'next/image'

import { about } from '@/utils/about'

export const AboutComponent = () => {
  let [ computerset , student]:any = about;
  return (
      <section className='min-h-screen container col-span-12 grid grid-rows-4 grid-cols-6 gap-4 mb-10'>
        <div className='col-span-2 row-span-2 items-center text-center px-4'>
          <Image 
          src={student.image} 
          alt='Me' 
          className='rounded-3xl object-cover m-auto'
          />
          <h3 className={`${inter.className} mt-4 text-xl font-normal text-PrimaryCol`}>I graduated Senior High School last March of 2020</h3>
        </div>
        <div className={`${inter.className} col-span-4 row-span-2 bg-alterBG rounded-2xl shadow-2xl flex flex-col text-left p-4 gap-8`}>
          <div className={`${press.className} text-5xl font-extrabold flex flex-row gap-2`}>
            <h1 className='text-PrimaryCol'>About</h1>
            <h1 className='text-SecondaryCol'>Me</h1>
          </div>
          <div className='flex flex-col text-PrimaryCol text-lg font-medium gap-4'>
            <p>
              Hello there! I'm Keith Joshua M. Salaver, a Senior High School graduate with a specialization in Information and Communication Technology from the University of Mindanao, Philippines. Since graduating, I’ve been committed to self-learning — mastering Vanilla JavaScript and advancing my skills as a full-stack developer with PHP and MySQL.
            </p>
            <p>
              Coding feels like playing a game to me — discovering new ideas, learning new techniques, fixing bugs, and designing solutions. It brings me joy and fuels my passion for turning ideas into reality.
            </p>
            <p>
              Over the past two years, my journey in software development has been one of rapid growth. After gaining hands-on experience through various projects like PSO, an employee login system, and a browser extension, I’ve taken time to focus on upskilling — particularly in React.js. This dedicated learning period has allowed me to sharpen my frontend development skills and prepare myself for future opportunities as a React.js Developer.
            </p>
          </div>
        </div>
        <div className={`${inter.className} col-span-2 row-span-2 bg-avatarBG rounded-2xl shadow-2xl flex flex-col text-left p-4 gap-8`}>
          <div className={`${press.className} text-4xl font-extrabold flex flex-col gap-2`}>
            <h1 className='text-PrimaryCol'>Computer</h1>
            <h1 className='text-SecondaryCol'>Setup</h1>
          </div>
          <div className='flex flex-col font-medium text-lg gap-2 text-PrimaryCol'>
            <p>MotherBoard - <span className='text-SecondaryCol'>ASUS PRIME H510M-K 10TH</span></p>
            <p>CPU - <span className='text-SecondaryCol'>Intel(R) Core(TM) i5-10400</span></p>
            <p>Ram - <span className='text-SecondaryCol'>KINGSTON FURY BEAST DDR4 3200MHZ 8GB 2x</span></p>
            <p>SSD - <span className='text-SecondaryCol'>Kingston 480GB</span></p>
            <p>OS - <span className='text-SecondaryCol'>Linux</span></p>
            <p>GPU - <span className='text-SecondaryCol'>GTX 1660 Super</span></p>
            <p>IDE - <span className='text-SecondaryCol'>Visual Studio Code</span></p>
          </div>
        </div>
        <div className='col-span-4 row-span-2 flex flex-col'>
            <Image 
            src={computerset.image} 
            alt='Me' 
            className='rounded-3xl object-cover m-auto'
            />
        </div>
      </section>
  )
}




      // <section className={`${inter.className} min-h-screen col-span-12 flex flex-col gap-10`}>
      //   <div className='flex flex-col col-span-12 gap-4 text-left'>
      //     <h4 className='text-SecondaryCol text-4xl font-extrabold'>ABOUT</h4>
      //     <p className='text-ThirdCol text-lg text-wrap font-medium'>Hi, I'm  <span className='text-PrimaryCol font-extrabold text-xl'>Keith</span> , a Full Stack Web Developer passionate about building efficient and impactful web applications. Through my <span className='text-SecondaryCol font-extrabold text-xl'><Link href='/portfolio/'>Work Experience</Link></span>, I have honed my skills in developing solutions that drive value and innovation.</p>
      //     <p className='text-ThirdCol text-lg text-wrap font-medium'>As a self-learner, I continuously expand my <span className='text-SecondaryCol font-extrabold text-xl'><Link href='/stacks/'>Tech Skills</Link></span>, staying ahead in the ever-evolving tech landscape. While I didn't pursue a formal degree, my dedication to learning and hands-on experience have shaped my expertise.</p>
      //     <p className='text-ThirdCol text-lg text-wrap font-medium'>In terms of <span className='text-SecondaryCol font-extrabold text-xl'><Link href="/about#education">Education</Link></span>, I have focused on self-directed learning, utilizing online resources, tutorials, and real-world projects to refine my craft.</p>
      //     <p className='text-ThirdCol text-lg text-wrap font-medium'>Beyond coding, my <span className='text-SecondaryCol font-extrabold text-xl'><Link href="/about#hobbies">Hobbies</Link></span> keep me inspired and creative, fueling my passion for building meaningful digital experiences.</p>
      //     <p className='text-ThirdCol text-lg text-wrap font-medium'>I strive to work with a company that helps me grow while contributing my expertise. Let’s connect and build something amazing together!</p>
      //   </div>
      //   <div className='flex flex-col col-span-8 gap-4'>
      //     <h4 className='text-SecondaryCol text-4xl font-extrabold'>#Work Experience</h4>
      //     <ul className="list-disc pl-10 text-lg">
      //       <li className='text-PrimaryCol'>
      //         <div className="flex justify-between">
      //           <span className="font-extrabold text-PrimaryCol">Junior Programmer <span className='text-PrimaryCol font-light'>May 2022 - December 2022</span></span>
      //         </div>
      //         <div className="ml-4">
      //           <span className="font-normal text-SecondaryCol">PSO JUANPOS, Philippines</span>
      //         </div>
      //       </li>
      //       <li className='text-PrimaryCol'>
      //         <div className="flex justify-between">
      //           <span className="font-extrabold  text-PrimaryCol">Junior Web Developer <span className='text-PrimaryCol font-light'>2022 - December 2023</span></span>
      //         </div>
      //         <div className="ml-4">
      //           <span className="font-normal text-SecondaryCol">JoinHoney, Philippines</span>
      //         </div>
      //       </li>
      //       <li className='text-PrimaryCol'>
      //         <div className="flex justify-between">
      //           <span className="font-extrabold text-PrimaryCol">Junior Web Developer <span className='text-PrimaryCol font-light'>2023 - 2024</span></span>
      //         </div>
      //         <div className="ml-4">
      //           <span className="font-normal text-SecondaryCol">OSNET - Phillippines</span>
      //         </div>
      //       </li>
      //     </ul>
      //   </div>
      //   <div className='flex flex-col col-span-8' id='education'>
      //     <h4 className='text-SecondaryCol text-4xl font-extrabold'>#Education</h4>
      //     <ul className="list-disc pl-10 text-lg">
      //       <li className='text-PrimaryCol'>
      //         <div className="flex justify-between">
      //           <span className="font-extrabold text-PrimaryCol">Information and Communication Technology <span className='text-PrimaryCol font-light'>2017-2019 Senior High School</span></span>
      //         </div>
      //         <div className="ml-4">
      //           <span className="font-normal text-SecondaryCol">University of Mindanao</span>
      //         </div>
      //       </li>
      //       <li className='text-PrimaryCol'>
      //         <div className="flex justify-between">
      //           <span className="font-extrabold text-PrimaryCol">College of Computing Education <span className='text-PrimaryCol font-light'>2019-2020 College</span></span>
      //         </div>
      //         <div className="ml-4">
      //           <span className="font-normal text-SecondaryCol">University of Mindanao</span>
      //         </div>
      //       </li>
      //     </ul>
          
      //   </div>
      //   <div className='flex flex-col col-span-12 gap-4 text-left' id='hobbies'>
      //     <h4 className='text-SecondaryCol text-4xl font-extrabold'>#Hobbies</h4>
      //     <p className='text-ThirdCol text-lg text-wrap font-medium'>In my free time, I enjoy taking leisurely walks, reflecting on life, and contemplating the future. This passion for movement led me to participate in fun runs and hiking adventures, with my most memorable experience being my hike up <span className='text-PrimaryCol font-bold'>Mt. Apo</span>, the third-highest peak in the world.</p>
      //     <p className='text-ThirdCol text-lg text-wrap font-medium'>The journey was both challenging and rewarding, strengthening my love for the outdoors. Beyond physical activities, I also immerse myself in learning new techniques and deepening my knowledge of JavaScript frameworks, constantly striving to improve my skills.</p>
      //     <p className='text-ThirdCol text-lg text-wrap font-medium'>Recently, I’ve also taken an interest in playing the guitar, enjoying the process of learning chords and melodies as a way to unwind and express myself through music.</p>
      //   </div>
      // </section>