import React from 'react'

import { Avatar, Navbar} from '../components/';

export function SectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar />
    <main className='h-lvh w-full flex justify-center items-center absolute'>
        <div className='w-8/12 h-5/6 grid grid-cols-12 gap-10'>
          <Avatar />
          <div className='col-span-9 flex flex-col h-auto'>
            {children}
          </div>
        </div>
    </main>
    </>
  );
}