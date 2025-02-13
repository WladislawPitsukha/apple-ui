import { FlexOffersMainSet } from "../types/typeFlexOffers";

import { BsBoxSeam } from "react-icons/bs";
import { BiSolidChat } from "react-icons/bi";
import { AiOutlineDollar } from "react-icons/ai";
import { SiVectorworks } from "react-icons/si";

export const arrFlexOffers: FlexOffersMainSet[] = [
    {
        id: 1,
        icon: BsBoxSeam,
        text: {
            title: "Fast, free delivery",
            textCard: "Or pick up available items at an Apple Store.",
        },
        link: "",
    },
    {
        id: 2,
        icon: BiSolidChat,
        text: {
            title: "Pay monthly at 0% APR",
            textCard: "You can pay over time when you choose to check out with Apple Card Monthly Installments.†",
        },
        link: "",
    },
    {
        id: 3,
        icon: AiOutlineDollar,
        text: {
            title: "Get help buying",
            textCard: "Have a question? Call a Specialist or chat online. ",
            addTextCard: "Call 1-800-MY-APPLE."
        },
        link: "",
    },
    {
        id: 4,
        icon: SiVectorworks,
        text: {
            title: "Make them yours",
            textCard: "Engrave your AirPods with your initials or favorite emoji — free. Only at Apple.",
        },
        link: "",
    },
]