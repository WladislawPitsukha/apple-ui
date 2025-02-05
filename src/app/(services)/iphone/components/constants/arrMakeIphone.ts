import MakeIp1 from "@/assets/img/iphone/makeIp1.png";
import MakeIp2 from "@/assets/img/iphone/makeIp2.png";

import { MakeIphone } from "../../types/typeMakeIp";

export const arrMakeIphone: MakeIphone[] = [
    {
        id: 1,
        flex: "col",
        width: "full",
        title: "iOS 16",
        textCard: "Personal is powerful.",
        padTop: 77,
        padBottom: 0,
        link: "",
        img: MakeIp1,
        imgWidth: "auto",
        imgHeight: "auto",
    },
    {
        id: 1,
        flex: "col",
        width: "auto",
        title: "Switching to iPhone is super simple.",
        textCard: "",
        padTop: 61,
        padBottom: 60,
        link: "",
        img: MakeIp2,
        imgWidth: 675,
        imgHeight: 357,
    },
];