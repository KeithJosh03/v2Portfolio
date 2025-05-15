import React from 'react'

import { Avatar, SectionLayout } from '@/components';
import { HomeLayout } from '@/app/sections';


const Home = () => {
  return (
    <SectionLayout>
      <Avatar />
      <HomeLayout />
    </SectionLayout>
  )
}


export default Home;
