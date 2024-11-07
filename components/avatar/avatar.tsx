import React from 'react'
import Image from 'next/image'

import { me, skype, linken , email , github } from '@/public/avatar'

import { inter } from '@/app/fonts';



export const Avatar = () => {
  return (
    <div className='col-span-3 bg-avatarBG rounded-2xl shadow h-5/6 flex flex-col'>
      <div className='h-4/6 text-center items-center p-4'>
        <div>
          <Image src={me} alt='Me' className='rounded-3xl object-cover m-auto'/>
        </div>
        <div>
          <h1 className={`${inter.className} text-avatarName text-3xl font-extrabold mt-4`}>KEITH JOSHUA SALAVER</h1>
        </div>
      </div>
      <div className='h-2/6 rounded-2xl text-center flex flex-col justify-end gap-6'>
        <div>
          <p className={`${inter.className} font-bold text-xl text-avatarPara`}>A Software Engineer who has developed countless innovative solutions.</p>
        </div>
        <div className='flex flex-row items-center justify-center gap-8 mb-4'>
          <div><Image src={skype} alt='iconavatar' className='object-center object-cover' width={26} height={26}/></div>
          <div><Image src={linken} alt='iconavatar' className='object-center object-cover' width={26} height={26}/></div>
          <div><Image src={email} alt='iconavatar' className='object-center object-cover' width={26} height={26}/></div>
          <div><Image src={github} alt='iconavatar' className='object-center object-cover' width={26} height={26}/></div>
        </div>
      </div>
    </div>
  )
}


