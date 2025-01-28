import React from 'react'

import { poppins } from '@/utils'

export const AboutComponent = () => {
  return (
    <section className='h-screen sm:min-h-[80vh] w-auto'>
        <div className={`${poppins.className} flex flex-row justify-items-center text-left text-6xl font-extrabold gap-4`}>
          <div className='basis-1/2 text-PrimaryCol flex flex-col gap-4 bg-avatarBG shadow-2xl rounded-2xl relative text-left p-6'>
            <h1 >EXPERIENCE</h1>
            <ol>   
              <li className="gap-4">
                <time className="mb-1 text-sm font-medium text-ThirdCol">July 2022 - September 2022</time>
                <h3 className="text-lg text-SecondaryCol">Junior Programmer - PSO</h3>
                <p className="text-sm font-normal text-PrimaryCol">Full Stack Web Developer, I specialize in debugging and finalizing Point of Sale systems, particularly in refining sales calculations and generating detailed receipts using TCPDF for Pharmacies.</p>
              </li>  
              <li className="gap-4">
                <time className="mb-1 text-sm font-medium text-ThirdCol">October 2022 - June 2023</time>
                <h3 className="text-lg text-SecondaryCol">Junior Web Developer - JOINHONEY EXTENSION</h3>
                <p className="text-sm font-normal text-PrimaryCol">Maintained the HoneyJoin Extension project, aimed at enhancing the user experience on various e-commerce websites.</p>
              </li> 
              <li className="gap-4">
                <time className="mb-1 text-sm font-medium text-ThirdCol">July 2023 - June 2024</time>
                <h3 className="text-lg text-SecondaryCol">Junior Web Developer - OSNET</h3>
                <p className="text-sm font-normal text-PrimaryCol">Full Stack Web Developer, Developed and maintained a login and HR system for company employees.</p>
              </li> 
            </ol>
          </div>
          <div className='basis-1/2 text-PrimaryCol flex flex-col gap-4 bg-avatarBG shadow-2xl rounded-2xl relative text-left p-6'>
            <h1>EDUCATION</h1>
            <ol>   
              <li className="gap-4">
                <time className="mb-1 text-sm font-medium text-ThirdCol">2017-2019 - Senior High School</time>
                <h3 className="text-lg text-SecondaryCol">Information and Communication Technology</h3>
                <p className="text-sm font-normal text-PrimaryCol">University of Mindanao</p>
              </li>  
              <li className="gap-4">
                <time className="mb-1 text-sm font-medium text-ThirdCol">2019-2020 - College</time>
                <h3 className="text-lg text-SecondaryCol">College of Computing Education</h3>
                <p className="text-sm font-normal text-PrimaryCol">University of Mindanao</p>
              </li> 
            </ol>
          </div>
        </div>
    </section>
  )
}
