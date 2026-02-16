import {
    Gizmo,
    Honey,
    OSNET,
    Carrent,
    SmoothCasting
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
    github?:string;
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
            projectname: "Juan POS",
            desc: "Developed a Pharmacy Sales Optimization (PSO) system for small local pharmacies to improve customer service efficiency and ensure accurate sales and receipt management. Designed a streamlined transaction workflow to reduce sales complications and implemented automated receipt generation. Collaborated closely with clients to understand their operational needs and address existing challenges.",
            stacks: ["Bootstrap", "Javascript", "jQuery", "PHP", "MySQL", "Google Cloud","Ajax"],
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
            projectname:"Joinhoney Extension / PayPal Honey",
            desc:"Maintained and enhanced the HoneyJoin browser extension, improving user experience across various e-commerce websites by developing affiliate web scraping features that enabled users to automatically access savings and discount opportunities.",
            stacks:[
            "Javascript",
            "jQuery",
            "RegEx",
            "Chrome Extension",
            "Typescript"
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
            desc:"As a Full Stack Web Developer, I designed and maintained an internal HR and authentication system for company employees, implementing secure login functionality, time tracking features, and role-based job title management.",
            stacks:[
            "Bootstrap",
            "Javascript",
            "Axios",
            "PHP",
            "CodeIgniter",
            "MySQL",
            "ReactJS"
            ],
            image:OSNET
        }
    },
]


export const project: PortfolioData [] = [
    {
        info:{
            projectname:'SMOOTH CASTING TACKLESHOP',
            github:"https://github.com/KeithJosh03/tackleshop",
            desc: "Personal Project: E-Commerce Platform for Tackle Shop Equipment",
            stacks:[
            "Tailwind",
            "NextJS",
            "Laravel",
            "MySQL"
            ],
            image:SmoothCasting
        }
    }
]
