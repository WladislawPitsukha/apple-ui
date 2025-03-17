import { IconType } from "react-icons";
import { arrFlexOffers } from "../constants/arrFlexOffers";
import { FlexOffersMainSet } from "../types/typeFlexOffers"
import Link from "next/link"
import React from "react";

export function CreateIcon({
    item
}:{
    item: IconType
}):JSX.Element {
    const Icon = item;

    return(
        <Icon 
            className="justify-self-start w-[36px] h-[38px] text-custom-gray"
            style={{
                alignSelf: "flex-start"
            }}
        />
    )
}

export function CardFlexOffer({
    id, 
    icon,
    text,
    link
}: FlexOffersMainSet) {
    const {
        title, 
        textCard,
        addTextCard 
    } = text;

    return(
        <article 
            key={id}
            className={`flex flex-col w-auto h-auto items-center gap-[10px]`}
        >
            <CreateIcon item={icon} />
            <div className="flex flex-col items-center justify-center gap-2 mx-4">
                <h2 className="font-helvetica text-[17px] max-w-[200px] font-bold leading-[23px] tracking-[0.23px] text-center text-custom-dark">
                    {title}
                </h2>
                {addTextCard !== "" ? (
                    <div>
                        <p className="font-helvetica text-[14px] max-w-[200px] font-normal leading-[20px] tracking-[0%] text-center text-custom-dark">
                            {textCard}
                        </p>
                        <p className="font-helvetica text-[14px] max-w-[200px] font-normal leading-[20px] tracking-[0%] text-center text-custom-dark">
                            {addTextCard}
                        </p>
                    </div>
                ): (
                    <p className="font-helvetica text-[14px] max-w-[200px] font-normal leading-[20px] tracking-[0%] text-center text-custom-dark">
                        {textCard}
                    </p>
                )}
                <Link href={link}>
                    <h4 className="font-helvetica text-[14px] font-normal leading-[20px] tracking-[0%] text-center mt-[5px] text-custom-blue">
                        Learn more
                    </h4>
                </Link>
            </div>
        </article>
    )
}

export default function FlexOffers() {
    return(
        <section className="flex justify-between items-start w-full mt-[45px] px-32">
            {arrFlexOffers.map((item, index) => (
                <CardFlexOffer 
                    key={index}
                    {...item}
                />
            ))}
        </section>
    )
}