import { ProductProps } from "@/types/typeProductProps";
import { AiOutlineSound } from "react-icons/ai";
import { BsCameraVideo } from "react-icons/bs";
import { FaBatteryFull } from "react-icons/fa6";
import { PiFingerprintThin } from "react-icons/pi";
import { SiSquare } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { GrFingerPrint } from "react-icons/gr";

import MacM1_1 from "@/assets/img/macbook/Mac Air M1.png"
import MacM1_2 from "@/assets/img/macbook/Mac Air M1_2.png"

import MacM2_1 from "@/assets/img/macbook/Mac Air M2_2.png"
import MacM2_2 from "@/assets/img/macbook/Mac Air M2_2.png"
import MacM2_3 from "@/assets/img/macbook/Mac Air M2_3.png"

import MacPro13_1 from "@/assets/img/macbook/Mac Pro 13.png"
import MacPro13_2 from "@/assets/img/macbook/Mac Pro 13_2.png"
import MacPro13_3 from "@/assets/img/macbook/Mac Pro 13_3.png"

import MacPro14_1 from "@/assets/img/macbook/Mac Pro 14 & 16.png"
import MacPro14_2 from "@/assets/img/macbook/Mac Pro 14_2.png"

export const arrProductsMac: ProductProps[] = [
    {
        images: {
            img1: MacM1_1,
            img2: MacM1_2,
        },
        id: 1,
        head: {
            versionProduct: "unit",
            title: "MacBook Air",
            model: "M1 chip",
            price: 999,
            links: {
                linkFirst: "",
                linkSecond: "",
            },
        },
        body: {
            vers: {
                versionDis: '13.3"',
                versionAddDis: "Retina display1",
            },
            chip: {
                chipImg: FaApple,
                chipText: "M1",
            },
            core1: {
                upText1: false,
                coreVer1: 8,
                coreVer1Text: "CPU",
            },
            core2: {
                upText2: false,
                coreVec2: 7,
                coreVec2Text: "GPU",
            },
            memory: {
                memoryImg: SiSquare,
            memoryText: 16,
            },
            storage: {
                storageTitle: 2,
                storageText: "Maximum configurable storage2",
            },
            batery: {
                bateryImg: FaBatteryFull,
                bateryText: "Up to 18 hours battery life3",
            },
            camera: {
                cameraImg: BsCameraVideo,
                cameraResolution: 720,
            },
            audio: {
                audioImg: AiOutlineSound,
                audioText: "Three‑mic array Stereo speakers",
            },
            weight: {
                weightNum: 2.8,
            },
            touch: {
                touchImg: PiFingerprintThin,
                touchText: "Touch ID"
            }
            
            
        }
    },
    {
        images: {
            img1: MacM2_1,
            img2: MacM2_2,
            img3: MacM2_3,
        },
        id: 2,
        head: {
            versionProduct: "unit",
            title: "MacBook Air",
            model: "M2 chip",
            price: 1199,
            links: {
                linkFirst: "",
                linkSecond: "",
            },
        },
        body: {
            vers: {
                versionDis: '13.6"',
                versionAddDis: "Liquid Retina display1",
            },
            chip: {
                chipImg: FaApple,
                chipText: "M2",
            },
            core1: {
                upText1: false,
                coreVer1: 8,
                coreVer1Text: "CPU",
            },
            core2: {
                upText2: true,
                coreVec2: 10,
                coreVec2Text: "GPU",
            },
            memory: {
                memoryImg: SiSquare,
                memoryText: 24,
            },
            storage: {
                storageTitle: 2,
                storageText: "Maximum configurable storage2",
            },
            batery: {
                bateryImg: FaBatteryFull,
            bateryText: "Up to 18 hours battery life4",
            },
            camera: {
                cameraImg: BsCameraVideo,
                cameraResolution: 1080,
            },
            audio: {
                audioImg: AiOutlineSound,
                audioText: `Three‑mic array Four-speaker sound system with Spatial Audio`,
            },
            weight: {
                weightNum: 2.7,
            },
            touch: {
                touchImg: PiFingerprintThin,
                touchText: "Touch ID"
            }
        }
    },
    {
        images: {
            img1: MacPro13_1,
            img2: MacPro13_2,
            img3: MacPro13_3,
        },
        id: 3,
        head: {
            versionProduct: "unit",
            title: "MacBook Pro 13",
            model: "Pro 13",
            price: 1299,
            links: {
                linkFirst: "",
                linkSecond: "",
            },
        },
        body: {
            vers: {
                versionDis: '13.3"',
                versionAddDis: "Retina display1",
            },
            chip: {
                chipImg: FaApple,
                chipText: "M2",
            },
            core1: {
                upText1: false,
                coreVer1: 8,
                coreVer1Text: "CPU",
            },
            core2: {
                upText2: false,
                coreVec2: 10,
                coreVec2Text: "GPU",
            },
            memory: {
                memoryImg: SiSquare,
                memoryText: 24,
            },
            storage: {
                storageTitle: 2,
                storageText: "Maximum configurable storage2",
            },
            batery: {
                bateryImg: FaBatteryFull,
                bateryText: "Up to 20 hours battery life5",
            },
            camera: {
                cameraImg: BsCameraVideo,
                cameraResolution: 720,
            },
            audio: {
                audioImg: AiOutlineSound,
                audioText: "Studio-quality three‑mic array Stereo speakers with Spatial Audio",
            },
            weight: {
                weightNum: 3.0,
            },
            touch: {
                touchImg: GrFingerPrint,
                touchText: "Touch Bar and Touch ID"
            }
            
        }
    },
    {
        images: {
            img1: MacPro14_1,
            img2: MacPro14_2,
        },
        id: 4,
        head: {
            versionProduct: "sub-deck",
            title: "MacBook Pro 14",
            model: "Pro 14",
            price: 1999,
            links: {
                linkFirst: "",
                linkSecond: "",
            },
        },
        body: {
            vers: {
                versionDis: '14.2"',
                verAddNum: '16.2"',
                versionAddDis: "Liquid Retina XDR display1",
            },
            chip: {
                chipImg: FaApple,
                chipText: "M2 Pro",
                chipAddText: "M2 Max",
            },
            core1: {
                upText1: true,
                coreVer1: 12,
                coreVer1Text: "CPU",
            },
            core2: {
                upText2: true,
                coreVec2: 38,
                coreVec2Text: "GPU",
            },
            memory: {
                memoryImg: SiSquare,
                memoryText: 96,
            },
            storage: {
                storageTitle: 8,
                storageText: "Maximum configurable storage2",
            },
            batery: {
                bateryImg: FaBatteryFull,
                bateryText: "Up to 22 hours battery life6",
            },
            camera: {
                cameraImg: BsCameraVideo,
                cameraResolution: 1080, 
            },
            audio: {
                audioImg: AiOutlineSound,
                audioText: "Studio-quality three‑mic array Six-speaker sound system",
            },
            weight: {
                weightNum: 3.5,
                weightAddNum: 4.7,
            },
            touch: {
                touchImg: PiFingerprintThin,
                touchText: "Touch ID",
            }
        }
    }
];