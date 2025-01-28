
import React from 'react'
import { poppins } from '@/utils'

export const HomeComponent = () => {
  return (
    <section className='h-screen sm:min-h-[80vh] flex flex-col xl:text-center xl:items-start lg:items-center content-center gap-6'>
        <div className={`${poppins.className} xl:text-left lg:text-center lg:text-8xl font-extrabold w-4/6`}>
            <h1 className='text-PrimaryCol'>WEB</h1>
            <h1 className='text-SecondaryCol'>DEVELOPER</h1>
            <p className='text-ThirdCol text-lg text-wrap font-medium'>Hi👋 self-motivated IT professional with knowledge and proficiency in JavaScript, HTML , CSS, and mobile responsive web development, as well as strong skills and ability in writing clean and efficient code.</p>
        </div>
        <div className='flex flex-row w-2/6 text-left'>
            <div className={`${poppins.className} basis-8/12 font-medium text-lg`}>
                <p className='text-5xl font-semibold text-SecondaryCol'>3+</p>
                <p className='text-PrimaryCol'>YEARS OF</p>
                <p className='text-PrimaryCol'>EXPERIENCE</p>
            </div>
            <div className={`${poppins.className} basis-8/12 font-medium text-lg`}>
                <p className='text-5xl font-semibold text-SecondaryCol'>+4</p>
                <p className='text-PrimaryCol'>PROJECTS</p>
                <p className='text-PrimaryCol'>COMPLETED</p>
            </div>
        </div>
        <div  className={`${poppins.className} w-5/6 xl:text-left lg:text-center font-extrabold`}>
            <ul className='grid gap-1 text-lg'>
                <li className='text-SecondaryCol'>RESIDENCE: <span className='text-PrimaryCol font-medium'>DAVAO CITY, PHILIPPINES</span></li>
                <li className='text-SecondaryCol'>Hobby: <span className='text-PrimaryCol font-medium'>Hiking & Running</span></li>
                <li className='text-SecondaryCol'>RESUME: <span className='text-PrimaryCol font-medium'>Download</span></li>
            </ul>
        </div>
    </section>
  )
}
