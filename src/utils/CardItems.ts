import { ICardItem } from "./interfaces/ICardItem";

import UXIcon from "../assets/svgs/UXIcon.svg";
import BlockChainIcon from "../assets/svgs/icon.svg";
import WebDevIcon from "../assets/svgs/WebDevIcon.svg";
import AppDevIcon from "../assets/svgs/AppDevIcon.svg";

export const CardItems: ICardItem[] = [
    {
        Name: "Web Development",
        Description: "We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.",
        ImageName: WebDevIcon,
    },
    {
        Name: "User experience & design",
        Description: "Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.",
        ImageName: UXIcon,
    },
    {
        Name: "Mobile app development",
        Description: "Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.",
        ImageName: AppDevIcon,
    },
    {
        Name: "Blockchain solutions",
        Description: "We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.",
        ImageName: BlockChainIcon,
    }
]
