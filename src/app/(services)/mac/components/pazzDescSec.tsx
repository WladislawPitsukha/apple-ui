import Link from "next/link"
import { arrCardOffer, CardOfferProps } from "../types/typeCardOffer"
import Image from "next/image"

export function CardOffersMac({
    id,
    widthTitle,
    cardWidth,
    flexType,
    partTitle,
    title,
    span,
    desc,
    link,
    img
}: CardOfferProps) {
    return(
        <article 
            className={`flex flex-${flexType} items-center justify-around bg-custom-light-gray-card pt-[60px] px-[60px] min-h-[600px] w-${cardWidth}`}
            key={id}
        >
            <div className="flex flex-col gap-1 justify-between">
                <h3 className="font-helvetica text-[22px] font-bold leading-[28px] tracking-[0.216px] text-center text-custom-dark">
                    {partTitle}
                </h3>
                <div className="flex">
                    <h1 className={`font-helvetica text-[44px] font-bold leading-[52.01px] tracking-[-0.144px] text-center text-custom-dark mt-[5px] w-[${widthTitle}px]`}>
                        {title} 
                    </h1>
                    <h1 className="font-helvetica text-[44px] font-bold leading-[52.01px] tracking-[-0.144px] text-center text-custom-dark bg-custom-green">
                        {span}
                    </h1>
                </div>
                <h5 className="font-helvetica text-[17px] font-normal leading-[25px] tracking-[-0.374px] text-center text-custom-dark mt-[6px]">
                    {desc}
                </h5>
                <Link href={link}>
                    <h4 className="font-helvetica text-[17px] font-normal leading-[25px] tracking-[-0.374px] text-center text-custom-blue">
                        Learn more
                    </h4>
                </Link>
            </div>
            <Image 
                className="w-full h-full"
                src={img}
                alt="Offer"
            />
        </article>
    )
}

export default function PazzDescSec() {
    return(
        <section className="flex flex-col items-center gap-20 w-full h-auto">
            <h1 className="font-helvetica text-[58px] font-bold leading-[68px] tracking-[-0.576px] text-center text-black">
                What makes a Mac a Mac?
            </h1>
            <div className="flex flex-col gap-[30px] w-full">
                <div className="flex items-center justify-between gap-[30px]">
                    {arrCardOffer.slice(0, 2).map(item => (
                        <CardOffersMac 
                            id={item.id}
                            cardWidth={item.cardWidth}
                            widthTitle={item.widthTitle}
                            flexType={item.flexType}
                            partTitle={item.partTitle}
                            title={item.title}
                            span={item.link}
                            desc={item.desc}
                            link={item.link}
                            img={item.img}
                        />
                    ))}
                </div>
                {arrCardOffer.slice(2, 3).map(item => (
                    <CardOffersMac 
                        id={item.id}
                        widthTitle={item.widthTitle}
                        cardWidth={item.cardWidth}
                        flexType={item.flexType}
                        partTitle={item.partTitle}
                        title={item.title}
                        span={item.link}
                        desc={item.desc}
                        link={item.link}
                        img={item.img}
                    />
                ))}
            </div>
        </section>
    )
}