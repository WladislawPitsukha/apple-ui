import { ProductProps } from "@/types/typeProductProps";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

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

export default function ProductArticle({
    id,
    head,
    body,
}: ProductProps) {
    const {versionProduct, title, model, price, link1, link2} = head;
    const {
        versionDis, verAddNum, versionAddDis, coreVer1, coreVer1Text, coreVec2, coreVec2Text, 
        weightNum, weightAddNum, bateryText, cameraResolution, audioText, bateryImg, cameraImg, 
        audioImg, touchImg, touchText, memoryImg, memoryText, storageTitle, storageText,
        chipImg, chipText, chipAddText, upText1, upText2,
    } = body

    return(
        <article className="flex flex-col w-auto justify-between items-center gap-[39px] min-h-[1400px]" key={id}>
            <header className="flex flex-col justify-between items-center gap-2">
                <Image 
                    className=""
                    src=""
                    alt="Product"
                />
                <div className="flex flex-col items-center justify-between mt-6 gap-1">
                    <h2 className="font-helvetica text-[21px] font-bold leading-[28px] tracking-[0.216px] text-center text-black">
                        {title}
                    </h2>
                    <h4 className="font-helvetica text-[13px] font-medium leading-[20px] tracking-[-0.224px] text-center text-black">
                        {model}
                    </h4>
                    <h3 className="font-helvetica text-[14px] font-normal leading-[20px] tracking-[-0.224px] text-center text-black mt-[18px]">
                        From ${price}
                    </h3>
                </div>
                <div className="flex flex-col justify-between gap-1">
                    <button className="flex justify-center items-center px-3 py-1 rounded-full bg-light-blue">
                        <Link href={link1} className="no-underline">
                            <h6 className="font-helvetica text-[12px] font-normal leading-[16px] tracking-[-0.12px] text-center text-white">
                                Buy
                            </h6>
                        </Link>
                    </button>
                    <Link href={link2} className="no-underline">
                        <h5 className="font-helvetica text-[14px] font-normal leading-[20px] tracking-[-0.224px] text-center text-light-blue">
                            Learn more
                        </h5>
                    </Link>
                </div>
            </header>
            <hr className="border bg-custom-dark-white rounded-full w-56" />
            <main className="flex flex-col items-center justify-between gap-10">
                <div className="flex flex-col items-center justify-between gap-2 h-14">
                    <h2 className="font-helvetica text-[20px] font-bold leading-[25px] tracking-[0.231px] text-center text-black">
                        {
                            versionProduct === "unit" ? versionDis : versionDis + " or " + verAddNum
                        }
                    </h2>
                    <h4 className="font-helvetica text-[13px] font-normal leading-[20px] tracking-[-0.224px] text-center w-28 text-black">
                        {versionAddDis}
                    </h4>
                </div>
                <div className="flex flex-col items-center justify-between gap-1 h-24">
                    <div className="flex justify-center items-center w-auto h-auto rounded-lg bg-black p-2">
                        <CreateSymbol icon={chipImg} className="text-custom-dark-white w-auto h-auto" />
                        <h6 className="m-0 w-full font-helvetica text-[10px] uppercase font-normal leading-[20px] tracking-[-0.224px] text-center text-custom-dark-white">
                            {MakeBrText(chipText)}
                        </h6>
                    </div>
                    <h4 className=" font-helvetica text-[13px] w-28 font-normal leading-[20px] tracking-[-0.224px] text-center text-black">
                        {
                            versionProduct === "unit" ? "Apple " + chipText : "Apple " + chipText + " or Apple " + chipAddText
                        }
                    </h4>
                </div>
                <div className="flex flex-col items-center justify-between gap-2 h-16">
                    {upText1 && (
                        <h4 className="font-helvetica text-[13px] font-normal leading-[20px] tracking-[-0.224px] text-center w-28 text-black">
                            Up to
                        </h4>
                    )}
                    <h2 className="font-helvetica text-[20px] font-bold leading-[25px] tracking-[0.231px] text-center text-black">
                        {coreVer1}-core
                    </h2>
                    <h4 className="font-helvetica text-[13px] font-normal leading-[20px] tracking-[-0.224px] text-center w-28 text-black">
                        {coreVer1Text}
                    </h4>
                </div>
                <div className="flex flex-col items-center justify-between gap-2 h-16">
                    {upText2 && (
                        <h4 className="font-helvetica text-[13px] font-normal leading-[20px] tracking-[-0.224px] text-center w-28 text-black">
                            Up to
                        </h4>
                    )}
                    <h2 className="font-helvetica text-[20px] font-bold leading-[25px] tracking-[0.231px] text-center text-black">
                        {coreVec2}-core
                    </h2>
                    <h4 className="font-helvetica text-[13px] font-normal leading-[20px] tracking-[-0.224px] text-center w-28 text-black">
                        {coreVec2Text}
                    </h4>
                </div>
                <div className="flex flex-col items-center justify-between gap-2 h-20">
                    <CreateIcon icon={memoryImg} />
                    <h4 className="font-helvetica text-[13px] font-normal leading-[20px] tracking-[-0.224px] text-center w-28 text-black">
                        Up to {memoryText}GB unified memory
                    </h4>
                </div>
                <div className="flex flex-col items-center justify-between gap-2 h-12">
                    <h2 className="font-helvetica text-[20px] font-bold leading-[25px] tracking-[0.231px] text-center text-black">
                        {storageTitle}TB
                    </h2>
                    <h4 className="font-helvetica text-[13px] font-normal leading-[20px] tracking-[-0.224px] text-center w-28 text-black">
                        {storageText}
                    </h4>
                </div>
                <div className="flex flex-col items-center justify-between gap-2 h-24">
                    <CreateIcon icon={bateryImg} />
                    <h4 className="font-helvetica text-[13px] font-normal leading-[20px] tracking-[-0.224px] text-center w-28 text-black">
                        {bateryText}
                    </h4>
                </div>
                <div className="flex flex-col items-center justify-between gap-2 h-24">
                    <CreateIcon icon={cameraImg} />
                    <h4 className="font-helvetica text-[13px] font-normal leading-[20px] tracking-[-0.224px] text-center w-28 text-black">
                        {cameraResolution} FaceTime HD camera
                    </h4>
                </div>
                <div className="flex flex-col items-center justify-between gap-2 h-24">
                    <CreateIcon icon={audioImg} />
                    <h4 className={`font-helvetica text-[13px] font-normal leading-[20px] tracking-[-0.224px] text-center text-black ${
                        audioText.length >= 40 ? "w-52" : "w-28"
                    }`}>
                        {audioText}
                    </h4>
                </div>
                <div className="flex flex-col items-center justify-between gap-2 h-14">
                    <h2 className="font-helvetica text-[20px] font-bold leading-[25px] tracking-[0.231px] text-center text-black">
                        {
                            versionProduct === "unit" ? `${weightNum} lb.` : `${weightNum} lb. or ${weightAddNum}`
                        }
                    </h2>
                    <h4 className="font-helvetica text-[13px] font-normal leading-[20px] tracking-[-0.224px] text-center w-28 text-black">
                        Weight
                    </h4>
                </div>
                <div className="flex flex-col items-center justify-between gap-2 h-20">
                    <CreateIcon icon={touchImg} />
                    <h4 className="font-helvetica text-[13px] font-normal leading-[20px] tracking-[-0.224px] text-center w-28 text-black">
                        {touchText}
                    </h4>
                </div>
            </main>
            <hr className="border bg-custom-dark-white w-full rounded-full" />
        </article>
    )
}