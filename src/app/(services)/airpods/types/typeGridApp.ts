export type GridAppMainSet = {
    id: number
    image: GridAppImg;
    title: string;
    links: GridAppLinks;
    padding: GridAppPadding;
}

type GridAppPadding = {
    pad?: number | string;
    padTop?: number | string;
    padRight?: number | string;
    padBottom?: number | string;
    padLeft?: number | string;
}

type GridAppLinks = {
    infoLink: string;
    addLink: string;
}

type GridAppImg = {
    img: any | string;
    imgW?: number | string;
    imgH?: number | string;
}