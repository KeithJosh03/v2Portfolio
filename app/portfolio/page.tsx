import React from 'react'

import {  ComponentLayout } from '@/components';
import { SectionsLayout, PortfolioComponent } from '@/sections';


function Portfolio() {
  return (
    <ComponentLayout>
      <SectionsLayout>
        <PortfolioComponent/>
      </SectionsLayout>
    </ComponentLayout>
  )
}

export default Portfolio