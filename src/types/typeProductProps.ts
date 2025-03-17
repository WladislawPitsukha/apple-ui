import { IconType } from "react-icons";


export type ProductProps = {
    images: ProductPropsImg;
    id: number;
    head: ProductPropsHead;
    body: ProductPropsBody;
}

export type ProductPropsImg = {
    img1?: any | null;
    img2?: any | null;
    img3?: any | null;
    img4?: any | null;
    img5?: any | null;
    img6?: any | null;
    img7?: any | null;
    img8?: any | null;
}

export type ProductPropsHead = {
    versionProduct?: string;
    title: string;
    model: string;
    price: number;
    links: ProductPropsHeadLink;
}

export type ProductPropsHeadLink = {
    linkFirst: string;
    linkSecond: string;
}

export type ProductPropsBody = {
    vers: ProductPropsBodyVers;
    chip: ProductPropsBodyChip;
    core1: ProductPropsBodyCore1;
    core2: ProductPropsBodyCore2;
    memory: ProductPropsBodyMemory;
    storage: ProductPropsBodyStorage;
    batery: ProductPropsBodyBatery;
    camera: ProductPropsBodyCamera;
    audio: ProductPropsBodyAudio;
    weight: ProductPropsBodyWeight;
    touch: ProductPropsBodyTouch;
}

export type ProductPropsBodyCore1 = {
    upText1: boolean;
    coreVer1: number;
    coreVer1Text: string;
}

export type ProductPropsBodyCore2 = {
    upText2: boolean;
    coreVec2: number;
    coreVec2Text: string;
}

export type ProductPropsBodyMemory = {
    memoryImg: IconType;
    memoryText: number;
}

export type ProductPropsBodyStorage = {
    storageTitle: number;
    storageText: string;
}

export type ProductPropsBodyBatery = {
    bateryImg: IconType;
    bateryText: string;
}

export type ProductPropsBodyCamera = {
    cameraImg: IconType;
    cameraResolution: number;
}

export type ProductPropsBodyVers = {
    versionDis?: string;
    verAddNum?: string; 
    versionAddDis: string;
}

export type ProductPropsBodyChip = {
    chipImg: IconType;
    chipText: string;
    chipAddText?: string
}

export type ProductPropsBodyAudio = {
    audioImg: IconType;
    audioText: string;
}

export type ProductPropsBodyWeight = {
    weightNum: number;
    weightAddNum?: number;
}

export type ProductPropsBodyTouch = {
    touchImg: any;
    touchText: string;
}