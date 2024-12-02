import { arrFotProps } from "@/types/typeFotArr";
import { arrayLinks, LinksArticleProps } from "@/types/typeSectLinks";
import { sectText } from "@/types/typeSectText";
import React from "react";

export function FooterLinks({title, array}: LinksArticleProps) {
    return(
        <article className="flex flex-col items-start justify-between gap-[10px]">
            <h2 className="font-helvetica-neue text-[12px] font-bold leading-[16px] tracking-tight-custom text-custom-dark text-left">
                {title}
            </h2>
            <div className="flex flex-col items-start justify-between gap-[10px]">
                {array.map(item => (
                    <a
                        href={item.link}
                        className="no-underline"
                    >
                        <h4 className="font-helvetica-neue text-[12px] font-normal leading-[16px] text-custom-dark-gray text-left">
                            {item.text}
                        </h4>
                    </a>
                ))}
            </div>
        </article>
    )
}

export default function Footer() {
    return(
        <footer className="flex flex-col justify-between w-full py-6 px-[120px]">
            <section className="flex flex-col items-start justify-between gap-3 mb-3">
                {sectText.slice(0, 11).map(item => (
                    <p className="font-sans text-xs font-normal leading-4 text-justify text-gray-600">
                        {item.text}
                    </p>
                ))}
                {sectText.slice(11, 12).map(item => (
                    <p 
                        className="font-sans text-xs font-normal leading-4 text-justify text-gray-600"
                    >
                        {item.text} 
                        <a 
                            className="underline" 
                            href={item.link}
                        >
                            {item.textLink}
                        </a>
                    </p>
                ))}
            </section>
            <hr className="border border-custom-gray w-full"/>
            <section className="flex justify-between items-start mt-5">
                <div className="flex flex-col gap-6">
                    {arrayLinks.slice(0, 2).map(linkSection => (
                        <FooterLinks
                            title={linkSection.title}
                            array={linkSection.array}
                        />
                    ))}
                </div>
                <div className="flex flex-col gap-6">
                    {arrayLinks.slice(2, 4).map(linkSection => (
                        <FooterLinks
                            title={linkSection.title}
                            array={linkSection.array}
                        />
                    ))}
                </div>
                <div className="flex flex-col gap-6">
                    {arrayLinks.slice(4, 5).map(linkSection => (
                        <FooterLinks
                            title={linkSection.title}
                            array={linkSection.array}
                        />
                    ))}
                </div>
                <div className="flex flex-col gap-6">
                    {arrayLinks.slice(5, 9).map(linkSection => (
                        <FooterLinks
                            title={linkSection.title}
                            array={linkSection.array}
                        />
                    ))}
                </div>
                <div className="flex flex-col gap-6">
                    {arrayLinks.slice(9, 11).map(linkSection => (
                        <FooterLinks
                            title={linkSection.title}
                            array={linkSection.array}
                        />
                    ))}
                </div>
            </section>
            <section className="flex flex-col items-start gap-5 mt-[34px]">
                <article className="flex gap-5 items-center justify-between">
                    <h3 className="font-helvetica text-xs font-normal leading-4 text-left text-custom-gray">
                        More ways to shop: <a className="text-custom-blue" href="">Find an Apple Store</a> or <a className="text-custom-blue" href="">other retailer</a> near you.
                    </h3>
                    <h3 className="font-helvetica text-xs font-normal leading-4 text-left text-custom-gray">
                        Or call 1-800-MY-APPLE.
                    </h3>  
                </article>
                <hr className="border border-custom-gray w-full"/>
                <article className="flex justify-between items-center w-full">
                    <h3 className="font-helvetica text-xs font-normal leading-4 text-left text-custom-gray">
                        Copyright © 2023 Apple Inc. All rights reserved.
                    </h3>
                    <div className="flex items-center justify-between">
                        {arrFotProps.map((item, index) => (
                            <React.Fragment key={index}>
                                {index > 1 && <hr className="border-l-2 border-custom-gray" />}
                                <a href={item.link}>
                                    <h4
                                        className="text-custom-gray font-helvetica text-xs font-bold leading-4 text-left m-2"
                                    >
                                        {item.title}
                                    </h4>
                                </a>
                            </React.Fragment>
                        ))}
                    </div>
                    <h3 className="font-helvetica text-xs font-normal leading-4 text-left text-custom-gray">
                        United States
                    </h3>
                </article>
            </section>
        </footer>
    )
}