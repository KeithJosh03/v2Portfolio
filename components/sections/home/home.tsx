import React from 'react'

import { poppins } from '@/app/fonts'

export const Home = () => {
  return (
    <div className='w-auto h-lvh flex flex-col text-center content-center gap-6'>
        <div className={`${poppins.className} text-left text-8xl font-extrabold w-5/6`}>
            <h1 className='text-PrimaryCol'>JUNIOR</h1>
            <h1 className='text-SecondaryCol'>WEB DEVELOPER</h1>
            <p className='text-PrimaryCol text-lg leading-8 font-medium'>A self-motivated IT professional with knowledge and proficiency in JavaScript, HTML , CSS, and mobile responsive web development, as well as strong skills and ability in writing clean and efficient code.</p>
        </div>
        <div className='flex flex-row w-2/6 text-left'>
            <div className={`${poppins.className} basis-8/12 font-medium text-lg`}>
                <p className='text-7xl font-semibold text-PrimaryCol'>+2</p>
                <p className='text-SecondaryCol'>YEARS OF</p>
                <p className='text-SecondaryCol'>EXPERIENCE</p>
            </div>
            <div className={`${poppins.className} basis-8/12 font-medium text-lg`}>
                <p className='text-7xl font-semibold text-PrimaryCol'>+3</p>
                <p className='text-SecondaryCol'>PROJECTS</p>
                <p className='text-SecondaryCol'>COMPLETED</p>
            </div>
        </div>
        <div  className={`${poppins.className} w-5/6 gap-4 text-left font-extrabold`}>
            <ul className='grid grid-rows-3 gap-2 text-lg'>
                <li className='text-SecondaryCol'>NAME: <span className='text-PrimaryCol font-medium'>KEITH JOSHUA M. SALAVER</span> </li>
                <li className='text-SecondaryCol'>RESIDENCE: <span className='text-PrimaryCol font-medium'>PHILIPPINES, MINDANAO DAVAO CITY</span></li>
                <li className='text-SecondaryCol'>BIRTHDAY: <span className='text-PrimaryCol font-medium'>MARCH 4, 2001</span></li>
            </ul>
        </div>
    </div>
  )
}
