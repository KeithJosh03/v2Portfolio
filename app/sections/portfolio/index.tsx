'use client';
import React, { useState, useEffect } from 'react';

import { press, inter } from '@/utils/font';
import { Experince } from '@/public/portofolio';

import { experience, project, PortfolioData } from '@/utils/portfolio';

import Image from 'next/image';

export const PortfolioComponent = () => {
  const [experienceData, setExperience] = useState<PortfolioData | null >(null)

  useEffect(() => {
    setExperience(experience);
  }, []);


  return (
    <section className='min-h-screen col-span-12 flex flex-col container gap-10'>
      <div className='flex flex-col'>
        {/* Experience */}
        <div className={`${press.className} text-4xl flex flex-row gap-x-4`}>
          <h1 className='text-PrimaryCol'>My</h1>
          <h1 className='text-SecondaryCol'>Experiences</h1>
        </div>
        <div className='grid grid-cols-2 p-4 gap-x-8'>
          <div className='flex flex-col gap-y-12'>
            <div className={`${inter.className} flex flex-col text-PrimaryCol gap-y-4`}>
              <div className='flex flex-row justify-between text-left hover:bg-avatarBG shadow-lg rounded-2xl p-4'>
                <div className='flex flex-col gap-y-2'>
                  <h3 className='text-2xl font-extrabold'>Junior Programmer</h3>
                  <h4 className='text-sm font-light text-SecondaryCol'>Mindanao Davao City, Philippines</h4>
                </div>
                <div  className='self-center text-base text-PrimaryCol'>
                  July 2022 - September 2022
                </div>
              </div>
              <div className='flex flex-row justify-between text-left hover:bg-avatarBG shadow-lg rounded-2xl p-4'>
                <div className='flex flex-col'>
                  <h3 className='text-2xl font-extrabold'>Junior Web Developer</h3>
                  <h4 className='text-sm font-light text-SecondaryCol'>Mindanao Davao City, Philippines</h4>
                </div>
                <div  className='self-center text-base text-PrimaryCol'>
                  July 2022 - September 2022
                </div>
              </div>
              <div className='flex flex-row justify-between text-left hover:bg-avatarBG shadow-lg rounded-2xl p-4'>
                <div className='flex flex-col'>
                  <h3 className='text-2xl font-extrabold'>Junior Web Developer</h3>
                  <h4 className='text-sm font-light text-SecondaryCol'>Mindanao Davao City, Philippines</h4>
                </div>
                <div  className='self-center text-base text-PrimaryCol'>
                  July 2022 - September 2022
                </div>
              </div>
            </div>
          </div>

          {/* ShowCase */}
          <div className={`${inter.className} text-PrimaryCol self-center bg-avatarBG rounded-2xl shadow-md flex flex-col p-4 gap-y-6`}>
            <div className='flex flex-col text-5xl font-semibold'>
              <h3>Full Stack Developer</h3>
              <p className='text-xl font-normal text-SecondaryCol'>Montreal, Canada - June 2023 to January 2025</p>
            </div>
            <div className='relative h-72'>
              <Image
              fill={true}
              alt='site'
              className='object-fill'
              src={Experince}
              />
            </div>
            <p className='text-PrimaryCol font-medium text-lg'>PSO for small local Pharmacies Use, for efficient customer services and receipt assurance of good quality drugs</p>
            <div className='flex flex-col gap-y-4'>
              <h3 className='text-5xl font-semibold'>Technologies</h3>
              <div className='flex flex-row text-base gap-x-2'>
                <div className='border border-SecondaryCol rounded-2xl px-2'>
                  Axios
                </div>
                <div className='border border-SecondaryCol rounded-2xl px-2'>
                  Javascript
                </div>
                <div className='border border-SecondaryCol rounded-2xl px-2'>
                  Axios
                </div>
              </div>  
            </div>
          </div>

        </div>

        {/* Project */}
        <div>
          Project
        </div>

      </div>
    </section>
  );
}
