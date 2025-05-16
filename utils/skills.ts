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



export interface Skills {
  position: string;
  icons: {
    src: string;
    width: number;
    height: number;
    blurDataURL: string | any;
    blurWidth: number | any;
    blurHeight: number | any;
  }[];
}

export const skills: Skills[] = [
  {
    position: "FrontEnd",
    icons: [bootstrap, tailwind,javascript ,jquery ,reactjs ,nextjs]
  },
  {
    position:"BackEnd",
    icons:[php ,codeigniter ,laravel ,mysql]
  },
  {
    position:"Others",
    icons:[gc ,github ,visualstudio ,xampp ,postman ,linux]
  }
]


