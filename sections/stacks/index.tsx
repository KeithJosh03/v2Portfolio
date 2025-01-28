import React from 'react'

import { poppins } from '@/utils'
import Image from 'next/image'

import { 
      htmlcss,
      tailwind , 
      javascript , 
      jquery ,
      reactjs , 
      nextjs , 
      php , 
      laravel , 
      git , 
      codeigniter,
      bootstrap,
      mysql
      } from '@/public/skills'

export const StackComponent = () => {
  return (
    <section className={`${poppins.className} min-h-screen content-center text-SecondaryCol`}>
      <h1 className='text-PrimaryCol text-6xl text-left lg:text-center font-extrabold mb-4'>STACKS</h1>
      <div className='h-2/2 grid grid-rows-3 grid-cols-4 p-4 gap-2 content-center items-center place-content-center rounded-2xl bg-avatarBG shadow-2xl'>
        <div className='h-5/6 flex flex-row content-center items-center p-4 bg-stackBG rounded'>
          <div className='basis-8/12 text-left'>
            <h1 className=''>HTML & CSS</h1>
          </div>
          <div className='basis-4/12 p-2'>
            <Image src={htmlcss} alt='htmlcss' className='basis-1/2 w-full h-full object-fill animate-pulse'/>
          </div>
        </div>
        <div className='h-5/6 flex flex-row content-center items-center p-4 bg-stackBG rounded'>
            <div className='basis-8/12 text-left'>
              <h1>Tailwind</h1>
            </div>
            <div className='basis-4/12 p-2'>
              <Image src={tailwind} alt='htmlcss' className='basis-1/2 w-full h-full object-fill animate-pulse'/>
            </div>
        </div>
        <div className='h-5/6 flex flex-row content-center items-center p-4 bg-stackBG rounded'>
          <div className='basis-8/12 text-left'>
            <h1>Bootstrap</h1>
          </div>
          <div className='basis-4/12 p-2'>
            <Image src={bootstrap} alt='htmlcss' className='basis-1/2 w-full h-full object-fill animate-pulse'/>
          </div>
        </div>
        <div className='h-5/6 flex flex-row content-center items-center p-4 bg-stackBG rounded'>
          <div className='basis-8/12 text-left'>
            <h1>ES6</h1>
          </div>
          <div className='basis-4/12 p-2'>
            <Image src={javascript} alt='htmlcss' className='basis-1/2 w-full h-full object-fill animate-pulse'/>
          </div>
        </div>
        <div className='h-5/6 flex flex-row content-center items-center p-4 bg-stackBG rounded'>
            <div className='basis-8/12 text-left'>
              <h1>jQuery</h1>
            </div>
            <div className='basis-4/12 p-2'>
              <Image src={jquery} alt='htmlcss' className='basis-1/2 w-full h-full object-fill animate-pulse'/>
            </div>
        </div>
        <div className='h-5/6 flex flex-row content-center items-center p-4 bg-stackBG rounded'>
            <div className='basis-8/12 text-left'>
              <h1>ReactJS</h1>
            </div>
            <div className='basis-4/12 p-2'>
              <Image src={reactjs} alt='htmlcss' className='basis-1/2 w-full h-full object-fill animate-pulse'/>
            </div>
        </div>
        <div className='h-5/6 flex flex-row content-center items-center p-4 bg-stackBG rounded'>
            <div className='basis-8/12 text-left'>
              <h1>NextJS</h1>
            </div>
            <div className='basis-4/12 p-2'>
              <Image src={nextjs} alt='htmlcss' className='basis-1/2 w-full h-full object-fill animate-pulse'/>
            </div>
        </div>
        <div className='h-5/6 flex flex-row content-center items-center p-4 bg-stackBG rounded'>
            <div className='basis-8/12 text-left'>
              <h1>PHP</h1>
            </div>
            <div className='basis-4/12 p-2'>
              <Image src={php} alt='htmlcss' className='basis-1/2 w-full h-full object-fill animate-pulse'/>
            </div>
        </div>
        <div className='h-5/6 flex flex-row content-center items-center p-4 bg-stackBG rounded'>
            <div className='basis-8/12 text-left'>
              <h1>Laravel</h1>
            </div>
            <div className='basis-4/12 p-2'>
              <Image src={laravel} alt='htmlcss' className='basis-1/2 w-full h-full object-fill animate-pulse'/>
            </div>
        </div>
        <div className='h-5/6 flex flex-row content-center items-center p-4 bg-stackBG rounded'>
            <div className='basis-8/12 text-left'>
              <h1>CodeIgniter</h1>
            </div>
            <div className='basis-4/12 p-2'>
              <Image src={codeigniter} alt='htmlcss' className='basis-1/2 w-full h-full object-fill animate-pulse'/>
            </div>
        </div>
        <div className='h-5/6 flex flex-row content-center items-center p-4 bg-stackBG rounded'>
            <div className='basis-8/12 text-left'>
              <h1>MySQL</h1>
            </div>
            <div className='basis-4/12 p-2'>
              <Image src={mysql} alt='htmlcss' className='basis-1/2 w-full h-full object-fil animate-pulse'/>
            </div>
        </div>
        <div className='h-5/6 flex flex-row content-center items-center p-4 bg-stackBG rounded'>
            <div className='basis-8/12 text-left'>
              <h1>GIT</h1>
            </div>
            <div className='basis-4/12 p-2'>
              <Image src={git} alt='htmlcss' className='basis-1/2 w-full h-full object-fill animate-pulse'/>
            </div>
        </div>
      </div>
    </section>
  )
}
