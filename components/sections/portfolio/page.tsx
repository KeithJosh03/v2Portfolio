'use client';



import { press, inter } from "@/utils/font";




export default function PorfolioComponent(
  // {children,}: Readonly<{children: React.ReactNode;}>
) {


  return (
   <section className='min-h-screen col-span-12 flex flex-col container'>
      <div className='flex flex-row justify-between'>
        <div className={`${press.className} text-4xl flex flex-row gap-x-4 items-center text-center`}>
          <h1 className='text-PrimaryCol'>My</h1>
          <h1 className='text-SecondaryCol'>Porfolio</h1>
        </div>
      </div>
    </section>
  );
}