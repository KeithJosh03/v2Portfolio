import {
  javascript,
  php,
  tailwind,
  bootstrap,
  jquery,
  reactjs,
  nextjs,
  codeigniter,
  laravel,
  mysql,
  gc,
  github,
  visualstudio,
  xampp,
  postman,
  linux
} from '@/public/skillSVG';

import { StaticImageData } from 'next/image';

type Skill = {
  name: string;
  icon: StaticImageData;
}

export interface SkillsList {
  position: string;
  skills :Skill[];
}

export const skills: SkillsList[] = [
  {
    position: "FrontEnd",
    skills:[
      {
        name:'Boostrap',
        icon:bootstrap
      },
      {
        name:'Tailwind',
        icon:tailwind
      },
      {
        name:'Javascript',
        icon:javascript
      },
      {
        name:'jQuery',
        icon:jquery
      },
      {
        name:'NextJS',
        icon:nextjs
      }
    ]
  },
  {
    position:"BackEnd",
    skills:[
      {
        name:'PHP',
        icon:php
      },
      {
        name:'CodeIgniter',
        icon:codeigniter
      },
      {
        name:'Laravel',
        icon:laravel
      },
      {
        name:'Mysql',
        icon:mysql
      },
    ]
  },
  {
    position:"Others",
    skills:[
       {
        name:'Google Cloud',
        icon:gc
      },
      {
        name:'Github',
        icon:github
      },
      {
        name:'Visual Studio Code',
        icon:visualstudio
      },
      {
        name:'Xampp',
        icon:xampp
      },
      {
        name:'Postman',
        icon:postman
      },
      {
        name:'Linux',
        icon:linux
      }
    ]
  }
]


