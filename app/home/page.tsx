import React from 'react'

import { SectionLayout } from '@/components';
import { HomeComponent , AboutComponent , PortfolioComponent , StackComponent , EmailComponent } from '@/components/sections';

const Home = () => {
  return (
    <SectionLayout>
      <HomeComponent />
      <AboutComponent />
      <PortfolioComponent />
      <StackComponent />
      <EmailComponent />
    </SectionLayout>
  )
}

export default Home;
