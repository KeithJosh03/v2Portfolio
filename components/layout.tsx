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
    <main className='h-screen flex justify-center items-center'>
        <div className='xl:w-4/6 lg:w-5/6 h-4/6 grid grid-cols-12  justify-items-center justify-center relative'>
          <Avatar />
          {children}
        </div>
    </main>
    </>
  );
}

