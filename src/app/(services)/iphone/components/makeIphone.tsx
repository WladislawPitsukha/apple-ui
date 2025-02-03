import React from "react"
import { arrMakeIphone, type MakeIphone } from "../types/typeMakeIp"
import Link from "next/link"
import Image from "next/image"

export function CardMakeIp({
    id,
    flex,
    width,
    title,
    textCard,
    padTop,
    padBottom,
    link,
    img,
    imgWidth,
    imgHeight,
}: MakeIphone) {
    return(
        <article 
            className={`flex flex-${flex} w-${width} bg-white gap-[50px]`}
            style={{

            }}
            key={id}
        >
            <div 
                className={`flex flex-col items-center gap-[1px]`}
                style={{
                    paddingTop: `${padTop}px`,
                    paddingBottom: `${padBottom}px`
                }}
            >
                <h2 className="font-helvetica max-w-[437px] text-[45px] font-bold leading-[52.01px] tracking-[-0.144px] text-center text-custom-dark">
                    {title}
                </h2>
                {textCard === "" ? null : (
                    <p className="font-helvetica text-[19px] font-normal leading-[29px] tracking-[0.231px] text-center text-custom-dark">
                        {textCard}
                    </p>
                )}
                <Link href={link}>
                    <h4 className="font-helvetica text-[21px] font-normal leading-[29px] tracking-[0.231px] text-center text-light-blue">
                        Learn more
                    </h4>
                </Link>
            </div>
            <Image 
                src={img}
                className={`${typeof imgWidth === "string" && typeof imgHeight === "string" ? 
                    `w-${imgWidth} h-${imgHeight}` : `w-[${imgWidth}px] h-[${imgHeight}px]`
                }`}
                alt="Product"
            />
        </article>
    )
}

export default function MakeIphone() {
    return(
        <section 
            className="flex flex-col w-full h-auto bg-fon-light-gray gap-[67px]"
            style={{
                paddingTop: "106px",
                paddingBottom: "30px",
                paddingLeft: "30px",
                paddingRight: "30px"
            }}
        >
            <h1 className="font-helvetica text-[51px] font-bold leading-[60px] tracking-[-0.28px] text-center text-custom-dark">
                What makes an iPhone an iPhone?
            </h1>
            <div className="flex flex-col items-center justify-center gap-[30px]">
                {arrMakeIphone.map((item, index) => (
                    <CardMakeIp 
                        {...item}
                        key={index}
                    />
                ))}
            </div>
        </section>
    )
}