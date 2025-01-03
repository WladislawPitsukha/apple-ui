import { ProductProps } from "@/types/typeProductProps";
import { AiOutlineSound } from "react-icons/ai";
import { BsCameraVideo } from "react-icons/bs";
import { FaBatteryFull } from "react-icons/fa6";
import { PiFingerprintThin } from "react-icons/pi";
import { SiSquare } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { GrFingerPrint } from "react-icons/gr";

export const productsMac: ProductProps[] = [
    {
        id: 1,
        head: {
            versionProduct: "unit",
            title: "MacBook Air",
            model: "M1 chip",
            price: 999,
            link1: "",
            link2: ""
        },
        body: {
            versionDis: '13.3"',
            versionAddDis: "Retina display1",
            chipImg: FaApple,
            chipText: "M1",
            upText1: false,
            coreVer1: 8,
            coreVer1Text: "CPU",
            upText2: false,
            coreVec2: 7,
            coreVec2Text: "GPU",
            memoryImg: SiSquare,
            memoryText: 16,
            storageTitle: 2,
            storageText: "Maximum configurable storage2",
            bateryImg: FaBatteryFull,
            bateryText: "Up to 18 hours battery life3",
            cameraImg: BsCameraVideo,
            cameraResolution: 720,
            audioImg: AiOutlineSound,
            audioText: "Three‑mic array Stereo speakers",
            weightNum: 2.8,
            touchImg: PiFingerprintThin,
            touchText: "Touch ID"
        }
    },
    {
        id: 2,
        head: {
            versionProduct: "unit",
            title: "MacBook Air",
            model: "M2 chip",
            price: 1199,
            link1: "",
            link2: ""
        },
        body: {
            versionDis: '13.6"',
            versionAddDis: "Liquid Retina display1",
            chipImg: FaApple,
            chipText: "M2",
            upText1: false,
            coreVer1: 8,
            coreVer1Text: "CPU",
            upText2: true,
            coreVec2: 10,
            coreVec2Text: "GPU",
            memoryImg: SiSquare,
            memoryText: 24,
            storageTitle: 2,
            storageText: "Maximum configurable storage2",
            bateryImg: FaBatteryFull,
            bateryText: "Up to 18 hours battery life4",
            cameraImg: BsCameraVideo,
            cameraResolution: 1080,
            audioImg: AiOutlineSound,
            audioText: `Three‑mic array Four-speaker sound system with Spatial Audio`,
            weightNum: 2.7,
            touchImg: PiFingerprintThin,
            touchText: "Touch ID"
        }
    },
    {
        id: 3,
        head: {
            versionProduct: "unit",
            title: "MacBook Pro 13",
            model: "Pro 13",
            price: 1299,
            link1: "",
            link2: "",
        },
        body: {
            versionDis: '13.3"',
            versionAddDis: "Retina display1",
            chipImg: FaApple,
            chipText: "M2",
            upText1: false,
            coreVer1: 8,
            coreVer1Text: "CPU",
            upText2: false,
            coreVec2: 10,
            coreVec2Text: "GPU",
            memoryImg: SiSquare,
            memoryText: 24,
            storageTitle: 2,
            storageText: "Maximum configurable storage2",
            bateryImg: FaBatteryFull,
            bateryText: "Up to 20 hours battery life5",
            cameraImg: BsCameraVideo,
            cameraResolution: 720,
            audioImg: AiOutlineSound,
            audioText: "Studio-quality three‑mic array Stereo speakers with Spatial Audio",
            weightNum: 3.0,
            touchImg: GrFingerPrint,
            touchText: "Touch Bar and Touch ID"
        }
    },
    {
        id: 4,
        head: {
            versionProduct: "sub-deck",
            title: "MacBook Pro 14",
            model: "Pro 14",
            price: 1999,
            link1: "",
            link2: "",
        },
        body: {
            versionDis: '14.2"',
            verAddNum: '16.2"',
            versionAddDis: "Liquid Retina XDR display1",
            chipImg: FaApple,
            chipText: "M2 Pro",
            chipAddText: "M2 Max",
            upText1: true,
            coreVer1: 12,
            coreVer1Text: "CPU",
            upText2: true,
            coreVec2: 38,
            coreVec2Text: "GPU",
            memoryImg: SiSquare,
            memoryText: 96,
            storageTitle: 8,
            storageText: "Maximum configurable storage2",
            bateryImg: FaBatteryFull,
            bateryText: "Up to 22 hours battery life6",
            cameraImg: BsCameraVideo,
            cameraResolution: 1080, 
            audioImg: AiOutlineSound,
            audioText: "Studio-quality three‑mic array Six-speaker sound system",
            weightNum: 3.5,
            weightAddNum: 4.7,
            touchImg: PiFingerprintThin,
            touchText: "Touch ID",
        }
    }
];