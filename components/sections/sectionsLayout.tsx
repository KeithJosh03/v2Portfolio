import React from 'react'

export function SectionsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return (
    <div className='xl:col-span-9 md:col-span-12 flex flex-col h-auto'>
        {children}
    </div>
    );
}
