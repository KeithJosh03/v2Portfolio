import React from 'react'

import { poppins } from '@/app/fonts'

export const About = () => {
  return (
    <div className='h-screen w-auto'>
        <div className={`${poppins.className} grid grid-cols-2 text-left text-6xl font-extrabold gap-4`}>
          <div className='col-span-1 text-PrimaryCol flex flex-col gap-4 hover:backdrop-blur-sm hover:bg-avatarBG hover:shadow-xl rounded-2xl p-4'>
            <h1 className='text-center self-center'>EXPERIENCE</h1>
            <ol className="relative text-left p-4">   
              <li className="gap-4">
                <time className="mb-1 text-sm font-medium text-greyCol">July 2022 - September 2022</time>
                <h3 className="text-lg text-PrimaryCol">Junior Programmer - PSO</h3>
                <p className="text-base font-thin text-SecondaryCol">Full Stack Web Developer, I specialize in debugging and finalizing Point of Sale systems, particularly in refining sales calculations and generating detailed receipts using TCPDF for Pharmacies.</p>
              </li>  
              <li className="gap-4">
                <time className="mb-1 text-sm font-medium text-greyCol">October 2022 - June 2023</time>
                <h3 className="text-lg text-PrimaryCol">Junior Web Developer - JOINHONEY EXTENSION</h3>
                <p className="text-base font-thin text-SecondaryCol">Maintained the HoneyJoin Extension project, aimed at enhancing the user experience on various e-commerce websites.</p>
              </li> 
              <li className="gap-4">
                <time className="mb-1 text-sm font-medium text-greyCol">July 2023 - June 2024</time>
                <h3 className="text-lg text-PrimaryCol">Junior Web Developer - OSNET</h3>
                <p className="text-base font-thin text-SecondaryCol">Full Stack Web Developer, Developed and maintained a login and HR system for company employees.</p>
              </li> 
            </ol>
          </div>
          <div className='col-span-1 text-PrimaryCol flex flex-col gap-4 hover:backdrop-blur-sm hover:bg-avatarBG hover:shadow-xl rounded-2xl p-4'>
            <h1 className='text-center'>EDUCATION</h1>
            <ol className="relative text-left p-4">   
              <li className="gap-4">
                <time className="mb-1 text-sm font-medium text-greyCol">2017-2019 - Senior High School</time>
                <h3 className="text-lg text-PrimaryCol">Information and Communication Technology</h3>
                <p className="text-base font-thin text-SecondaryCol">University of Mindanao</p>
              </li>  
              <li className="gap-4">
                <time className="mb-1 text-sm font-medium text-greyCol">2019-2020 - College</time>
                <h3 className="text-lg text-PrimaryCol">College of Computing Education</h3>
                <p className="text-base font-thin text-SecondaryCol">University of Mindanao</p>
              </li> 
            </ol>
          </div>
        </div>
    </div>
  )
}

