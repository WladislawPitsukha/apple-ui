import { CiDollar } from "react-icons/ci";
import { TbMessages } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa6";

export type DescSectProps = {
    id?: number;
    Icon: any,
    title: string,
    text: string,
    linkText: string;
    link: string;
}

export const arrDescSect:DescSectProps[] = [
    {
        id: 1,
        Icon: FaBoxOpen,
        title: "Fast delivery or pickup",
        text: "Enjoy two‑hour delivery from an Apple Store, free delivery, or easy pickup.",
        linkText: "Learn more",
        link: ""
    },
    {
        id: 2,
        Icon: CiDollar,
        title: "Pay monthly at 0% APR",
        text: "You can pay over time when you choose to check out with Apple Card Monthly Installments.*",
        linkText: "Learn more",
        link: ""
    },
    {
        id: 3,
        Icon: TbMessages,
        title: "Get help buying",
        text: "Have a question? Call a Specialist or chat online. Call 1‑800-MY‑APPLE.",
        linkText: "Contact us",
        link: ""
    },
]