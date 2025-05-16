import React from 'react'

import { poppins, inter } from '@/utils/font'
import Link from 'next/link'

export const AboutComponent = () => {
  return (
      <section className={`${inter.className} min-h-screen col-span-12 flex flex-col gap-10`}>
        <div className='flex flex-col col-span-12 gap-4 text-left'>
          <h4 className='text-SecondaryCol text-4xl font-extrabold'>ABOUT</h4>
          <p className='text-ThirdCol text-lg text-wrap font-medium'>Hi, I'm  <span className='text-PrimaryCol font-extrabold text-xl'>Keith</span> , a Full Stack Web Developer passionate about building efficient and impactful web applications. Through my <span className='text-SecondaryCol font-extrabold text-xl'><Link href='/portfolio/'>Work Experience</Link></span>, I have honed my skills in developing solutions that drive value and innovation.</p>
          <p className='text-ThirdCol text-lg text-wrap font-medium'>As a self-learner, I continuously expand my <span className='text-SecondaryCol font-extrabold text-xl'><Link href='/stacks/'>Tech Skills</Link></span>, staying ahead in the ever-evolving tech landscape. While I didn't pursue a formal degree, my dedication to learning and hands-on experience have shaped my expertise.</p>
          <p className='text-ThirdCol text-lg text-wrap font-medium'>In terms of <span className='text-SecondaryCol font-extrabold text-xl'><Link href="/about#education">Education</Link></span>, I have focused on self-directed learning, utilizing online resources, tutorials, and real-world projects to refine my craft.</p>
          <p className='text-ThirdCol text-lg text-wrap font-medium'>Beyond coding, my <span className='text-SecondaryCol font-extrabold text-xl'><Link href="/about#hobbies">Hobbies</Link></span> keep me inspired and creative, fueling my passion for building meaningful digital experiences.</p>
          <p className='text-ThirdCol text-lg text-wrap font-medium'>I strive to work with a company that helps me grow while contributing my expertise. Let’s connect and build something amazing together!</p>
        </div>
        <div className='flex flex-col col-span-8 gap-4'>
          <h4 className='text-SecondaryCol text-4xl font-extrabold'>#Work Experience</h4>
          <ul className="list-disc pl-10 text-lg">
            <li className='text-PrimaryCol'>
              <div className="flex justify-between">
                <span className="font-extrabold text-PrimaryCol">Junior Programmer <span className='text-PrimaryCol font-light'>May 2022 - December 2022</span></span>
              </div>
              <div className="ml-4">
                <span className="font-normal text-SecondaryCol">PSO JUANPOS, Philippines</span>
              </div>
            </li>
            <li className='text-PrimaryCol'>
              <div className="flex justify-between">
                <span className="font-extrabold  text-PrimaryCol">Junior Web Developer <span className='text-PrimaryCol font-light'>2022 - December 2023</span></span>
              </div>
              <div className="ml-4">
                <span className="font-normal text-SecondaryCol">JoinHoney, Philippines</span>
              </div>
            </li>
            <li className='text-PrimaryCol'>
              <div className="flex justify-between">
                <span className="font-extrabold text-PrimaryCol">Junior Web Developer <span className='text-PrimaryCol font-light'>2023 - 2024</span></span>
              </div>
              <div className="ml-4">
                <span className="font-normal text-SecondaryCol">OSNET - Phillippines</span>
              </div>
            </li>
          </ul>
        </div>
        <div className='flex flex-col col-span-8' id='education'>
          <h4 className='text-SecondaryCol text-4xl font-extrabold'>#Education</h4>
          <ul className="list-disc pl-10 text-lg">
            <li className='text-PrimaryCol'>
              <div className="flex justify-between">
                <span className="font-extrabold text-PrimaryCol">Information and Communication Technology <span className='text-PrimaryCol font-light'>2017-2019 Senior High School</span></span>
              </div>
              <div className="ml-4">
                <span className="font-normal text-SecondaryCol">University of Mindanao</span>
              </div>
            </li>
            <li className='text-PrimaryCol'>
              <div className="flex justify-between">
                <span className="font-extrabold text-PrimaryCol">College of Computing Education <span className='text-PrimaryCol font-light'>2019-2020 College</span></span>
              </div>
              <div className="ml-4">
                <span className="font-normal text-SecondaryCol">University of Mindanao</span>
              </div>
            </li>
          </ul>
          
        </div>
        <div className='flex flex-col col-span-12 gap-4 text-left' id='hobbies'>
          <h4 className='text-SecondaryCol text-4xl font-extrabold'>#Hobbies</h4>
          <p className='text-ThirdCol text-lg text-wrap font-medium'>In my free time, I enjoy taking leisurely walks, reflecting on life, and contemplating the future. This passion for movement led me to participate in fun runs and hiking adventures, with my most memorable experience being my hike up <span className='text-PrimaryCol font-bold'>Mt. Apo</span>, the third-highest peak in the world.</p>
          <p className='text-ThirdCol text-lg text-wrap font-medium'>The journey was both challenging and rewarding, strengthening my love for the outdoors. Beyond physical activities, I also immerse myself in learning new techniques and deepening my knowledge of JavaScript frameworks, constantly striving to improve my skills.</p>
          <p className='text-ThirdCol text-lg text-wrap font-medium'>Recently, I’ve also taken an interest in playing the guitar, enjoying the process of learning chords and melodies as a way to unwind and express myself through music.</p>
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