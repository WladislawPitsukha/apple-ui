import CardImage1 from "@/assets/img/iphone/CardImage1.png";
import CardImage2 from "@/assets/img/iphone/CardImage2.png";
import CardImage3 from "@/assets/img/iphone/CardImage3.png";

import { FeatAccProps } from '../../types/typeFeatAcc';
import { links } from "@/utils/ProductArtArr";

export const arrFeatAcc: FeatAccProps[] = [
    {
        id: 1,
        flex: "row",
        content: "",
        title: "MagSafe",
        widthText: 185,
        textCard: "Snap on a magnetic case, wallet, or both. And get faster wireless charging.",
        linkText1: "Shop MagSafe accessories",
        link1: "",
        link2: "",
        padTop: 67,
        padLeft: 145,
        padRight: 98,
        img: CardImage1,
        imgTypeMar: "r",
        imgMar: 68
    },
    {
        id: 2,
        flex: "",
        content: "",
        title: "AirTag",
        widthText: 129,
        textCard: "Attach one to your keys. Put another in your backpack. If they’re misplaced, just use the Find My app.",
        linkText1: "Buy",
        link1: "",
        linkText2: "Learn more",
        link2: "",
        padRight: 145,
        img: CardImage2,
        imgTypeMar: "l",
        imgMar: 23,
    },
    {
        id: 3,
        flex: "col",
        content: "center",
        title: "Magic runs in the family.",
        widthText: 279,
        link1: "",
        link2: "",
        padTop: 45,
        padBottom: 43,
        img: CardImage3,
        imgTypeMar: "",
        imgMar: 0,
    },
]