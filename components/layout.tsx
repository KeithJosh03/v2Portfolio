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
    <main className='h-screen w-full flex justify-center items-center relative'>
        <div className='w-6/12 h-5/6 md:h-4/5 md:w-5/6 grid grid-cols-12 gap-10 mt-auto'>
          <Avatar />
          {children}
        </div>
    </main>
    </>
  );
}
// xl:w-8/12 xl:h-5/6 grid grid-cols-12 
// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }