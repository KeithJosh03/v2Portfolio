import React from 'react';
import { Details } from './Details';
import { getSkills } from '@/utils/getSkills';

export async function HomeLayout() {
  const data = await getSkills();

  return (
    <div className="col-span-1 lg:col-span-8 flex flex-col w-full">
      <Details data={data} />
    </div>
  );
}
