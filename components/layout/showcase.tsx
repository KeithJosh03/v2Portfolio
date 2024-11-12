import React from 'react'

import { Home, About, Portfolio , Stack , Email} from '../sections'


export const Showcase = () => {
  return (
    <div className='col-span-9 flex flex-col h-auto'>
        <Home />
        <About />
        <Portfolio />
        <Stack />
        <Email />
    </div>
  )
}



