import React from 'react'


import { ComponentLayout } from '@/components';
import { SectionsLayout , EmailComponent } from '@/components/sections'

function Email() {
  return (
    <ComponentLayout>
      <SectionsLayout>
          <EmailComponent />
      </SectionsLayout>
    </ComponentLayout>
  )
}

export default Email