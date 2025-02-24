import { IconType } from "react-icons";

export type FlexOffersMainSet = {
    id: number;
    icon: IconType;
    text: FlexOffersText;
    link: string;
}

type FlexOffersText = {
    title: string;
    textCard: string;
    addTextCard?: string;
}