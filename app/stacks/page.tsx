import React from 'react'

import { ComponentLayout} from '@/components';
import { SectionsLayout, StackComponent } from '@/components/sections';

function Stacks() {
  return (
  <ComponentLayout>
    <SectionsLayout>
        <StackComponent />
    </SectionsLayout>
  </ComponentLayout>
  )
}

export default Stacks