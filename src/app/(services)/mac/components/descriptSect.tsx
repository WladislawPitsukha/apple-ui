import Link from "next/link";
import { arrDescSect } from "../constants/arrDescSect";
import { DescSectMainSet } from "../types/typeDescSect";
import { IconTree, IconType } from "react-icons";

import React from "react";

export function CreateIcon({
    icon,
}: {
    icon: IconType
}):JSX.Element {
    const Icon = icon;

    return(
        <Icon className="w-11 h-11 text-custom-light-brown justify-self-start ml-3" />
    )
}

export function ArtDescSect({
    id,
    icon,
    text,
    link,
}: DescSectMainSet) {
    const {title, mainText} = text;
    const {linkText, mainLink} = link;

    return(
        <article 
            className="flex gap-5 w-auto h-full"
            key={id}
        >
            <CreateIcon icon={icon} />
            <div className="flex flex-col items-center justify-between gap-1 w-auto h-auto justify-self-end">
                <h2 className="font-helvetica text-[19px] font-bold leading-[29px] tracking-[0.231px] text-cente w-auto text-black">
                    {title}
                </h2>
                <p className="font-helvetica text-[21px] leading-[29px] tracking-[0.231px] text-center text-black w-80">
                    {mainText}
                </p>
                <Link href={mainLink}>
                    <h3 className="font-helvetica text-[21px] leading-[29px] tracking-[0.231px] text-center text-custom-blue">
                        {linkText}
                    </h3>
                </Link>
            </div>
        </article>
    )
}

export default function DescSect() {
    return(
        <section className="flex items-center justify-between w-full h-auto bg-white py-14">
            {arrDescSect.map((item, index) => (
                <ArtDescSect 
                    key={index}
                    {...item}
                />
            ))}
        </section>
    )
}