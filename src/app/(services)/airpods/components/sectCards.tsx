import Link from "next/link"
import { CardPodMainSet } from "../types/typeCardPod"
import { arrCardPod } from "../constants/arrCardPod";

import "../global.css"
import Image from "next/image";

export function CardAirPod({
    head,
    text,
    link,
    image,
}: CardPodMainSet) {
    const {id, zIndex, bgColor, textColor, textSize, heightBlock} = head;
    const {mainTitle, addText, price} = text;
    const {img, imgW, imgH, imgFon, imgFonBool} = image;
    const {mainLink, addLink} = link;
    return(
        <article 
            className={`relative flex flex-col justify-center items-center w-full h-auto bg-${bgColor} rounded-[18px]`}
            style={{
                height: heightBlock + "px",
                backgroundImage: imgFonBool === true ? imgFon : null,
                backgroundSize: imgFonBool === true ? "cover" : undefined
            }}
        >
            <div className={`flex flex-col justify-center items-center`}>
                <div className={`flex flex-col justify-between items-center gap-3 z-${zIndex}`}>
                    <h1 
                        className={`font-helvetica font-bold leading-[96px] tracking-[-0.22px] text-center`}
                        style={{
                            color: textColor,
                            fontSize: `${textSize}px`
                        }}
                    >
                        {mainTitle}
                    </h1>
                    <div className="flex flex-col justify-center items-center">
                        <h3 className={`font-helvetica text-[20px] font-bold leading-[29px] tracking-[0.23px] text-center text-${textColor}`}>
                            {addText} {addText === "" ? null : "generation"}
                        </h3>
                        <h5 className={`font-helvetica text-[21px] font-normal leading-[29px] tracking-[0.23px] text-center text-${textColor}`}>
                            {id === 2 ? "from" : null} ${price}
                        </h5>
                    </div>
                </div>
                <div className={`absolute bottom-0 flex items-start justify-between gap-[18px] mb-[38px] justify-self-end z-${zIndex}`}>
                    <Link href={addLink}>
                        <button 
                            className={`flex justify-center items-center py-3 px-[22px] w-auto h-auto rounded-full ${textColor === "white" ? `bg-white` : `bg-custom-blue`}`}
                        >
                            <h6 
                                className={`font-helvetica text-[17px] font-normal leading-[20px] tracking-[-0.37px] text-center ${textColor === "white" ? `text-custom-dark` : `text-white`}`}
                            >
                                Buy
                            </h6>
                        </button>
                    </Link>
                    <Link href={mainLink}>
                        <h4 
                            className={`font-helvetica text-[21px] font-normal leading-[29px] tracking-[0.23px] text-center ${textColor === "white" ? `text-white` : `text-custom-blue`}`}
                        >
                            Learn more
                        </h4>
                    </Link>
                </div>
                <Image 
                    src={img}
                    className={`absolute top-0 z-0 ${
                        imgH === "string" && imgW == "string" ? `w-${imgW} h-${imgH}` : `w-[${imgW}px] h-[${imgH}px]`
                    }`}
                    alt="Image Art"
                />
            </div>
        </article>
    )
}

export default function SectCards() {
    return(
        <section className="flex flex-col w-full h-auto bg-fon-light-gray">
            <div className="flex items-center justify-center gap-[18px] bg-white py-3">
                <h4 className="font-helvetica text-base font-normal leading-4 tracking-[-0.12px] text-custom-dark">
                    Get 6 months of Apple Music free with your AirPods.*
                </h4>
                <Link href={``}>
                    <h5 className="font-helvetica text-base font-normal leading-4 tracking-[-0.12px] text-custom-blue">
                        Learn more
                    </h5>
                </Link>
            </div>
            <div className="p-[30px] bg-white">
                {arrCardPod.slice(0, 1).map((item) => (
                    <CardAirPod 
                        {...item}
                    />
                ))}
            </div>
            <div className="flex flex-col w-full h-auto gap-[30px] p-[30px] mt-[30px]">
                {arrCardPod.slice(1, 4).map((item) => (
                    <CardAirPod 
                        {...item}
                    />
                ))}
            </div>
        </section>
    )
}