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
  linux,
  chatgpt,
  cursor
} from '@/public/skillSVG';

import { StaticImageData } from 'next/image';

export type SkillProps = {
  name: string;
  icon: StaticImageData;
};

export interface SkillsListProps {
  position: string;
  skills: SkillProps[];
}

export const skills: SkillsListProps[] = [
  {
    position: "FrontEnd",
    skills: [
      { name: 'Bootstrap', icon: bootstrap },
      { name: 'Tailwind', icon: tailwind },
      { name: 'Javascript', icon: javascript },
      { name: 'jQuery', icon: jquery },
      { name: 'NextJS', icon: nextjs },
      { name: 'ReactJS', icon: reactjs },
    ],
  },
  {
    position: "BackEnd",
    skills: [
      { name: 'PHP', icon: php },
      { name: 'CodeIgniter', icon: codeigniter },
      { name: 'Laravel', icon: laravel },
      { name: 'MySQL', icon: mysql },
    ],
  },
  {
    position: "Others",
    skills: [
      { name: 'Google Cloud', icon: gc },
      { name: 'GitHub', icon: github },
      { name: 'VS Code', icon: visualstudio },
      { name: 'Xampp', icon: xampp },
      { name: 'Postman', icon: postman },
      { name: 'Linux', icon: linux },
      { name: 'ChatGPT', icon:chatgpt},
      { name: 'Cursor', icon:cursor}

    ],
  },
];

