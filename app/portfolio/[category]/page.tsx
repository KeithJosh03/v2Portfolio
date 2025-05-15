'use client';

import { redirect } from 'next/navigation';
import React, { use, useEffect, useState } from 'react';

import { experiences,project, PortfolioData } from '@/utils/portfolio';

import { SectionLayout} from '@/components';

interface CategoryProps {
  params: Promise<{
    category: string;
  }>;
}


export default function Category({ params }: CategoryProps) {
  const { category } = use(params);
  const [dataCategory, setdataCategory] = useState<PortfolioData[]>([]);

  if(category !== 'experience' && category !== 'project'){
    redirect('/portfolio');
  }

  useEffect(() => {
    if(category === 'experience'){

      setdataCategory(experiences)
      console.log(experiences);
    }
    if(category === 'project'){
      setdataCategory(project)
      console.log(project);
    }

  },[category,dataCategory])

  return (
    <SectionLayout>
      <section className='min-h-screen col-span-12 flex flex-col container'>
        <h1 className="text-2xl font-bold text-PrimaryCol">{category}</h1>
      </section>
    </SectionLayout>
  );
}
