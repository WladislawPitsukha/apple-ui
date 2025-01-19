import Image1 from "@/assets/img/iphone/waySave1.png";
import Image3 from "@/assets/img/iphone/waySave3.png";

import Partner1 from "@/assets/img/iphone/partner1.png";
import Partner2 from "@/assets/img/iphone/partner2.png";
import Partner3 from "@/assets/img/iphone/partner3.png";

export type WaySaveProps = {
    id?:number;
    flex: string;
    descTitle: string;
    descText: string;
    marTop: string;
    marX: string;
    maxWidth: number;
    link: string;
    linkText: string;
    img?: any;
    imgSize?: string;
    partners?: PartnersProps[];
}

export type PartnersProps = {
    id?: number;
    img: any;
    text: string;
    price?: number;
}

export const arrWaySave: WaySaveProps[] = [
    {
        id: 1,
        flex: "col",
        descTitle: "Trade in your current phone for credit toward a new one.",
        descText: "Get $200-$600 in credit when you trade in iPhone 11 or higher and upgrade to iPhone 14 or iPhone 14 Pro.",
        marTop: "66px",
        marX: "370px",
        maxWidth: 640,
        link: "",
        linkText: "Learn more",
        img: Image1,
        imgSize: "auto"
    },
    {
        id: 2,
        flex: "col",
        descTitle: "Save up to $800 with select carrier deals at Apple.8",
        descText: "Get the carrier deals you love and save on a new iPhone when you trade in and purchase right here at Apple.",        marTop: "51px",
        marX: "40px",
        maxWidth: 585,
        link: "",
        linkText: "Find your deal",
        imgSize: "auto",
        partners: [
            {
                id: 1,
                img: Partner1,
                text: "Get up to $800 credit after trade-in",
            },
            {
                id: 2,
                img: Partner2,
                text: "Get up to $400 credit after trade-in",
            },
            {
                id: 3,
                img: Partner3,
                text: "Get up to $800 credit after trade-in",
            },
        ],
    },
    {
        id: 3,
        flex: "col",
        descTitle: "Get 3% Daily Cash back with Apple Card.",
        descText: "And pay for your new iPhone over 24 months, interest‑free when you choose to check out with Apple Card Monthly Installments.",
        marTop: "52px",
        marX: "79.5px",
        maxWidth: 459,
        link: "",
        linkText: "Learn more",
        img: Image3,
        imgSize: "auto",
    },
    {
        id: 4,
        flex: "col",
        descTitle: "Why Apple is the best place to buy iPhone.",
        descText: "You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier, and get set up quickly. You can also chat with a Specialist anytime.",
        marTop: "0px",
        marX: "315px",
        maxWidth: 500,
        link: "",
        linkText: "Learn more",
    },
]