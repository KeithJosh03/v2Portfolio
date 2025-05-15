import React from 'react'

export function SectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <main>
    <div className='grid grid-cols-12 px-80 justify-items-center justify-center relative top-20'>
      {children}
    </div>
  </main>
  );
}

