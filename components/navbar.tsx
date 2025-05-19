'use client';

import { useEffect, useState} from 'react';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

import { 
  experience,
  home, 
  write, 
  info, 
  stack , expericeactive , homeactive , writeactive ,infoactive , stackactive } from '../public/headericon';


export const Navbar = () => {
  const pathname = usePathname()
  let [currentPath, setPath] = useState<string>(pathname)

  useEffect(() => {
    setPath(pathname)
  },[pathname])
  
  

  return (
  <div className='flex justify-center items-center relative top-6'>
    <nav className='bg-headerBG rounded-2xl flex items-center gap-2 p-1.5'>
      <Link href='/' className='nav-item relative group'>
        <Image 
        src={home}
        className='m-auto'
        alt="/"
        width={22} 
        height={22}
        />
      <span className='text-xs font-normal text-SecondaryCol bg-stackBG p-3 absolute bottom-0 top-12 left-1/2 transform -translate-x-1/2 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-100'>
        Home
      </span>
      </Link>
      <Link href='/about' className='nav-item relative group'>
        <Image 
         src={info}
        className='m-auto'
        alt="/about"
        width={22} 
        height={22}
        />
      <span className='text-xs font-normal text-SecondaryCol bg-stackBG p-3 absolute bottom-0 top-12 left-1/2 transform -translate-x-1/2 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-100'>
        About
      </span>
      </Link>
      <Link href='/portfolio' className='nav-item relative group'>
        <Image 
        src={experience}
        className='m-auto'
        alt="/portfolio"
        width={22} 
        height={22}
        />
      <span className='text-xs font-normal text-SecondaryCol bg-stackBG p-3 absolute bottom-0 top-12 left-1/2 transform -translate-x-1/2 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-100'>
        Portfolio
      </span>
      </Link>
      <Link href='/email' className='nav-item relative group'>
        <Image 
        src={write}
        className='m-auto'
        alt="/email"
        width={22} 
        height={22}
        />
      <span className='text-xs font-normal text-SecondaryCol bg-stackBG p-3 absolute bottom-0 top-12 left-1/2 transform -translate-x-1/2 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-100'>
        Email
      </span>
      </Link>
    </nav>
  </div>
  );
};

