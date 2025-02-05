import { IconType } from "react-icons"
import { FaBox } from "react-icons/fa6";
import { AiOutlineDollar } from "react-icons/ai";
import { HiMiniUserGroup } from "react-icons/hi2";

import { OfferIphone } from "../../types/typeOfferIphone";

export const arrOfferIphone: OfferIphone[] = [
    {
        id: 1,
        icon: FaBox,
        title: "Fast, free delivery",
        cardText: "Or pick up available items at an Apple Store.",
        link: "",
        linkText: "Learn more",
    },
    {
        id: 2,
        icon: AiOutlineDollar,
        title: "Pay monthly at 0% APR",
        cardText: "You can pay over time when you choose to check out with Apple Card Monthly Installments.",
        link: "",
        linkText: "Learn more",
    },
    {
        id: 3,
        icon: HiMiniUserGroup,
        title: "Get help buying",
        cardText: "Have a question? Call a Specialist or chat online. Call 1‑800‑MY‑APPLE.",
        link: "",
        linkText: "Learn more",
    }
]