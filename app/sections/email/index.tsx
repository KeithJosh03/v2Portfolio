import React from 'react'

import { press,poppins } from '@/utils/font'

export const EmailComponent = () => {
  return (
    <section className={`${poppins.className} min-h-screen container col-span-12 flex flex-col`}>
      <div className={`${press.className} text-left text-6xl font-extrabold`}>
        <h1 className='text-PrimaryCol'>LET'S WORK</h1>
        <h1 className='text-SecondaryCol'>TOGETHER</h1>
      </div>
      <div className='flex flex-row gap-4'>
        <div className='basis-1/2 flex flex-col gap-2'>
          <span className='text-sm text-ThirdCol'>Name</span>
          <input type='text' placeholder='Your Name' className='outline-none text-base border-none p-3 rounded bg-stackBG placeholder:text-ThirdCol text-PrimaryCol'></input>
        </div>
        <div className='basis-1/2 flex flex-col gap-2'>
          <span className='text-sm text-ThirdCol'>Email</span>
          <input type='text' placeholder='Your@email' className='outline-none text-base border-none p-3 rounded bg-stackBG placeholder:text-ThirdCol text-PrimaryCol'></input>
        </div>
      </div>
      <div className='h-1/4 flex flex-col gap-4'>
        <span className='text-sm text-ThirdCol'>Message</span>
        <textarea placeholder='Message' className='outline-none text-base p-3 border-none rounded bg-stackBG placeholder:text-ThirdCol text-PrimaryCol h-3/5 placeholder:text-start'></textarea>
      </div>
      <button className='text-base p-3 bg-headerBG rounded-xl shadow-2xl text-PrimaryCol'>Submit</button>
    </section>
  )
}
