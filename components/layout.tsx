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
    <main className='h-screen w-full flex justify-center items-center'>
        <div className='2xl:w-4/6 2xlh-4/6 md:h-4/5 md:w-5/6 grid grid-cols-12 gap-10 relative top-10'>
          <Avatar />
          {children}
        </div>
    </main>
    </>
  );
}
// desktop : 1200 x 800
// tablet : 768 x 956 
// mobile : 375 x 629
