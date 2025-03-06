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
    versionProduct?: string;
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

export type ProductPropsDisplay = ProductPropsSos & {
    verMainDisp: number;
    verAddDisp: number;
}

export type ProductPropsDinamic = ProductPropsActMode & {
    verDinamic: string;
    advan: string;
}

export type ProductPropsSos = ProductPropsActMode & {
    firAdvat?: string;
    secAdvat?: string;
    thiAdvat?: string;
}

export type ProductPropsCamera = ProductPropsSos & ProductPropsSos & {
    titleType: string;
    pixels: number;
    pixelsType?: string;
    titleCamera?: string;
}

export type ProductPropsActMode = {
    icon?: IconType;
    text?: string;
}

export type ProductPropsBatery = ProductPropsActMode & {
    timeWork: number;
}

export type ProductPropsChip = ProductPropsActMode & {
    verChip: number;
    verCore?: number;
}

export type ProductPropsRecognizer = ProductPropsActMode & {
    typeID: string;
}

export type ProductPropsMobInter = ProductPropsActMode & {
    typeSpeed: string;
    verCellular: number;
}