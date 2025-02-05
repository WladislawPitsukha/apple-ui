import ImageCard1 from "@/assets/img/iphone/image1.png";
import ImageCard2 from "@/assets/img/iphone/image2.png";
import ImageCard3 from "@/assets/img/iphone/image3.png";

import { CardSectProps } from "../../types/typeCardSect";

export const arrCardSect: CardSectProps[] = [
    {
        id: 1,
        flexDir: "col",
        update: "New",
        model: "Iphone 14",
        title: "Two great sizes. Now with a splash of yellow.",
        widthTitle: "270px",
        price: 729,
        priceMonth: 33.29,
        period: 24,
        buyLink: "",
        learnLink: "",
        img: ImageCard1,
        imgHeight: "496px",
        imgWidth: "981px",
        textColor: "black",
        fonColor: "white",
        gapNum: 24,
        padTop: 14,
        padBut: 10,
    },
    {
        id: 2,
        flexDir: "col",
        model: "Iphone 14 Pro",
        title: "Pro. Beyond.",
        widthTitle: "600px",
        price: 999,
        priceMonth: 41.62,
        period: 24,
        buyLink: "",
        learnLink: "",
        img: ImageCard2,
        imgHeight: "393px",
        imgWidth: "961px",
        textColor: "white",
        fonColor: "black",
        gapNum: 24,
        padTop: 14,
        padBut: 0,
    },
    {
        id: 3,
        flexDir: "row",
        model: "Iphone SE",
        title: "Love the power. Love the price.",
        widthTitle: "250px",
        price: 429,
        priceMonth: 17.87,
        period: 24,
        buyLink: "",
        learnLink: "",
        img: ImageCard3,
        imgHeight: "830px",
        imgWidth: "494px",
        textColor: "black",
        fonColor: "cus-light-white",
        gapNum: 24,
        padTop: 0,
        padBut: 0,
    }
]