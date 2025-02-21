import { IconType } from "react-icons";

export type DescSectMainSet = {
    id?: number;
    icon: IconType,
    text: DescSecText
    link: DescSecLink;
}

type DescSecText = {
    title: string,
    mainText: string,
}

type DescSecLink = {
    linkText: string;
    mainLink: string;
}