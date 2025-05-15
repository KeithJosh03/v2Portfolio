import {
email,
github,
googlechat,
msteams,
linkedin
} from '@/public/contacts';


export interface Contacts {
  title: string;
  text?: string;
  url?:string;
  icons: {
    src: string;
    width: number;
    height: number;
    blurDataURL: string | any;
    blurWidth: number | any;
    blurHeight: number | any;
  }[];
}


export const contacts:Contacts[] = [
    {
        title:'Email',
        text:'kitjuswa0304@gmail.com',
        icons:email
    },
        {
        title:'GitHub',
        url:'https://github.com/KeithJosh03',
        icons:github
    },
    {
        title:'Google Chat',
        text:'kitjuswa0304@gmail.com',
        icons:googlechat
    },
        {
        title:'MSTeams',
        text:'live:.cid.9d1ebb8d4cbcaea5',
        icons:msteams
    },
        {
        title:'Linkedin',
        url:'linkedin.com/in/keith-joshua-salaver',
        icons:linkedin
    }
]