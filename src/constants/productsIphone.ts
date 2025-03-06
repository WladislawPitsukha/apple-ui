import { ProIphoneProps } from "@/app/(services)/iphone/types/typeProductsIphone";

import IphonePro14_1 from "@/assets/img/iphone/Iphone 14 Pro_1.png"
import IphonePro14_2 from "@/assets/img/iphone/Iphone 14 Pro_2.png"
import IphonePro14_3 from "@/assets/img/iphone/Iphone 14 Pro_3.png"
import IphonePro14_4 from "@/assets/img/iphone/Iphone 14 Pro_4.png"

import { PiDeviceMobileCameraLight } from "react-icons/pi";
import { TbSos } from "react-icons/tb";
import { TbCameraMinus } from "react-icons/tb";
import { GrRun } from "react-icons/gr";
import { FaBatteryFull } from "react-icons/fa6";
import { PiIdentificationBadgeLight } from "react-icons/pi";
import { HiSignal } from "react-icons/hi2";

export const arrProductsIphone: ProIphoneProps[] = [
    {
        images: {
            img1: IphonePro14_1,
            img2: IphonePro14_2,
            img3: IphonePro14_3,
            img4: IphonePro14_4,
        },
        id: 1,
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
    }
]