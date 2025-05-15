'use client';
import React from 'react';

import { poppins } from '@/utils/font';
import { Project, Experince } from '@/public/portofolio';

import Link from 'next/link';


export const PortfolioComponent = () => {

  return (
    <section className={`${poppins.className} min-h-screen col-span-12 flex flex-col container gap-10`}>
      <div className="container mx-auto flex flex-col gap-4">
        <h1 className="text-7xl font-extrabold mb-8">
          <span className='text-PrimaryCol'>MY</span>
          <span className='text-SecondaryCol block'>Portfolio</span>
        </h1>
      </div>
      <div className='container grid grid-cols-2 gap-4'>
        <Link href='/portfolio/project'>
          <div 
          className='relative h-96 group hover:animate-pulse duration-100 delay-100 bg-headerBG rounded-2xl shadow-2x bg-cover bg-center' 
          style={{ backgroundImage: `url(${Project.src})` }}
          >
          <h1 className='text-7xl font-extrabold text-PrimaryCol absolute left-10 top-10 group-hover:text-SecondaryCol'>Project</h1>
          </div>
        </Link>
        <Link href='/portfolio/experience'>
          <div 
          className='relative h-96 group hover:animate-pulse duration-100 delay-100 bg-headerBG rounded-2xl shadow-2x bg-cover bg-center' 
          style={{ backgroundImage: `url(${Experince.src})` }}
          >
          <h1 className='text-7xl font-extrabold text-PrimaryCol  absolute left-10 top-10 group-hover:text-SecondaryCol'>Experince</h1>
          </div>
        </Link>
      </div>
    </section>
  );
}
