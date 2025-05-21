'use client';
import React from 'react';

import { inter, press } from '@/utils/font';
import Image from 'next/image';

import { motion } from 'framer-motion';

import { skills } from '@/utils/skills';

export const Home = () => {
  let [frontend , backend, others]:any = skills;
  return (
    <section className='min-h-screen sm:min-h-[80vh] grid grid-cols-9 grid-rows-3 gap-4'>
      <div className={`${press.className} col-span-9 row-span-1 text-left text-7xl font-extrabold bg-alterBG shadow-2xl rounded-2xl p-4`}>
        <h1 className='text-PrimaryCol'>WEB</h1>
        <h1 className='text-SecondaryCol'>DEVELOPER</h1>
      </div>
      <div className={`${inter.className} col-span-6 row-span-1 text-left font-extrabold text-xl  bg-avatarBG shadow-2xl rounded-2xl p-4`}>
        <p className='text-PrimaryCol text-wrap font-medium'>
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
            frontend['skills'].map((skill:any,index:number) => (
              <Image 
              key={index}
              width={30}
              height={30}
              alt={skill.name}
              src={skill.icon}
              />
            ))
          }
          </div>
        </div>
        <div className='col-span-2 row-span-1 bg-avatarBG shadow-2xl rounded-2xl p-2'>
          <h5>BackEnd Development:</h5>
          <div className='flex space-x-2 items-center justify-start p-4'>
            {
            backend['skills'].map((skill:any,index:number) => (
              <Image 
              key={index}
              width={30}
              height={30}
              alt={skill.name}
              src={skill.icon}
              />
            ))
            }
          </div>
        </div>
        <div className='col-span-4 row-span-1 bg-avatarBG shadow-2xl rounded-2xl p-2'>
          <p>Others:</p>
          <div className='flex space-x-2 items-start justify-start p-4'>
            {
            others['skills'].map((skill:any,index:number) => (
              <Image 
              key={index}
              width={30}
              height={30}
              alt={skill.name}
              src={skill.icon}
              />
            ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};
