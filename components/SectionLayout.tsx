import React from 'react'

export function SectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <main className='mt-2'>
    <div className='grid grid-cols-12 px-80 justify-items-center justify-center relative mt-6 gap-y-20'>
      {children}
    </div>
  </main>
  );
}

