import React from 'react'

import { ComponentLayout } from '@/components';
import {  SectionsLayout ,HomeComponent , AboutComponent , PortfolioComponent , StackComponent , EmailComponent } from '@/components/sections';


const Home = () => {
  return (
    <>
    <ComponentLayout>
      <SectionsLayout>
        <HomeComponent />
        <AboutComponent />
        <PortfolioComponent />
        <StackComponent />
        <EmailComponent />
      </SectionsLayout>
    </ComponentLayout>
    </>
  )
}

export default Home;
