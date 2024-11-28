import React from 'react'

export function SectionsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return (
    <div className='col-span-9 flex flex-col h-auto'>
        {children}
    </div>
    );
}
