import React from 'react'

import { ComponentLayout } from '@/components';
import {  SectionsLayout , AboutComponent} from '@/components/sections';


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