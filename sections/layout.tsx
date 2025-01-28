import React from 'react';

export function SectionsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return (
    <div className='xl:col-span-8 lg:col-span-12 flex flex-col w-full h-auto'>
      {children}
    </div>
    );
}
