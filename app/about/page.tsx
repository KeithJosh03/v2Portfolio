import React from 'react'

import { ComponentLayout } from '@/components';
import {  SectionsLayout , AboutComponent} from '@/sections';


function AboutPage() {
  return (
    <ComponentLayout >
      <SectionsLayout>
        <AboutComponent />
      </SectionsLayout>
    </ComponentLayout>
  )
}

export default AboutPage