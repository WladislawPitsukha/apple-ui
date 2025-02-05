export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export interface Props {
    flex: FlexDirection;
    content: string;
}

export type FeatAccProps = {
    id: number;
    flex: string;
    content: string;
    title: string;
    widthText: number;
    textCard?: string;
    linkText1?: string;
    link1: string;
    linkText2?: string;
    link2: string;
    padTop?: number;
    padBottom?: number;
    padRight?: number;
    padLeft?: number;
    img: any;
    imgTypeMar?: string;
    imgMar?: number;
}