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
  gc
} from '@/public/skillSVG';



export interface Skills {
  title: string;
  icons: {
    src: string;
    width: number;
    height: number;
    blurDataURL: string | any;
    blurWidth: number | any;
    blurHeight: number | any;
  }[];
}

export interface FrontEndSkill {
  title: string;
  icons: {
    src: string;
    width: number;
    height: number;
    blurDataURL: string | any;
    blurWidth: number | any;
    blurHeight: number | any;
  }[];
}




export const frontend: FrontEndSkill[] = [
  {
    title: "FrontEnd",
    icons: [bootstrap,tailwind,javascript,jquery,reactjs,nextjs]
  },
  {
    title:"BackEnd",
    icons:[php,codeigniter,laravel,mysql]
  }
]

// Add Google MSTeams,GoogleChat,Xampp,GitHub for Others

export const skills: Skills[] = [
  {
    title: "Languages",
    icons: [javascript, php]
  },
  {
    title: "Front-End",
    icons: [tailwind, bootstrap, jquery, reactjs, nextjs]
  },
  {
    title: "Back-End",
    icons: [laravel, codeigniter]
  },
  {
    title: "Database",
    icons: [mysql]
  },
  {
    title: "Cloud",
    icons: [gc]
  }
]