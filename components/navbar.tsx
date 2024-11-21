'use client';

import { useEffect, useState} from 'react';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'



import { experience, home, write, info, stack } from '../public/headericon';

export const Navbar = () => {
  let [currentPath, setPath] = useState()
  const pathname = usePathname()

  useEffect(() => {
    console.log(pathname)
  },[])
  
  

  return (
    <nav className='sticky justify-items-center flex justify-center mb-20'>
      <div className='bg-headerBG w-2/12 self-center flex p-3 absolute top-8 items-center justify-center place-items-center rounded-xl shadow-2xl'>
        
        <div className='basis-4/12 flex flex-col items-center relative group'>
          <Link href='/'>
            <Image 
              src={home}
              className='m-auto'
              alt="Home"
              width={22} 
              height={22}
            />
          </Link>
          <span className='text-xs font-normal text-SecondaryCol bg-stackBG p-3 absolute bottom-0 top-10 left-1/2 transform -translate-x-1/2 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
            Home
          </span>
        </div>

        <div className='basis-4/12 flex flex-col items-center relative group'>
          <Link href='/about'>
            <Image 
              src={info}
              className='m-auto'
              alt="About"
              width={22} 
              height={22}
            />
          </Link>
          <span className='text-xs font-normal text-SecondaryCol bg-stackBG p-3 absolute bottom-0 top-10 left-1/2 transform -translate-x-1/2 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
            About
          </span>
        </div>

        <div className='basis-4/12 flex flex-col items-center relative group'>
          <Link href='/portfolio'>
            <Image 
              src={experience}
              className='m-auto'
              alt="Experience"
              width={22} 
              height={22}
            />
          </Link>
          <span className='text-xs font-normal text-SecondaryCol bg-stackBG p-3 absolute bottom-0 top-10 left-1/2 transform -translate-x-1/2 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
            Portfolio
          </span>
        </div>

        <div className='basis-4/12 flex flex-col items-center relative group'>
          <Link href='/stacks'>
            <Image 
              src={stack}
              className='m-auto'
              alt="Skills"
              width={22} 
              height={22}
            />
          </Link>
          <span className='text-xs font-normal text-SecondaryCol bg-stackBG p-3 absolute bottom-0 top-10 left-1/2 transform -translate-x-1/2 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
            Stacks
          </span>
        </div>

        <div className='basis-4/12 flex flex-col items-center relative group'>
          <Link href='/email'>
            <Image 
              src={write}
              className='m-auto'
              alt="Email"
              width={22} 
              height={22}
            />
          </Link>
          <span className='text-xs font-normal text-SecondaryCol bg-stackBG p-3 absolute bottom-0 top-10 left-1/2 transform -translate-x-1/2 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
            Email
          </span>
        </div>

      </div>
    </nav>
  );
};
