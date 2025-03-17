

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { IconType } from "react-icons";
import { ProIphoneProps } from "../types/typeProductsIphone";
import CarouselAdve from "@/components/CarouselAdve";

export function CreateIcon({
    icon
} : {
    icon: IconType
}):JSX.Element {
    const Icon = icon;

    return(
        <Icon className="w-12 h-11 text-black" />
    )
}

export function CreateSymbol({
    icon: Icon, className
}: {
    icon: IconType,
    className: string
}) {
    return(
        <Icon className={`w-12 h-11 text-black ${className}`} />
    )
}

export function MakeBrText(text: string) {
    const arr = text.split(" ");
    return(
        <>
            {arr.map((item, index) => (
                <React.Fragment key={index}>
                    {item}
                    {index < arr.length - 1 && <br />}
                </React.Fragment>
            ))}
        </>
    )
}

export default function ProductArtIp({
    images,
    id,
    head,
    body,
}: ProIphoneProps) {
    const {
        typeSelling,
        model,
        modelPhrase,
        price,
        links: {
            linkFirst,
            linkSecond
        }
    } = head
    const {
        display,
        dynamic,
        sos,
        camera,
        actMode,
        batery,
        chip,
        recognizer,
        mobInter
    } = body

    return(
        <article className="flex flex-col w-auto justify-between items-center gap-[39px] h-auto" key={id}>
            <header className="flex flex-col justify-between items-center gap-2">
                <CarouselAdve images={Object.values(images)} interval={2000}/>
                <div className="flex flex-col items-center justify-between mt-6 gap-1">
                    <h6 className="font-helvetica text-[12px] font-normal leading-[16px] tracking-tight-custom text-center align-middle text-custom-brown">
                        {typeSelling !== false ? "New" : null}
                    </h6>
                    <h2 className="font-helvetica text-[21px] font-bold leading-[28px] tracking-[0.216px] text-center text-black">
                        {model}
                    </h2>
                    <h4 className="font-helvetica text-[13px] font-medium leading-[20px] tracking-[-0.224px] text-center text-black">
                        {modelPhrase}
                    </h4>
                    <h3 className="font-helvetica text-[14px] font-normal leading-[20px] tracking-[-0.224px] text-center text-black mt-[18px]">
                        From ${price}
                    </h3>
                </div>
                <div className="flex flex-col items-center justify-between gap-1">
                    <button className="flex justify-center items-center px-3 py-1 w-[45px] rounded-full bg-light-blue">
                        <Link href={linkFirst} className="no-underline">
                            <h6 className="font-helvetica text-[12px] font-normal leading-[16px] tracking-[-0.12px] text-center text-white">
                                Buy
                            </h6>
                        </Link>
                    </button>
                    <Link href={linkSecond} className="no-underline">
                        <h5 className="font-helvetica text-[14px] font-normal leading-[20px] tracking-[-0.224px] text-center text-light-blue">
                            Learn more
                        </h5>
                    </Link>
                </div>
            </header>
            <hr className="border bg-custom-dark-white rounded-full w-56" />
            <main className="flex flex-col items-center justify-between gap-10">
                <div className="flex flex-col items-center justify-between gap-2 h-auto w-[209.5px]">
                    <h2 className="font-helvetica text-[20px] font-bold leading-[25px] tracking-[0.231px] text-center text-black">
                        {
                            display.verAddDisp !== null ? `${display.verMainDisp}"` + " or " + `${display.verAddDisp}"`: `${display.verMainDisp}"`
                        }
                    </h2>
                    <h4 className="font-helvetica font-normal text-[14px] leading-[20px] tracking-[-022] text-center align-middle text-black">
                        {typeof display.firAdvat === null ? "-" : display.firAdvat}
                    </h4>
                    <h4 className="font-helvetica font-normal text-[14px] leading-[20px] tracking-[-022] text-center align-middle text-black">
                        {typeof display.secAdvat === null ? "-" : display.secAdvat}
                        
                    </h4>
                    <h4 className="font-helvetica font-normal text-[14px] leading-[20px] tracking-[-022] text-center align-middle text-black">
                        {typeof display.thiAdvat === null ? "-" : display.thiAdvat}
                    </h4>
                </div>
                <div className="flex flex-col items-center justify-between gap-2 h-auto w-[209.5px]">
                    <CreateIcon icon={dynamic.icon} />
                    <h4 className="font-helvetica font-normal text-[14px] leading-[20px] tracking-[-022] text-center align-middle text-black">
                        {typeof dynamic.verDinamic === null ? "-" : dynamic.verDinamic}
                    </h4>
                    <h6 className="font-helvetica font-normal text-[14px] leading-[20px] tracking-[-022] w-32 text-center align-middle text-[#6e6e73]">
                        {typeof dynamic.advan === null ? "-" : dynamic.advan}
                    </h6>
                </div>
                <div className="flex flex-col items-center justify-between gap-2 h-auto w-[209.5px]">
                    <CreateIcon icon={sos.icon} />
                    <h4 className="font-helvetica font-normal text-[14px] leading-[20px] tracking-[-022] text-center align-middle text-black">
                        {typeof sos.firAdvat === null ? "-" : sos.firAdvat}
                    </h4>
                    <h4 className="font-helvetica font-normal text-[14px] leading-[20px] tracking-[-022] text-center align-middle text-black">
                        {typeof sos.secAdvat === null ? "-" : sos.secAdvat}
                    </h4>
                    <h4 className="font-helvetica font-normal text-[14px] leading-[20px] tracking-[-022] text-center align-middle text-black">
                        {typeof sos.thiAdvat === null ? "-" : sos.thiAdvat}
                    </h4>
                </div>
                <div className="flex flex-col items-center justify-between gap-2 h-auto w-[209.5px]">
                    <CreateIcon icon={camera.icon} />
                    <h4 className="font-helvetica font-normal text-[14px] leading-[20px] tracking-[-022] text-center align-middle text-black">
                        {camera.titleType}
                    </h4>
                    <h6 className="font-helvetica font-normal text-[14px] leading-[20px] tracking-[-022] text-center align-middle text-[#6e6e73]">
                        {camera.pixels}MP Main 
                    </h6>
                    <h6 className="font-helvetica font-normal text-[14px] leading-[20px] tracking-[-022] text-center align-middle text-[#6e6e73]">
                        {typeof camera.titleCamera === null ? "-" : camera.titleCamera}
                    </h6>
                    <h6 className="font-helvetica font-normal text-[14px] leading-[20px] tracking-[-022] text-center align-middle text-[#6e6e73]">
                        {typeof camera.firAdvat === null ? "-" : camera.firAdvat}
                    </h6>
                    <h6 className="font-helvetica font-normal text-[14px] leading-[20px] tracking-[-022] text-center align-middle text-[#6e6e73]">
                        {typeof camera.secAdvat === null ? "-" : camera.secAdvat}
                    </h6>
                </div>
                <div className="flex flex-col items-center justify-between gap-2 h-auto w-[209.5px]">
                    <CreateIcon icon={actMode.icon} />
                    <h4 className="font-helvetica font-normal text-[14px] leading-[20px] tracking-[-022] text-center align-middle w-28 text-black">
                        {actMode.text}
                    </h4>
                </div>
                <div className="flex flex-col items-center justify-between gap-2 h-auto w-[209.5px]">
                    <CreateIcon icon={batery.icon} />
                    <h4 className="font-helvetica font-normal text-[14px] leading-[20px] tracking-[-022] text-center align-middle w-28 text-black">
                        Up to {batery.timeWork} hours video playback6
                    </h4>
                </div>
                <div className="flex flex-col items-center justify-between gap-2 h-auto w-[209.5px]">
                    <CreateIcon icon={chip.icon} />
                    <h4 className="font-helvetica font-normal text-[14px] leading-[20px] tracking-[-022] text-center align-middle w-28 text-black">
                        A{chip.verChip}
                    </h4>
                    {chip.verCore !== null ? (
                        <h4 className="font-helvetica font-normal text-[14px] leading-[20px] tracking-[-022] text-center align-middle w-28 text-black"                              >
                            with 5-core GPU
                        </h4>
                    ): null}
                </div>
                <div className="flex flex-col items-center justify-between gap-2 h-auto w-[209.5px]">
                    <CreateIcon icon={recognizer.icon} />
                    <h4 className="font-helvetica font-normal text-[14px] leading-[20px] tracking-[-022] text-center align-middle w-28 text-black">
                        {recognizer.typeID}
                    </h4>
                </div>
                <div className="flex flex-col items-center justify-between gap-2 h-auto w-[209.5px]">
                    <CreateIcon icon={mobInter.icon} />
                    <h4 className="font-helvetica font-normal text-[14px] leading-[20px] tracking-[-022] text-center align-middle w-28 text-black">
                        {typeof mobInter.typeSpeed === null ? "" : `${mobInter.typeSpeed}`} 5G cebullar{mobInter.verCellular}
                    </h4>
                </div>
            </main>
            <hr className="border bg-custom-dark-white w-full rounded-full" />
        </article>
    )
}