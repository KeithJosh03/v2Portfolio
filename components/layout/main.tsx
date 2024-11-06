import React from 'react'
import { Avatar } from '../avatar/avatar'
import {Showcase} from '../index'



export const Main = () => {
  return (
    <main className='h-lvh w-full flex justify-center items-center absolute top-16'>
      <div className='w-8/12 h-5/6 flex flex-row'>
        <Avatar />
        <Showcase />
      </div>
    </main>
  )
}
