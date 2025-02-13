import { CardPodMainSet } from "../types/typeCardPod";

import ImageFon1 from "@/assets/img/airpods/airpod1.png"

import ImageFon2 from "@/assets/img/airpods/airpod2.png"
import ImageFon3 from "@/assets/img/airpods/airpod3.png"
import ImageFon4 from "@/assets/img/airpods/airpod4.png"

export const arrCardPod: CardPodMainSet[] = [
    {
        head: {
            id: 1,
            zIndex: 10,
            bgColor: "black",
            textColor: "white",
            textSize: 108,
            heightBlock: 820,
        },
        text: {
            mainTitle: "AirPods Pro",
            addText: "",
            price: 249,
        },
        link: {
            mainLink: "",
            addLink: ""
        },
        image: {
            img: ImageFon1,
            imgH: "auto",
            imgW: "auto",
            imgFon: ImageFon1,
            imgFonBool: true,
        },
    },
    {
        head: {
            id: 2,
            zIndex: 20,
            bgColor: "white",
            textColor: "custom-dark",
            textSize: 110,
            heightBlock: 680,
        },
        text: {
            mainTitle: "AirPods",
            addText: "3rd",
            price: 169,
        },
        link: {
            mainLink: "",
            addLink: ""
        },
        image: {
            img: ImageFon2,
            imgH: "auto",
            imgW: "auto",
        },
    },
    {
        head: {
            id: 3,
            zIndex: 20,
            bgColor: "white",
            textColor: "custom-dark",
            textSize: 110,
            heightBlock: 680,
        },
        text: {
            mainTitle: "AirPods",
            addText: "2nd",
            price: 129,
        },
        link: {
            mainLink: "",
            addLink: ""
        },
        image: {
            img: ImageFon3,
            imgH: "auto",
            imgW: "auto",
        },
    },
    {
        head: {
            id: 4,
            zIndex: 0,
            bgColor: "white",
            textColor: "custom-dark",
            textSize: 160,
            heightBlock: 746,
        },
        text: {
            mainTitle: "AirPods Max",
            addText: "",
            price: 549,
        },
        link: {
            mainLink: "",
            addLink: ""
        },
        image: {
            img: ImageFon4,
            imgH: 535,
            imgW: 592,
        },
    },
]