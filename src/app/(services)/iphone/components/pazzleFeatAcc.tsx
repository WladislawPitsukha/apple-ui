import Image from "next/image"
import Link from "next/link"
import React from "react"
import { arrFeatAcc } from "./constants/arrFeatAcc"
import { FeatAccProps } from "../types/typeFeatAcc"

export const MainBlock = {
    display: "flex",
    flexDirection: "column",
    aligtItems: "center",
}

export function FeatAccCard({
    id,
    flex,
    content,
    title, 
    textCard,
    widthText,
    linkText1,
    link1,
    linkText2,
    link2,
    padTop,
    padBottom,
    padLeft,
    padRight,
    img,
    imgTypeMar,
    imgMar,
}:FeatAccProps) {
    return(
        <article 
            style={{
                paddingTop: `${padTop}px`,
                paddingBottom: `${padBottom}px`,
                paddingLeft: `${padLeft}px`,
                paddingRight: `${padRight}px`,
            }}
            className={`flex flex-${flex} items-${content} my-[15px] justify-between w-full h-auto gap-[12px] bg-white`}
        >
            {id == 2 ? (
                <Image 
                    src={img}
                    className={`w-auto h-auto m${imgTypeMar}-[${imgMar}px]`}
                    alt="Product"
                />
            ): null}
            <div 
                className={`flex flex-col justify-center items-center  gap-1`}
            >
                <h1 
                    className="font-helvetica text-[44px] font-bold leading-[52.01px] tracking-[-0.144px] text-center text-custom-dark"
                    style={{
                        width: `${widthText}px`
                    }}
                >
                    {title}
                </h1>
                {id == 1 || id == 2 ? (
                    <p className="font-helvetica w-[290px] text-[21px] font-normal leading-[29px] tracking-[0.231px] text-center text-custom-dark mt-3">
                        {textCard}
                    </p>
                ): null}
                {id === 1 ? (
                    <Link href={link1}>
                        <h4 className="font-helvetica text-[20px] font-normal leading-[29px] tracking-[0.231px] text-center text-light-blue">
                            {linkText1}
                        </h4>
                    </Link>
                ): null}
                {id === 2 ? (
                    <div className="flex items-center justify-center gap-6">
                        <Link href={link1}>
                            <h4 className="font-helvetica text-[20px] font-normal leading-[29px] tracking-[0.231px] text-center text-light-blue">
                                {linkText1}
                            </h4>
                        </Link>
                        <Link href={link2}>
                            <h4 className="font-helvetica text-[20px] font-normal leading-[29px] tracking-[0.231px] text-center text-light-blue">
                                {linkText2}
                            </h4>
                        </Link>
                    </div>
                ): null}
            </div>
            {id == 1 || id == 3 ? (
                <Image 
                    src={img}
                    className={`w-auto h-auto m${imgTypeMar}-[${imgMar}px]`}
                    alt="Product"
                />
            ): null}
        </article>
    )
}

export default function PazzFeatAcc() {
    return(
        <section className={`${MainBlock} justify-between w-full h-auto bg-fon-light-gray px-[30px]`}>
            <h1 className="font-helvetica mt-[95px] mb-[67px] text-[51px] font-bold leading-[60px] tracking-custom-1 text-center text-custom-dark">
                Featured accessories
            </h1>
            <div className={`${MainBlock} gap-[10px]`}>
                {arrFeatAcc.map((item, index) => (
                    <FeatAccCard 
                        {...item}
                        key={index}
                    />
                ))}
            </div>
            <article className="flex justify-center items-center mt-[19px] mb-[16px]">
                <Link href={``}>
                    <h4 className="font-helvetica text-[20px] font-normal leading-[29px] tracking-[0.231px] text-center text-light-blue">
                        Shop all iPhone accessories 
                    </h4>
                </Link>
            </article>
        </section>
    )
}