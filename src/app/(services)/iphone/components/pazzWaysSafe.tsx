import Link from "next/link"
import { arrWaySave, PartnersProps, WaySaveProps } from "../types/typeWaySave"
import Image from "next/image"
import "../global.css"

export async function CardPartner({
    id,
    img,
    text
}: PartnersProps) {
    return(
        <article
            className="flex flex-col items-center w-auto h-auto px-[55px] justify-between gap-[13.59px]"
            key={id}
        >
            <Image 
                src={img}
                alt="Partners"
                className={`w-[165px] h-[76px]`}
            />
            <p className="font-helvetica w-[139px] text-[17px] font-normal leading-[25px] tracking-[-0.374px] text-center text-custom-dark">
                {text}
            </p>
        </article>
    )
}

export async function CardWaySave({
    id,
    flex,
    descTitle,
    descText,
    marTop,
    marX,
    maxWidth,
    link,
    linkText,
    img,
    imgSize,
    partners
}:WaySaveProps) {
    const getMarginClasses = (marTop: string, marX: string) => {
        return `mt-[${marTop}] mx-[${marX}]`
    }

    const partnerData = partners?.[0]
    const partnerId = partnerData?.id
    const partnerImg = partnerData?.img
    const partnerText = partnerData?.text

    return(
        <article
            className={`flex flex-${flex} w-full h-auto ${id == 4 ? "cardSave" : ""} bg-white`}
            style={{
                display: id === 4 ? "flex" : "",
                justifyContent: id === 4 ? "center" : "",
                alignItems: id === 4 ? "center" : "",
                height: id === 4 ? "560px" : "auto",
            }}
            key={id}
        >
            <div
                className={`flex flex-col h-auto items-center gap-[1px]`}
                style={{
                    marginTop: `${marTop}`,
                    marginLeft: `${marX}`,
                    marginRight: `${marX}`
                }}
            >
                <h2 
                    className={`font-helvetica text-[48px] font-bold leading-[52.01px] tracking-[-0.144px] text-center text-custom-dark`}
                    style={{
                        maxWidth: `${maxWidth}px`
                    }}
                >
                    {descTitle}
                </h2>
                <p className="font-helvetica text-[19px] w-[428px] leading-[29px] tracking-[0.231px] text-center text-custom-dark mt-6">
                    {descText}
                </p>
                <Link href={link}>
                    <h5 className="font-helvetica text-[21px] leading-[29px] tracking-[0.231px] text-center text-light-blue">
                        {linkText}
                    </h5>
                </Link>
            </div>
            {id == 1 || id == 3 ? (
                <Image 
                    src={img}
                    className={`bg-${imgSize} w-auto h-auto`}
                    alt="Product/'s"
                />
            ): null}
            {id == 2 ? (
                <div className="flex flex-col items-center justify-between gap-[26px]">
                    <div className="flex justify-between items-center">
                        {partners?.slice(0, 2).map((item) => (
                            <CardPartner {...item} />
                        ))}
                    </div>
                    {partners?.[2] && <CardPartner {...partners[2]} />}
                </div>
            ): null}
        </article>
    )
}

export default function PazzWaysSave() {
    return(
        <section className={`flex flex-col items-center justify-around w-full h-auto bg-fon-light-gray`}>
            <h1 className="font-helvetica text-[51px] mt-[106px] font-bold leading-[60px] tracking-custom-1 text-center text-custom-dark">
                Ways to save on iPhone
            </h1>
            <div className={`flex flex-col items-center justify-between gap-[40px] pt-[70px] px-[30px] pb-[30px]`}>
                <CardWaySave 
                    {...arrWaySave[0]}
                />
                <div className="flex gap-[40px]">
                    {arrWaySave.slice(1, 3).map((item) => (
                        <CardWaySave {...item} />
                    ))}
                </div>
                <CardWaySave
                    {...arrWaySave[3]}
                />
            </div>
        </section>
    )
}