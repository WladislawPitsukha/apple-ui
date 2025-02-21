import { IconType } from "react-icons";


export type ProductProps = {
    images: ProductPropsImg;
    id: number;
    head: ProductPropsHead;
    body: ProductPropsBody;
}

type ProductPropsImg = {
    img1?: any | null;
    img2?: any | null;
    img3?: any | null;
    img4?: any | null;
}

type ProductPropsHead = {
    versionProduct?: string;
    title: string;
    model: string;
    price: number;
    links: ProductPropsHeadLink;
}

type ProductPropsHeadLink = {
    linkFirst: string;
    linkSecond: string;
}

type ProductPropsBody = {
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

type ProductPropsBodyCore1 = {
    upText1: boolean;
    coreVer1: number;
    coreVer1Text: string;
}

type ProductPropsBodyCore2 = {
    upText2: boolean;
    coreVec2: number;
    coreVec2Text: string;
}

type ProductPropsBodyMemory = {
    memoryImg: IconType;
    memoryText: number;
}

type ProductPropsBodyStorage = {
    storageTitle: number;
    storageText: string;
}

type ProductPropsBodyBatery = {
    bateryImg: IconType;
    bateryText: string;
}

type ProductPropsBodyCamera = {
    cameraImg: IconType;
    cameraResolution: number;
}

type ProductPropsBodyVers = {
    versionDis?: string;
    verAddNum?: string; 
    versionAddDis: string;
}

type ProductPropsBodyChip = {
    chipImg: IconType;
    chipText: string;
    chipAddText?: string
}

type ProductPropsBodyAudio = {
    audioImg: IconType;
    audioText: string;
}

type ProductPropsBodyWeight = {
    weightNum: number;
    weightAddNum?: number;
}

type ProductPropsBodyTouch = {
    touchImg: any;
    touchText: string;
}