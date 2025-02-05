import { IconTree, IconType } from "react-icons";
import { OfferIphone } from "../types/typeOfferIphone";
import React from "react";
import Link from "next/link";
import { arrOfferIphone } from "./constants/arrOfferIphone";

export function CreateIcon({
    icon
}:{
    icon: IconType
}):JSX.Element {
    const Icon = icon;
    return(
        <Icon className="w-[71px] h-[75px] text-custom-light-brown" />
    )
}

export function CardOffer({
    id,
    icon,
    title,
    cardText,
    link,
    linkText
}: OfferIphone) {
    return(
        <article 
            className="flex flex-col w-auto h-auto items-center justify-between gap-2"
            key={id}
        >
            <CreateIcon icon={icon} />
            <h2 className="font-helvetica text-[19px] font-bold leading-[29px] tracking-[0.231px] text-center text-custom-dark mt-[7px]">
                {title}
            </h2>
            <div className="flex flex-col items-center justify-center">
                <p className="font-helvetica text-[21px] font-normal leading-[29px] tracking-[0.231px] text-center text-custom-dark w-[277px]">
                    {cardText}
                </p>
                <Link href={link}>
                    <h4 className="font-helvetica text-[21px] font-normal leading-[29px] tracking-[0.231px] text-center text-light-blue">
                        {linkText}
                    </h4>
                </Link>
            </div>
        </article>
    )
}

export default function PazzOfferIphone() {
    return(
        <section className="flex justify-evenly w-full h-auto items-start pt-[83px] bg-fon-light-gray">
            {arrOfferIphone.map((item, index) => (
                <CardOffer 
                    key={index}
                    {...item}
                />
            ))}
        </section>
    )
}