import Image1 from "@/assets/img/iphone/image1.png";
import Image2 from "@/assets/img/iphone/image2.png";
import Image3 from "@/assets/img/iphone/image3.png";

export type CardSectProps = {
    id: number;
    flexDir: string;
    update?: string;
    model: string | any;
    title: string;
    widthTitle: string;
    price: number;
    priceMonth: number;
    period: number;
    buyLink: string;
    learnLink: string;
    img: any;
    imgWidth?: number | string;
    imgHeight?: number | string;
    textColor: string;
    fonColor: string;
    gapNum?: number;
    padTop: number;
    padBut: number;
}

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
        img: Image1,
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
        img: Image2,
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
        img: Image3,
        imgHeight: "830px",
        imgWidth: "494px",
        textColor: "black",
        fonColor: "cus-light-white",
        gapNum: 24,
        padTop: 0,
        padBut: 0,
    }
]