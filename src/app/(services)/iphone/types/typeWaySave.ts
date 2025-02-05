export type WaySaveProps = {
    id?:number;
    flex: string;
    descTitle: string;
    descText: string;
    marTop: string;
    marX: string;
    maxWidth: number;
    link: string;
    linkText: string;
    img?: any;
    imgSize?: string;
    partners?: PartnersProps[];
}

export type PartnersProps = {
    id?: number;
    img: any;
    text: string;
    price?: number;
}