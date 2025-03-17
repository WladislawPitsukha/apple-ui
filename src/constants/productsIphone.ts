import { ProIphoneProps } from "@/app/(services)/iphone/types/typeProductsIphone";

import IphonePro14_1 from "@/assets/img/iphone/iphone_14Pro/Iphone 14 Pro_1.png"
import IphonePro14_2 from "@/assets/img/iphone/iphone_14Pro/Iphone 14 Pro_2.png"
import IphonePro14_3 from "@/assets/img/iphone/iphone_14Pro/Iphone 14 Pro_3.png"
import IphonePro14_4 from "@/assets/img/iphone/iphone_14Pro/Iphone 14 Pro_4.png"

import Iphone14_1 from "@/assets/img/iphone/iphone_14/iPhone_14_1.png"
import Iphone14_2 from "@/assets/img/iphone/iphone_14/iPhone_14_2.png"
import Iphone14_3 from "@/assets/img/iphone/iphone_14/iPhone_14_3.png"
import Iphone14_4 from "@/assets/img/iphone/iphone_14/iPhone_14_4.png"

import Iphone15_1 from "@/assets/img/iphone/iphone_15/iPhone_15_1.png"
import Iphone15_2 from "@/assets/img/iphone/iphone_15/iPhone_15_2.png"
import Iphone15_3 from "@/assets/img/iphone/iphone_15/iPhone_15_3.png"
import Iphone15_4 from "@/assets/img/iphone/iphone_15/iPhone_15_4.png"
import Iphone15_5 from "@/assets/img/iphone/iphone_15/iPhone_15_5.png"

import Iphone16_1 from "@/assets/img/iphone/iphone_16/iPhone_16_1.png"
import Iphone16_2 from "@/assets/img/iphone/iphone_16/iPhone_16_2.png"
import Iphone16_3 from "@/assets/img/iphone/iphone_16/iPhone_16_3.png"

import { PiDeviceMobileCameraLight, PiPokerChipLight } from "react-icons/pi";
import { TbSos } from "react-icons/tb";
import { TbCameraMinus } from "react-icons/tb";
import { GrRun } from "react-icons/gr";
import { FaBatteryFull } from "react-icons/fa6";
import { PiIdentificationBadgeLight } from "react-icons/pi";
import { HiSignal } from "react-icons/hi2";
import { MdDirectionsRun } from "react-icons/md";
import { BsDisplayport } from "react-icons/bs";

