import React from 'react'
import Image from 'next/image'

import { Me } from '@/public/avatar'

import { inter } from '@/app/fonts';



export const Avatar = () => {
  return (
    <div className='basis-4/12 border border-slate-500 bg-avatarBG rounded-2xl shadow h-5/6'>
      <div className='flex flex-col items-center justify-center'>
        <div className='basis-6/12 text-center items-center p-16'>
          <Image src={Me} alt='Me' className='rounded-3xl'/>
          <h1 className={`${inter.className} text-avatarName text-3xl font-extrabold mt-4`}>KEITH JOSHUA SALAVER</h1>
        </div>
        <div className='basis-6/12 text-center items-center text-avatarPara font-bold text-lg'>
          <p>A Software Engineer who has developed countless innovative solutions.</p>
        </div>
      </div>
    </div>
  )
}
