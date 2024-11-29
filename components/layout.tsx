import React from 'react'

import { Avatar, Navbar } from '../components/';

export function ComponentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
   <Navbar />
    <main className='h-lvh w-full flex justify-center items-center absolute'>
        <div className='xl:w-8/12 xl:h-5/6 grid grid-cols-12 gap-10'>
          <Avatar />
          {children}
        </div>
    </main>
    </>
  );
}
