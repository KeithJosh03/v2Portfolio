'use client';
import React from 'react';

import { inter, press } from '@/utils/font';
import Image from 'next/image';

import { motion } from 'framer-motion';

import { skills } from '@/utils/skills';

export const Introduction = () => {
  let [frontend , backend, others]:any = skills;
  console.log(frontend);
  return (
    <section className='min-h-screen sm:min-h-[80vh] grid grid-cols-9 grid-rows-3 gap-4'>
      <div className={`${press.className} col-span-9 row-span-1 xl:text-left text-7xl font-extrabold bg-alterBG shadow-2xl rounded-2xl p-4`}>
        <h1 className='text-PrimaryCol'>WEB</h1>
        <h1 className='text-SecondaryCol'>DEVELOPER</h1>
      </div>
      <div className={`${inter.className} col-span-6 row-span-1 text-left font-extrabold text-5xl bg-avatarBG shadow-2xl rounded-2xl p-4`}>
        <p className='text-PrimaryCol text-lg text-wrap font-medium'>
          Hi
        <span className="inline-block">👋</span>
        ! I'm a self-taught IT professional with expertise in JavaScript, HTML, CSS, and responsive web development, seeking an opportunity to collaborate with a company that fosters skill development while allowing me to contribute my knowledge and write clean, efficient code.
        </p>
      </div>
      <div className={`${press.className} col-span-3 row-span-1 text-left text-2xl font-extrabold bg-alterBG shadow-2xl rounded-2xl p-4`}>
          <h3 className='text-PrimaryCol '>Full-Stack</h3>
          <h3 className='text-SecondaryCol'>Developer</h3>
      </div>
      <div className={`${press.className} col-span-3 row-span-1 text-left text-2xl font-extrabold bg-avatarBG shadow-2xl rounded-2xl p-4`}>
        <p className='text-3xl text-SecondaryCol'>2+</p>
        <p className='text-PrimaryCol'>YEARS OF</p>
        <p className='text-PrimaryCol'>EXPERIENCE</p>
      </div>
      <div className={`${inter.className} col-span-6 row-span-1 grid grid-cols-4 grid-rows-2 gap-4 text-left text-PrimaryCol font-extrabold text-sm bg-alterBG shadow-2xl rounded-2xl p-4`}>
        <div className='col-span-2 row-span-1 bg-avatarBG shadow-2xl rounded-2xl p-2'>
          <h5>Frontend Development:</h5>
          <div className='flex space-x-2 items-center justify-start p-4'>
          {
            frontend['icons'].map((skill:any,key:number) => (
              <Image 
              key={key}
              width={30}
              height={30}
              alt='skills'
              src={skill}
              />
            ))
          }
          </div>
        </div>
        <div className='col-span-2 row-span-1 bg-avatarBG shadow-2xl rounded-2xl p-2'>
          <h5>BackEnd Development:</h5>
          <div className='flex space-x-2 items-center justify-start p-4'>
            {
              backend['icons'].map((skill:any,key:number) => (
                <Image 
                key={key}
                width={30}
                height={30}
                alt='skills'
                src={skill}
                />
              ))
            }
          </div>
        </div>
        <div className='col-span-4 row-span-1 bg-avatarBG shadow-2xl rounded-2xl p-2'>
          <p>Others:</p>
          <div className='flex space-x-2 items-start justify-start p-4'>
            {
              others['icons'].map((skill:any,key:number) => (
              <Image 
              key={key}
              width={30}
              height={30}
              alt='skills'
              src={skill}
              />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};



// 'use client';
// import React from 'react';
// import { inter } from '@/utils/font';
// import { motion } from 'framer-motion';

// export const Introduction = () => {
//   return (
//     <section className='min-h-screen sm:min-h-[80vh] flex flex-col xl:text-center xl:items-start lg:items-center content-center gap-4'>
//       <div className={`${inter.className} xl:text-left lg:text-center lg:text-8xl font-extrabold w-4/6`}>
//         <h1 className='text-PrimaryCol'>WEB</h1>
//         <h1 className='text-SecondaryCol'>DEVELOPER</h1>
//         <p className='text-ThirdCol text-lg text-wrap font-medium'>
//         Hi
//         <span className="inline-block">👋</span>
//         ! I'm a self-taught IT professional with expertise in JavaScript, HTML, CSS, and responsive web development, seeking an opportunity to collaborate with a company that fosters skill development while allowing me to contribute my knowledge and write clean, efficient code.
//         </p>
//       </div>
//       <div className='flex flex-row w-2/6 text-left'>
//         <div className={`${inter.className} basis-8/12 font-medium text-lg`}>
//           <p className='text-5xl font-semibold text-SecondaryCol'>2+</p>
//           <p className='text-PrimaryCol'>YEARS OF</p>
//           <p className='text-PrimaryCol'>EXPERIENCE</p>
//         </div>
//         <div className={`${inter.className} basis-8/12 font-medium text-lg`}>
//           <p className='text-5xl font-semibold text-SecondaryCol'>+4</p>
//           <p className='text-PrimaryCol'>PROJECTS</p>
//           <p className='text-PrimaryCol'>COMPLETED</p>
//         </div>
//       </div>
//       <div className={`${inter.className} w-5/6 xl:text-left lg:text-center font-extrabold`}>
//         <ul className='grid gap-1 text-lg'>
//           <li className='text-SecondaryCol'>
//             RESIDENCE: <span className='text-PrimaryCol font-medium'>DAVAO CITY, PHILIPPINES</span>
//           </li>
//           <li className='text-SecondaryCol'>
//             Hobby: <span className='text-PrimaryCol font-medium'>Hiking & Running</span>
//           </li>
//           <li className='text-SecondaryCol'>
//             RESUME: <span className='text-PrimaryCol font-semibold'>Download</span>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// };
