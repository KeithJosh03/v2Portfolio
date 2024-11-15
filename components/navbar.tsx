import React from 'react'
import Image from 'next/image';

import Link from 'next/link';

import {experience,home, write,info, stack} from '../public/headericon';

export const Navbar = () => {
  return (
    <nav className='sticky justify-items-center flex justify-center mb-20'>
      <div className='bg-headerBG w-2/12 self-center flex p-3 absolute top-8 items-center justify-center place-items-center rounded-xl shadow-2xl'>
        <div className='basis-4/12'>
          <Link href='/'>
            <Image src={home}
            className='m-auto'
            alt="Picture of the author" 
            width={22} 
            height={22}/>
          </Link>
        </div>
        <div className='basis-4/12'>
          <Link href='/about'>
            <Image src={info}
            className='m-auto'
            alt="Picture of the author" 
            width={22} 
            height={22}/>
          </Link>
        </div>
        <div className='basis-4/12'>
          <Link href='/portfolio'>
            <Image src={experience}
            className='m-auto'
            alt="Picture of the author" 
            width={22} 
            height={22}/>
          </Link>
        </div>
        <div className='basis-4/12'>
          <Link href='/stacks'>
            <Image src={stack}
            className='m-auto'
            alt="Picture of the author" 
            width={22} 
            height={22}/>
          </Link>
        </div>
        <div className='basis-4/12'>
          <Link href='/email'>
            <Image src={write}
            className='m-auto'
            alt="Picture of the author" 
            width={22} 
            height={22}/>
          </Link>
        </div>
      </div>
    </nav>
  )
}

