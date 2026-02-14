import React from 'react'
import { SectionLayout } from '@/components/SectionLayout'
import { Avatar } from '@/components/avatar'
import { HomeLayout } from './layout'

export default function Introduction() {
  return (
    <SectionLayout>
        <Avatar />
        <HomeLayout />
    </SectionLayout> 
  )
}
