import React from 'react'
import Image from 'next/image'

import { poppins } from '@/app/utils'
import { Gizmo, OSNET , Honey } from '@/public/portofolio'

export const Portfolio = () => {
  return (
    <div className={`${poppins.className} w-auto h-screen flex flex-col text-center content-center gap-2`}>
        <div className='h-1/3 rounded-2xl flex flex-row hover:bg-avatarBG hover:bg-opacity-100 shadow-2xl p-4'>
            <div className='basis-5/12 text-left p-6 flex flex-col gap-4'>
                <p className='text-sm text-ThirdCol font-medium'>2022 - 2022</p>
                <div>
                    <h3 className='text-xl text-SecondaryCol font-extrabold'>POINT OF SALE</h3>
                    <h3 className='text-md text-PrimaryCol font-bold'>WEB APPLICATION</h3>
                </div>
                <p className='text-sm font-thin text-ThirdCol text-left'>PSO for small local Pharmacies Use, for effiecent customer services and receipt for assure good quality drugs.</p>
            </div>
            <div className='basis-7/12 content-center p-2'>
                <div className='h-4/5'>
                <Image src={Gizmo} alt='gizmo' className='w-full h-full object-fill rounded'/>
                </div>
                <div className='h-1/5 flex flex-row gap-2 justify-left items-center'>
                    <div className='text-xs font-thin bg-stackBG text-SecondaryCol p-2 rounded-xl text-center'>
                        <span>Bootstrap</span>
                    </div>
                    <div className='text-xs font-thin bg-stackBG text-SecondaryCol p-2 rounded-xl text-center'>
                        <span>Javascript</span>
                    </div>
                    <div className='text-xs font-thin bg-stackBG text-SecondaryCol p-2 rounded-xl text-center'>
                        <span>jQuery</span>
                    </div>
                    <div className='text-xs font-thin bg-stackBG text-SecondaryCol p-2 rounded-xl text-center'>
                        <span>PHP</span>
                    </div>
                    <div className='text-xs font-thin bg-stackBG text-SecondaryCol p-2 rounded-xl text-center'>
                        <span>MySQL</span>
                    </div>
                    <div className='text-xs font-thin bg-stackBG text-SecondaryCol p-2 rounded-xl text-center'>
                        <span>Google Cloud</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-1/3 rounded-2xl flex flex-row hover:bg-avatarBG hover:bg-opacity-100 shadow-2xl p-4'>
            <div className='basis-5/12 text-left p-6 flex flex-col gap-4'>
                <p className='text-sm text-ThirdCol font-medium'>2022 - 2023</p>
                <div>
                    <h3 className='text-xl text-SecondaryCol font-extrabold'>JOINHONEY</h3>
                    <h3 className='text-md text-PrimaryCol font-bold'>BROWSER EXTENSION</h3>
                </div>
                <p className='text-sm font-thin text-ThirdCol text-left'>Honey is a browser extension that automatically finds and applies coupon codes at checkout, helping users save money on their online purchases.</p>
            </div>
            <div className='basis-7/12 content-center p-2'>
            <div className='h-4/5'>
                <Image src={Honey} alt='Honey' className='w-full h-full object-fill rounded'/>
                </div>
                <div className='h-1/5 flex flex-row gap-2 justify-left items-center'>
                    <div className='text-xs font-thin bg-stackBG text-SecondaryCol p-2 rounded-xl text-center'>
                        <span>Javascript</span>
                    </div>
                    <div className='text-xs font-thin bg-stackBG text-SecondaryCol p-2 rounded-xl text-center'>
                        <span>jQuery</span>
                    </div>
                    <div className='text-xs font-thin bg-stackBG text-SecondaryCol p-2 rounded-xl text-center'>
                        <span>Javascript</span>
                    </div>
                    <div className='text-xs font-thin bg-stackBG text-SecondaryCol p-2 rounded-xl text-center'>
                        <span>RegEx</span>
                    </div>
                    <div className='text-xs font-thin bg-stackBG text-SecondaryCol p-2 rounded-xl text-center'>
                        <span>Chrome Extension</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-1/3 rounded-2xl flex flex-row hover:bg-avatarBG hover:bg-opacity-100 shadow-2xl p-4'>
            <div className='basis-5/12 text-left p-6 flex flex-col gap-4'>
                <p className='text-sm text-ThirdCol font-medium'>2023 - 2024</p>
                <div>
                    <h3 className='text-xl text-SecondaryCol font-extrabold'>OSNET</h3>
                    <h3 className='text-md text-PrimaryCol font-extrabold'>WEB APPLICATION</h3>
                </div>
                <p className='text-sm font-thin text-ThirdCol text-left'>Developed and maintained a login and HR system for company employees.
                </p>
            </div>
            <div className='basis-7/12 content-center p-2'>
                <div className='h-4/5'>
                <Image src={OSNET} alt='OSNET' className='w-full h-full object-fill rounded'/>
                </div>
                <div className='h-1/5 flex flex-row gap-2 justify-left items-center'>
                    <div className='text-xs font-thin bg-stackBG text-SecondaryCol p-2 rounded-xl text-center'>
                        <span>Bootstrap</span>
                    </div>
                    <div className='text-xs font-thin bg-stackBG text-SecondaryCol p-2 rounded-xl text-center'>
                        <span>Javascript</span>
                    </div>
                    <div className='text-xs font-thin bg-stackBG text-SecondaryCol p-2 rounded-xl text-center'>
                        <span>jQuery</span>
                    </div>
                    <div className='text-xs font-thin bg-stackBG text-SecondaryCol p-2 rounded-xl text-center'>
                        <span>Axios</span>
                    </div>
                    <div className='text-xs font-thin bg-stackBG text-SecondaryCol p-2 rounded-xl text-center'>
                        <span>PHP</span>
                    </div>
                    <div className='text-xs font-thin bg-stackBG text-SecondaryCol p-2 rounded-xl text-center'>
                        <span>CodeIgniter</span>
                    </div>
                    <div className='text-xs font-thin bg-stackBG text-SecondaryCol p-2 rounded-xl text-center'>
                        <span>MySQL</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
