import React from 'react';
import { Details } from './Details';
import { getSkills } from '@/utils/getSkills';

export async function HomeLayout() {
  const data = await getSkills();

  return (
    <div className="xl:col-span-8 lg:col-span-12 flex flex-col w-full h-auto">
      <Details data={data} />
    </div>
  );
}
