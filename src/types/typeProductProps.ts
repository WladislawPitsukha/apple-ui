import { IconType } from "react-icons";

export type ProductProps = {
    img1?: any;
    img2?: any;
    img3?: any;
    id: number;
    head: ProductPropsHead;
    body: ProductPropsBody;
}

export type ProductPropsHead = {
    title: string;
    model: string;
    price: number;
    link1: string;
    link2: string;
}

export type ProductPropsBody = {
    versionDis?: string;
    versionAddDis: string;
    chipImg: IconType;
    chipText: string;
    upText1: boolean;
    coreVer1: number;
    coreVer1Text: string;
    upText2: boolean;
    coreVec2: number;
    coreVec2Text: string;
    memoryImg: IconType;
    memoryText: number;
    storageTitle: string;
    storageText: string;
    bateryImg: IconType;
    bateryText: string;
    cameraImg: IconType;
    cameraResolution: number;
    audioImg: IconType;
    audioText: string;
    weightNum: number;
    touchImg: any;
    touchText: string;
}