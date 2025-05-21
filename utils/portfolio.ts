import {
    Gizmo,
    Honey,
    OSNET,
    Carrent
} from '@/public/portofolio';

import { StaticImageData } from 'next/image';

type Experience = {
    title:string;
    company:string;
    StartDate:Date;
    EndDate:Date;
    url:string;
}

type Info = {
    projectname:string;
    desc:string
    git?:string;
    stacks:string[];
    image:StaticImageData;
}

export interface PortfolioData {
    experience?:Experience;
    info:Info;
}

export const experience: PortfolioData[] = [
    {
        experience:{
            title:'Junior Programmer',
            company:'GizmoTndg',
            StartDate: new Date("2022-07"),
            EndDate: new Date("2022-10"),
            url: "https://www.juanpos.com/",
        },
        info:{
            projectname: "JuanPOS",
            desc: "PSO for small local Pharmacies Use, for efficient customer services and receipt assurance of good quality drugs.",
            stacks: ["Bootstrap", "Javascript", "jQuery", "PHP", "MySQL", "Google Cloud"],
            image:Gizmo
        }
    },
    {
        experience:{
            title:'Junior Programmer',
            company:"AwesomeOS",
            StartDate: new Date("2022-10"),
            EndDate: new Date("2024-11"),
            url:"https://www.joinhoney.com/",
        },
        info:{
            projectname:"joinhoney Extension",
            desc:"Maintained the HoneyJoin Extension project, aimed at enhancing the user experience on various e-commerce websites",
            stacks:[
            "Javascript",
            "jQuery",
            "RegEx",
            "Chrome Extension"
            ],
            image:Honey
        }
    },
    {
        experience:{
            title:'Junior Programmer',
            company:"AwesomeOS",
            StartDate: new Date("2022-10"),
            EndDate: new Date("2024-11"),
            url:"https://awesomeos.org/",
        },
        info:{
            projectname:"OSNET",
            desc:"Full Stack Web Developer, Developed and maintained a login and HR system for company employees.",
            stacks:[
            "Bootstrap",
            "Javascript",
            "Axios",
            "PHP",
            "CodeIgniter",
            "MySQL"
            ],
            image:OSNET
        }
    },
]


export const project: PortfolioData [] = [
    {
        info:{
            projectname:'Carrent',
            git:"https://github.com/KeithJosh03/carrent",
            desc: "Personal project for Car Renting Website",
            stacks:[
            "Tailwind",
            "Javascript",
            "ReactJS",
            "NextJS",
            "Laravel",
            "MySQL"
            ],
            image:Gizmo
        }
    }
]
