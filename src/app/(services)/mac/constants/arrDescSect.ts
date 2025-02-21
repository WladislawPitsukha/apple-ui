import { CiDollar } from "react-icons/ci";
import { TbMessages } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa6";
import { DescSectMainSet } from "../types/typeDescSect";

export const arrDescSect:DescSectMainSet[] = [
    {
        id: 1,
        icon: FaBoxOpen,
        text: {
            title: "Fast delivery or pickup",
            mainText: "Enjoy two‑hour delivery from an Apple Store, free delivery, or easy pickup.",
        },
        link: {
            linkText: "Learn more",
            mainLink: "",
        },
        
    },
    {
        id: 2,
        icon: CiDollar,
        text: {
            title: "Pay monthly at 0% APR",
            mainText: "You can pay over time when you choose to check out with Apple Card Monthly Installments.*",
        },
        link: {
            linkText: "Learn more",
            mainLink: ""
        },
    },
    {
        id: 3,
        icon: TbMessages,
        text: {
            title: "Get help buying",
            mainText: "Have a question? Call a Specialist or chat online. Call 1‑800-MY‑APPLE.",
        },
        link: {
            linkText: "Contact us",
            mainLink: ""
        },
    },
]