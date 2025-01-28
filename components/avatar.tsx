import React from 'react'
import Image from 'next/image'

import { me, skype, linken , email , github } from '@/public/avatar'

import { poppins } from '@/utils';

export const Avatar = () => {
  return (
    <div className='xl:col-span-4 lg:col-span-12 w-3/4 lg:w-5/5 bg-avatarBG shadow-2xl rounded-2xl h-fit flex flex-col justify-center'>
      <div className='h-3/6 text-center items-center p-8 lg:p-4'>
        <div>
          <Image src={me} alt='Me' className='rounded-3xl object-cover m-auto'/>
        </div>
        <div> 
          <h1 className={`${poppins.className} text-PrimaryCol text-3xl font-bold mt-4`}>KEITH JOSHUA SALAVER</h1>
        </div>
      </div>
      <div className='h-3/6 rounded-2xl text-center flex flex-col justify-end gap-2'>
        <div className='p-6'>
          <p className={`${poppins.className} font-medium text-lg text-ThirdCol`}>A self-taught Junior Web Developer with a track record of building responsive and efficient web solutions.</p>
        </div>
        <div className='flex flex-row items-center justify-center gap-8 mb-6'>
          <div><Image src={skype} alt='iconavatar' className='object-center object-cover' width={26} height={26}/></div>
          <div><Image src={linken} alt='iconavatar' className='object-center object-cover' width={26} height={26}/></div>
          <div><Image src={email} alt='iconavatar' className='object-center object-cover' width={26} height={26}/></div>
          <div><Image src={github} alt='iconavatar' className='object-center object-cover' width={26} height={26}/></div>
        </div>
      </div>
    </div>
  )
}



