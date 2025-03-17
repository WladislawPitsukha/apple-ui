import { ProductProps, ProductPropsHeadLink, ProductPropsImg } from "@/types/typeProductProps";
import { ProductArtProps } from "@/types/typeProductArt";
import dynamic from "next/dynamic";
import { IconType } from "react-icons";

export type ProIphoneProps = {
    images: ProductPropsImg;
    id: number;
    head: ProductPropsHead;
    body: ProductPropsBody;
}

type ProductPropsHead = {
    typeSelling: boolean;
    model: string;
    modelPhrase: string;
    price: number;
    links: ProductPropsHeadLink;
}

type ProductPropsBody = {
    display: ProductPropsDisplay;
    dynamic: ProductPropsDinamic;
    sos: ProductPropsSos;
    camera: ProductPropsCamera;
    actMode: ProductPropsActMode;
    batery: ProductPropsBatery;
    chip: ProductPropsChip;
    recognizer: ProductPropsRecognizer;
    mobInter: ProductPropsMobInter;
}

export type PropsNull = {
    obj?: boolean;
}

export type ProductPropsActMode = PropsNull & {
    icon: IconType;
    text?: string | null;
}

export type ProductPropsDisplay = ProductPropsSos & PropsNull & {
    verMainDisp: number | null;
    verAddDisp: number | null;
}

export type ProductPropsDinamic = ProductPropsActMode & PropsNull  & {
    verDinamic: string | null;
    advan: string | null;
}

export type ProductPropsSos = ProductPropsActMode & PropsNull  & {
    firAdvat?: string | null;
    secAdvat?: string | null;
    thiAdvat?: string | null;
}

export type ProductPropsCamera = ProductPropsSos & ProductPropsSos & {
    titleType: string | null;
    pixels: number | null;
    pixelsType?: string | null;
    titleCamera?: string | null;
}

export type ProductPropsBatery = ProductPropsActMode & PropsNull  & {
    timeWork: number | null;
}

export type ProductPropsChip = ProductPropsActMode & PropsNull  & {
    verChip: number | null;
    verCore?: number | null;
}

export type ProductPropsRecognizer = ProductPropsActMode & PropsNull  & {
    typeID: string | null;
}

export type ProductPropsMobInter = ProductPropsActMode & PropsNull  & {
    typeSpeed: string | null;
    verCellular: number | null;
}