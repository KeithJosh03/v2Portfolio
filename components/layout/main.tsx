import React from 'react'
import { Avatar } from '../avatar/avatar'
import { Showcase } from '../index'

export const Main = () => {
  return (
    <main className='h-lvh w-full flex justify-center items-center absolute top-20'>
      <div className='w-8/12 h-5/6 grid grid-cols-12 gap-10 h'>
        <Avatar />
        <Showcase />
      </div>
    </main>
  )
}
