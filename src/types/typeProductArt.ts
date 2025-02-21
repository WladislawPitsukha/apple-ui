export type ProductArtProps = {
    id: number;
    arr: string[];
    text: ProductArt;
    model?: string;
    img: any;
}

type ProductArt = {
    title: string;
    textObj: string;
    textColor: string;
}