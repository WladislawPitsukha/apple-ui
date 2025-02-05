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