export const arrProductsIphone: ProIphoneProps[] = [
    {
        images: {
            img1: Iphone14_1,
            img2: Iphone14_2,
            img3: Iphone14_3,
            img4: Iphone14_4,
        },
        id: 1,
        head: {
            typeSelling: false,
            model: "iPhone 14",
            modelPhrase: "A total powerhouse.",
            price: 799,
            links: {
                linkFirst: "",
                linkSecond: "",
            }
        },
        body: {
            display: {
                icon: BsDisplayport,
                verAddDisp: 6.7,
                verMainDisp: 6.1,
                firAdvat: "Super Retina XDR display3",
                secAdvat: null,
                thiAdvat: null,
            },
            dynamic: {
                icon: PiDeviceMobileCameraLight,
                obj: true,
                verDinamic: null,
                advan: null,
            },
            sos: {
                icon: TbSos,
                firAdvat: "Emergency SOS via satellite4",
                secAdvat: "Emergency SOS",
                thiAdvat: "Crash Detection5",
            },
            camera: {
                icon: TbCameraMinus,
                titleType: "Advanced dual-camera system",
                pixels: 12,
                pixelsType: null,
                titleCamera: null,
                firAdvat: "Photonic Engine for incredible detail and color",
                secAdvat: "Autofocus on TrueDepth front camera",
            },
            actMode: {
                icon: GrRun,
                text: "Action mode smooths out shaky handheld videos",
            },
            batery: {
                icon: FaBatteryFull,
                timeWork: 26,
            },
            chip: {
                icon: PiPokerChipLight,
                verChip: 15,
            },
            recognizer: {
                icon: PiIdentificationBadgeLight,
                typeID: "Face ID",
            },
            mobInter: {
                icon: HiSignal,
                typeSpeed: "Superfast",
                verCellular: 7
            },
        }
    },
    
    {
        images: {
            img1: IphonePro14_1,
            img2: IphonePro14_2,
            img3: IphonePro14_3,
            img4: IphonePro14_4,
        },
        id: 2,
        head: {
            typeSelling: true,
            model: "iPhone 14 Pro",
            modelPhrase: "The ulmate Union",
            price: 999,
            links: {
                linkFirst: "",
                linkSecond: "",
            },
        },
        body: {
            display: {
                icon: BsDisplayport,
                verMainDisp: 6.7,
                verAddDisp: 6.1,
                firAdvat: "Super Retina XDR display3",
                secAdvat: "ProMotion technology",
                thiAdvat: "Always-On display"
            },
            dynamic: {
                icon: PiDeviceMobileCameraLight,
                verDinamic: "Dynamic Island",
                advan: "A new way to interact with iPhone",
            },
            sos: {
                icon: TbSos,
                firAdvat: "Emergency SOS via satellite4",
                secAdvat: "Emergency SOS",
                thiAdvat: "Crash Detection5",
            },
            camera: {
                icon: TbCameraMinus,
                titleType: "Pro camera system",
                pixels: 48,
                pixelsType: "Ultra Wide",
                titleCamera: "Telephoto",
                firAdvat: "Photonic Engine for incredible detail and color",
                secAdvat: "Autofocus on TrueDepth front camera",
            },
            actMode: {
                icon: GrRun,
                text: "Action mode smooths out shaky handheld videos",
            },
            batery: {
                icon: FaBatteryFull,
                timeWork: 29,
            },
            chip: {
                icon: PiPokerChipLight,
                verChip: 16,
            },
            recognizer: {
                icon: PiIdentificationBadgeLight,
                typeID: "Face ID",
            },
            mobInter: {
                icon: HiSignal,
                typeSpeed: "Superfast",
                verCellular: 7
            },
        },
    },
    {
        images: {
            img1: Iphone15_1,
            img2: Iphone15_2,
            img3: Iphone15_3,
            img4: Iphone15_4,
            img5: Iphone15_5,
        },
        id: 3,
        head: {
            typeSelling: true,
            model: "iPhone 15",
            modelPhrase: "Serious power. Serious value.",
            price: 799,
            links: {
                linkFirst: "",
                linkSecond: "",
            }
        },
        body: {
            display: {
                icon: BsDisplayport,
                verAddDisp: 6.7,
                verMainDisp: 6.1,
                firAdvat: "Super Retina XDR display3",
                secAdvat: null,
                thiAdvat: null,
            },
            dynamic: {
                icon: PiDeviceMobileCameraLight,
                obj: true,
                verDinamic: null,
                advan: null,
            },
            sos: {
                icon: TbSos,
                firAdvat: null,
                secAdvat: "Emergency SOS",
                thiAdvat: null,
            },
            camera: {
                icon: TbCameraMinus,
                titleType: "Dual‑camera system",
                pixels: 12,
                pixelsType: "Ultra Wide",
                titleCamera: null,
                firAdvat: null,
                secAdvat: "TrueDepth front camera",
            },
            actMode: {
                icon: MdDirectionsRun,
                obj: true,
            },
            batery: {
                icon: FaBatteryFull,
                timeWork: 32,
            },
            chip: {
                icon: PiPokerChipLight,
                verChip: 16,
            },
            recognizer: {
                icon: PiIdentificationBadgeLight,
                typeID: "Face ID",
            },
            mobInter: {
                icon: HiSignal,
                typeSpeed: "Superfast",
                verCellular: 8
            },
        },
    },
    {
        images: {
            img1: Iphone16_1,
            img2: Iphone16_2,
            img3: Iphone16_3,
        },
        id: 4,
        head: {
            typeSelling: false,
            model: "iPhone 16",
            modelPhrase: "A total powerhouse.",
            price: 899,
            links: {
                linkFirst: "",
                linkSecond: "",
            }
        },
        body: {
            display: {
                icon: BsDisplayport,
                verAddDisp: 6.9,
                verMainDisp: 6.5,
                firAdvat: "Super Retina XDR display",
                secAdvat: "ProMotion technology",
                thiAdvat: "Always-On display",
            },
            dynamic: {
                icon: PiDeviceMobileCameraLight,
                verDinamic: "Dynamic Island",
                advan: "A new way to interact with iPhone",
            },
            sos: {
                icon: TbSos,
                firAdvat: "Emergency SOS via satellite",
                secAdvat: "Emergency SOS",
                thiAdvat: "Crash Detection",
            },
            camera: {
                icon: TbCameraMinus,
                titleType: "Pro camera system",
                pixels: 48,
                pixelsType: "Ultra Wide",
                titleCamera: "Telephoto",
                firAdvat: "Photonic Engine for incredible detail and color",
                secAdvat: "Autofocus on TrueDepth front camera",
            },
            actMode: {
                icon: MdDirectionsRun,
                obj: true,
            },
            batery: {
                icon: FaBatteryFull,
                timeWork: 30,
            },
            chip: {
                icon: PiPokerChipLight,
                verChip: 16,
            },
            recognizer: {
                icon: PiIdentificationBadgeLight,
                typeID: "Face ID",
            },
            mobInter: {
                icon: HiSignal,
                typeSpeed: "Superfast",
                verCellular: 9
            },
        }
    }
]