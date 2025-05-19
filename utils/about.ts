import { 
    computerset,
    student 
} from "@/public/about";

import type { StaticImageData } from "next/image";


export interface About {
    title:string;
    image: StaticImageData;
}


export const about: About[] = [
  { 
    title:'ComputerSet',
    image: computerset 
  },
  { 
    title:'Student',
    image: student 
  },
];
