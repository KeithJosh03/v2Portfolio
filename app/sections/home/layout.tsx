import React from 'react';

import { Introduction } from './introduction';


export function HomeLayout(){
  return (
    <div className='xl:col-span-8 lg:col-span-12 flex flex-col w-full h-auto'>
      <Introduction />
    </div>
  );
}
