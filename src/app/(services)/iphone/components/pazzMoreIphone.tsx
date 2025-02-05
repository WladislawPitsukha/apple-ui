import React from "react";
import Link from "next/link";
import Image from "next/image";
import { arrMoreIp } from "./constants/arrMoreIp"; 
import { MoreIpProps } from "../types/typeMoreIp";
import { IconType } from "react-icons";
import { FaApple } from "react-icons/fa";

export function CreateIcon({
    icon,
    width,
    height,
    color,
}: {
    icon: IconType,
    width: number,
    height: number,
    color: string,
}) {
    const Icon = icon

    return(
        <Icon 
            className={`text-${color}`} 
            style={{
                width: `${width}px`,
                height: `${height}px`
            }} 
        />
    )
}

export function CardMoreIp({
    idFlex, 
    colorProps,
    iconProps,
    textProps,
    linkProps,
    imgProps,
    padProps,
    marProps,
}: MoreIpProps) {
    const {id, flex, activatePad, activateMar} = idFlex[0];
    const {bgColor, colorText} = colorProps[0];
    const {iconW, iconH} = iconProps[0];
    const {title, weigthTitle, textCard, weightCardText, widthCardText} = textProps[0];
    const {mainLink, addLink, addLinkText} = linkProps[0];
    const {img, imgH, imgW} = imgProps[0];
    const {pad, padT, padRight, padBotto, padLeft} = padProps[0];
    const {mar, marT, marRight, marBotto, marLeft,} = marProps[0];

    return(
        <article 
            className={`flex flex-${flex} bg-${bgColor} justify-between ${id === 8 ? "items-end h-auto" : "items-center"} w-full h-auto gap-[67px]`}
            style={{
                padding: activatePad === true ? `${pad}px` : `${padT}px ${padRight}px ${padBotto}px ${padLeft}px`,
                margin: activateMar === true ? `${mar}px` : `${marT}px ${marRight}px ${marBotto}px ${marLeft}px`,
                minHeight: "675px",
            }}
        >
            {id === 1 ? (
                <Image 
                    className={imgH == "string" || imgW == "string" ? `w-${imgW} h-${imgH}`: `w-[${imgW}px] h-[${imgH}px]`}
                    src={img}
                    alt="Product"
                />
            ): null}
            <div 
                className="flex flex-col items-center justify-center w-auto h-auto"
                style={{
                    marginBottom: `${id === 8 ? `70` : `0`}px`
                }}
            >
                <div className="flex items-start justify-center">
                    <CreateIcon 
                        icon={FaApple}
                        width={iconW}
                        height={iconH}
                        color={colorText}
                    />
                    <h1
                        className={`font-helvetica leading-[52.01px] tracking-[-0.144px] text-center font-bold text-${colorText}`}
                        style={{
                            fontSize: `${weigthTitle}px`,
                        }}
                    >
                        {title}
                    </h1>
                </div>
                <p 
                    className={`font-helvetica text-[25px] mt-[29px] leading-[32px] tracking-[0.196px] text-center font-${weightCardText} text-${colorText}`}
                    style={{
                        width: `${widthCardText}px`
                    }}
                >
                    {textCard}
                </p>
                <div 
                    className="items-start justify-between mt-[9px] gap-5"
                    style={{
                        display: "flex",
                        flexDirection: `${id == 6 || id == 7 ? "row-reverse" : "row"}`
                    }}
                >
                    {id === 4 || id === 8 ? null : (
                        <Link href={addLink as string}>
                            <h4 
                                className="font-helvetica text-[17px] font-normal leading-[29px] tracking-[0.231px] text-center text-light-blue"
                                style={{
                                    marginTop: `${id !== 7 ? "14px" : "0px"}`
                                }}
                            >
                                {addLinkText}
                            </h4>
                        </Link>
                    )}
                    <Link href={mainLink}>
                        <h4 className="font-helvetica text-[21px] font-normal leading-[29px] tracking-[0.231px] text-center text-light-blue">
                            Learn more
                        </h4>
                    </Link>
                </div>
            </div>
            {id !== 1 ? (
                <Image 
                    className={imgH == "string" || imgW == "string" ? `w-${imgW} h-${imgH}`: `w-[${imgW}px] h-[${imgH}px]`}
                    src={img}
                    alt="Product"
                />
            ): null}
        </article>
    )
}

export function DivCardsMoreIp({
    array,
}: {
    array: number[]
}) {

    const [i, j] = array;
    return(
        <div className="flex justify-between items-stretch gap-10 w-full h-auto">
            {arrMoreIp.slice(i, j).map((item) => (
                <CardMoreIp 
                    {...item}
                /> 
            ))}
        </div>
    )
}

export default function PazzMoreIphone() {
    return(
        <section className={`flex flex-col items-center justify-around w-full h-auto bg-fon-light-gray`}>
            <h1 className="font-helvetica text-[51px] mt-[106px] font-bold leading-[60px] tracking-custom-1 text-center text-custom-dark">
                Get more out of your iPhone.
            </h1>
            <div className={`flex flex-col items-center w-full justify-between gap-10 pt-[70px] px-[30px] pb-[30px]`}>
                {arrMoreIp.slice(0, 1).map((item) => (
                    <CardMoreIp 
                        {...item}
                    /> 
                ))}
                {[
                    [1, 3], 
                    [3, 5], 
                    [5, 7],
                ].map((item) => (
                    <DivCardsMoreIp 
                        array={item}
                    />
                ))}
                {arrMoreIp.slice(7, 8).map((item) => (
                    <CardMoreIp 
                        {...item}
                    /> 
                ))}
            </div>
        </section>
    )
}