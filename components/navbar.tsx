'use client';

import { useEffect, useState} from 'react';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

import { experience, home, write, info, stack , expericeactive , homeactive , writeactive ,infoactive , stackactive } from '../public/headericon';


export const Navbar = () => {
  const pathname = usePathname()
  let [currentPath, setPath] = useState<string>(pathname)

  useEffect(() => {
    setPath(pathname)
  },[pathname])
  
  

  return (
    <nav className='sticky justify-items-center flex justify-center mb-20'>
      <div className='bg-headerBG w-2/12 self-center flex p-3 absolute top-8 items-center justify-center place-items-center rounded-xl shadow-2xl'>
        
        <div className='basis-4/12 flex flex-col items-center relative group'>
          <Link href='/'>
            {
              currentPath !== '/' ? (
              <Image 
                src={home}
                className='m-auto'
                alt="/"
                width={22} 
                height={22}
              />) 
              :
              (
                <Image 
                src={homeactive}
                className='m-auto'
                alt="/"
                width={22} 
                height={22}
              />
              ) 
            }
          </Link>
          <span className='text-xs font-normal text-SecondaryCol bg-stackBG p-3 absolute bottom-0 top-10 left-1/2 transform -translate-x-1/2 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-100'>
            Home
          </span>
        </div>

        <div className='basis-4/12 flex flex-col items-center relative group'>
          <Link href='/about'>
            {
              currentPath !== '/about' ? (
              <Image 
              src={info}
              className='m-auto'
              alt="/about"
              width={22} 
              height={22}
              />) 
              :
              (
                <Image 
                src={infoactive}
                className='m-auto'
                alt="/"
                width={22} 
                height={22}
              />
              ) 
            }
          </Link>
          <span className='text-xs font-normal text-SecondaryCol bg-stackBG p-3 absolute bottom-0 top-10 left-1/2 transform -translate-x-1/2 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-100'>
            About
          </span>
        </div>

        <div className='basis-4/12 flex flex-col items-center relative group'>
          <Link href='/portfolio'>
            { currentPath !== '/portfolio' ? (
              <Image 
                src={experience}
                className='m-auto'
                alt="/portfolio"
                width={22} 
                height={22}
              />) 
              :
              (
                <Image 
                src={expericeactive}
                className='m-auto'
                alt="/"
                width={22} 
                height={22}
              />
              ) 
            }
          </Link>
          <span className='text-xs font-normal text-SecondaryCol bg-stackBG p-3 absolute bottom-0 top-10 left-1/2 transform -translate-x-1/2 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-100'>
            Portfolio
          </span>
        </div>

        <div className='basis-4/12 flex flex-col items-center relative group'>
          <Link href='/stacks'>
            { currentPath !== '/stacks' ? (
              <Image 
                src={stack}
                className='m-auto'
                alt="/stacks"
                width={22} 
                height={22}
              />) 
              :
              (
              <Image 
                src={stackactive}
                className='m-auto'
                alt="/"
                width={22} 
                height={22}
              />
              ) 
            }
          </Link>
          <span className='text-xs font-normal text-SecondaryCol bg-stackBG p-3 absolute bottom-0 top-10 left-1/2 transform -translate-x-1/2 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-100'>
            Stacks
          </span>
        </div>

        <div className='basis-4/12 flex flex-col items-center relative group'>
          <Link href='/email'>
            
            { currentPath !== '/email' ? (
              <Image 
                src={write}
                className='m-auto'
                alt="/email"
                width={22} 
                height={22}
              />) 
              :
              (
              <Image 
                src={writeactive}
                className='m-auto'
                alt="/"
                width={22} 
                height={22}
              />
              ) 
            }
          </Link>
          <span className='text-xs font-normal text-SecondaryCol bg-stackBG p-3 absolute bottom-0 top-10 left-1/2 transform -translate-x-1/2 rounded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-100'>
            Email
          </span>
        </div>

      </div>
    </nav>
  );
};
