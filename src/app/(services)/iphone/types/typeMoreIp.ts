export type MoreIpProps = {
    idFlex: IdFlexProps[];
    colorProps: ColorProps[];
    iconProps: IconProps[];
    textProps: TextProps[];
    linkProps: LinkProps[];
    imgProps: ImgProps[];
    padProps: PadProps[];
    marProps: MarProps[];
}

type IdFlexProps = {
    id: number;
    flex: string;
    activatePad?: boolean;
    activateMar?: boolean;
}

type ColorProps = {
    bgColor: string
    colorText: string;
}

type IconProps = {
    iconW: number;
    iconH: number;
}

type TextProps = {
    title: string;
    weigthTitle?: number;
    textCard: string;
    weightCardText: string;
    widthCardText: number;
}

type LinkProps = {
    mainLink: string;
    addLink?: string;
    addLinkText?: string;
}

type ImgProps = {
    img: any;
    imgH: number | string; 
    imgW: number | string;
}

type PadProps = {
    pad?: number;
    padT?: number;
    padRight?: number;
    padBotto?: number;
    padLeft?: number;
}

type MarProps = {
    mar?: number
    marT?: number;
    marRight?: number;
    marBotto?: number;
    marLeft?: number;
}