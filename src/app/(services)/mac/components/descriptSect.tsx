import Link from "next/link";
import { arrDescSect, DescSectProps } from "../types/typeDescSect";

export function ArtDescSect({
    Icon,
    title,
    text,
    linkText,
    link,
}: DescSectProps) {
    return(
        <article className="flex gap-5 w-auto h-full">
            <Icon className="w-11 h-11 text-custom-light-brown justify-self-start ml-3" />
            <div className="flex flex-col items-center justify-between gap-1 w-auto h-auto justify-self-end">
                <h2 className="font-helvetica text-[19px] font-bold leading-[29px] tracking-[0.231px] text-cente w-auto text-black">
                    {title}
                </h2>
                <p className="font-helvetica text-[21px] leading-[29px] tracking-[0.231px] text-center text-black w-80">
                    {text}
                </p>
                <Link href={link}>
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
            {arrDescSect.map(item => (
                <ArtDescSect 
                    key={item.id}
                    Icon={item.Icon}
                    title={item.title}
                    text={item.text}
                    linkText={item.linkText}
                    link={item.link}
                />
            ))}
        </section>
    )
}