import {
    Gizmo,
    Honey,
    OSNET,
    Carrent
} from '@/public/portofolio';

export interface PortfolioData {
    title: string;
    desc: string;
    url?: string;
    git?:string;
    stacks: string[];
    image: {
        src: string;
        width: number;
        height: number;
        blurDataURL: string | any;
        blurWidth: number | any;
        blurHeight: number | any;
    };
}


export const experiences: PortfolioData[] = [
    {
        title: "JuanPOS",
        desc: "PSO for small local Pharmacies Use, for efficient customer services and receipt assurance of good quality drugs.",
        url: "https://www.juanpos.com/",
        stacks: ["Bootstrap", "Javascript", "jQuery", "PHP", "MySQL", "Google Cloud"],
        image: {
          src: Gizmo.src,
          width: Gizmo.width,
          height: Gizmo.height,
          blurDataURL: Gizmo.blurDataURL,
          blurWidth:Gizmo.blurWidth,
          blurHeight:Gizmo.blurHeight
        }
    },
    {
        title:"joinhoney Extension",
        desc: "Maintained the HoneyJoin Extension project, aimed at enhancing the user experience on various e-commerce websites",
        url:"https://www.joinhoney.com/",
        stacks:[
            "Javascript",
            "jQuery",
            "RegEx",
            "Chrome Extension"
        ],
        image: {
            src: Honey.src,
            width: Honey.width,
            height: Honey.height,
            blurDataURL: Honey.blurDataURL,
            blurWidth: Honey.blurWidth,
            blurHeight: Honey.blurHeight
        }
    },
    {
        title:"OSNET",
        desc: "Full Stack Web Developer, Developed and maintained a login and HR system for company employees.",
        url:"https://awesomeos.org/",
        stacks:[
            "Bootstrap",
            "Javascript",
            "Axios",
            "PHP",
            "CodeIgniter",
            "MySQL"
        ],
        image: {
            src: OSNET.src,
            width: OSNET.width,
            height: OSNET.height,
            blurDataURL: OSNET.blurDataURL,
            blurWidth: OSNET.blurWidth,
            blurHeight: OSNET.blurHeight
        }
    }
]


export const project: PortfolioData [] = [
    {
        title:"Carrent",
        desc: "Personal project for Car Renting Website",
        git:"https://github.com/KeithJosh03/carrent",
        stacks:[
            "Tailwind",
            "Javascript",
            "ReactJS",
            "NextJS",
            "Laravel",
            "MySQL"
        ],
        image: {
            src: Carrent.src,
            width: Carrent.width,
            height: Carrent.height,
            blurDataURL: Carrent.blurDataURL,
            blurWidth: Carrent.blurWidth,
            blurHeight: Carrent.blurHeight
        }
    }
]