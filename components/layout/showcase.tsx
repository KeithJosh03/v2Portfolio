import React from 'react'

import { Home, About, Portfolio} from '../sections'


export const Showcase = () => {
  return (
    <div className='col-span-9 flex flex-col h-auto'>
        <Home />
        <About />
        <Portfolio />
    </div>
  )
}



