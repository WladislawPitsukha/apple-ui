import Link from "next/link";
import { arrOfferCard, OfferCardProps } from "../types/typeOfferCard";

export function OfferCard({
    title, 
    text,
    textLink, 
    link,
}: OfferCardProps) {
    return(
        <article className="flex flex-col gap-1 items-center justify-center w-full h-auto pt-[80px] px-[125px] pb-[56px]">
            <h1 className="font-helvetica text-[44px] font-bold leading-[52px] tracking-[-0.144px] text-center text-black w-[346.18px]">
                {title}
            </h1>
            <p className="font-helvetica text-[19px] font-normal leading-[29px] tracking-[0.0945px] text-center text-black mt-[13px] w-[432.9px]">
                {text}
            </p>
            <Link href={link}>
                <h5 className="font-helvetica text-[21px] font-normal leading-[29px] tracking-[0.0945px] text-center text-light-blue">
                    {textLink}
                </h5>
            </Link>
        </article>
    )
}

export default function TextBlock() {
    return(
        <section className="flex justify-between items-center pt-[30px] mx-[30px] w-full h-auto">
            {arrOfferCard.map((item) => (
                <OfferCard 
                    title={item.title}
                    text={item.text}
                    link={item.link}
                    textLink={item.textLink}
                />
            ))}
        </section>
    )
}