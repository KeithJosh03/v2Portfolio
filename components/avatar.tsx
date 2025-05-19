'use client';

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { me, skype, linken , email , github } from '@/public/avatar'

import { contacts } from '@/utils/contact';

import { inter, press } from '@/utils/font';

export const Avatar = () => {
  console.log(contacts);
  return (
    <div className={`${inter.className} xl:col-span-4 lg:col-span-12 grid grid-rows-3 gap-4 justify-center`}>
      <div className='row-span-2 flex flex-col justify-around text-center items-center bg-avatarBG shadow-2xl rounded-2xl mx-4 p-4'>
        <div> 
          <Image 
          src={me} 
          alt='Me' 
          className='rounded-3xl object-cover m-auto'
          />
        </div>
        <div>
          <h1 className={`${press.className} text-PrimaryCol text-3xl font-extrabold mt-4`}>KEITH JOSHUA SALAVER</h1>
          <p className='font-medium text-lg text-SecondaryCol'>A self-taught Junior Web Developer with a track record of building responsive and efficient web solutions.</p>
        </div>
    </div>
    <div className={`${inter.className} row-span-1 text-left text-base font-extrabold bg-alterBG shadow-2xl items-center content-center rounded-2xl mx-4 p-4`}>
      <div className='grid grid-flow-col grid-rows-3 justify-items-start content-center gap-4 container text-PrimaryCol'>
        <div className='bg-stacksBG shadow-2xl rounded-2xl p-2 flex justify-between animation items-center w-full hover:bg-avatarBG group'>
          <Image src={linken} alt='iconavatar' className='object-center' width={28} height={28}/>
          <h3 className='group-hover:text-SecondaryCol'>Linken</h3>
          </div>
        <div className='bg-stacksBG shadow-2xl rounded-2xl p-2 flex justify-between items-center w-full hover:bg-avatarBG group'>
          <Image src={email} alt='iconavatar' className='object-center' width={28} height={28}/>
          <h3 className='group-hover:text-SecondaryCol'>Email</h3>
          </div>
        <div className='bg-stacksBG shadow-2xl rounded-2xl p-2 flex justify-between items-center w-full hover:bg-avatarBG group'>
          <Image src={github} alt='iconavatar' className='object-center' width={28} height={28}/>
          <h3 className='group-hover:text-SecondaryCol'>GitHub</h3>
          </div>
        <div className='bg-stacksBG shadow-2xl rounded-2xl p-2 flex justify-between items-center w-full hover:bg-avatarBG group'>
          <Image src={linken} alt='iconavatar' className='object-center' width={28} height={28}/>
          <h3 className='group-hover:text-SecondaryCol'>Teams</h3>
          </div>
        <div className='bg-stacksBG shadow-2xl rounded-2xl p-2 flex justify-between items-center w-full hover:bg-avatarBG group'>
          <Image src={email} alt='iconavatar' className='object-center' width={28} height={28}/>
          <h3 className='group-hover:text-SecondaryCol'>Google Chat</h3>
          </div>
      </div>
    </div>
    </div>
  )
}





{/* <motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1, delay: 1 }} 
className="xl:col-span-4 lg:col-span-12 w-3/4 lg:w-5/5 bg-avatarBG shadow-2xl rounded-2xl h-fit flex flex-col justify-center"
>
    <div className='h-3/6 text-center items-center p-8 lg:p-4'>
      <div>
        <Image src={me} alt='Me' className='rounded-3xl object-cover m-auto'/>
      </div>
      <div> 
        <h1 className={`${inter.className} text-PrimaryCol text-3xl font-bold mt-4`}>KEITH JOSHUA SALAVER</h1>
      </div>
    </div>
    <div className='h-3/6 rounded-2xl text-center flex flex-col justify-end gap-2'>
      <div className='p-6'>
        <p className={`${inter.className} font-medium text-lg text-ThirdCol`}>A self-taught Junior Web Developer with a track record of building responsive and efficient web solutions.</p>
      </div>
      <div className='flex flex-row items-center justify-center gap-8 mb-6'>
        <div><Image src={skype} alt='iconavatar' className='object-center object-cover' width={26} height={26}/></div>
        <div><Image src={linken} alt='iconavatar' className='object-center object-cover' width={26} height={26}/></div>
        <div><Image src={email} alt='iconavatar' className='object-center object-cover' width={26} height={26}/></div>
        <div><Image src={github} alt='iconavatar' className='object-center object-cover' width={26} height={26}/></div>
      </div>
    </div>
</motion.div> */}