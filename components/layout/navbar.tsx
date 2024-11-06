import React from 'react'
import Image from 'next/image';

import {experience,home, write,info, stack} from '../../public/headericon';

export const Navbar = () => {
  return (
    <header className='sticky justify-items-center flex justify-center'>
      <div className='bg-headerBG w-2/12 self-center flex p-3 absolute top-8 items-center justify-center place-items-center rounded-xl'>
        <div className='basis-4/12'>
          <Image src={home}
          className='m-auto'
          alt="Picture of the author" 
          width={22} 
          height={22}/>
        </div>
        <div className='basis-4/12'>
          <Image src={info}
          className='m-auto'
          alt="Picture of the author" 
          width={22} 
          height={22}/>
        </div>
        <div className='basis-4/12'>
          <Image src={experience}
          className='m-auto'
          alt="Picture of the author" 
          width={22} 
          height={22}/>
        </div>
        <div className='basis-4/12'>
          <Image src={stack}
          className='m-auto'
          alt="Picture of the author" 
          width={22} 
          height={22}/>
        </div>
        <div className='basis-4/12'>
          <Image src={write}
          className='m-auto'
          alt="Picture of the author" 
          width={22} 
          height={22}/>
        </div>
      </div>
    </header>
  )
}

