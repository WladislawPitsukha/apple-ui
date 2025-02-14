export type CardPodMainSet = {
    head: CardPodHead;
    text: CardPodTextSet;
    link: CardPodLink;
    image: CardPodImage;
}

type CardPodHead = {
    id: number;
    zIndex?: number;
    bgColor: string;
    textColor: string;
    textSize: number;
    heightBlock: number;
}

type CardPodTextSet = {
    mainTitle: string;
    addText?: string;
    price: number;
}

type CardPodLink = {
    mainLink: string;
    addLink: string;
}

type CardPodImage = {
    img?: any;
    imgH: number | string;
    imgW: number | string;
    imgFon?: any;
    imgFonBool?: boolean;
}