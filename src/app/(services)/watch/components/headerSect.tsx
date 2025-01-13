import Image from "next/image";
import { arrSectCard, SectCardProps } from "../types/typeSectCard";
import Link from "next/link";
import { FaApple } from "react-icons/fa6";

export function CardProduct({
    flex, 
    bgColor,
    gap,
    modelProduct,
    verProduct,
    textColor,
    textWidth,
    title,
    textPrice,
    numPrice,
    arrLinks,
    img,
    imgAuto,
    imgHeight,
    imgWidth,
    buyLink,
}: SectCardProps) {
    return(
        <section className={`flex flex-${flex} items-center justify-around bg-${bgColor} w-full pt-[65px] gap-[${gap}px] pb-[150px] h-auto`}>
            <article className={`flex flex-col items-center justify-between w-auto gap-[9px]`}>
                <div className="flex flex-col justify-between items-center gap-1">
                    <div className="flex justify-center items-start gap-2">
                        <FaApple className={`text-${textColor} w-6 h-6`} />
                        <h2 className={`font-helvetica font-bold uppercase text-[30px] leading-[25px] tracking-[0.231px] text-${textColor}`}>
                            {modelProduct}
                        </h2>
                    </div>
                    <h6 className="font-helvetica uppercase font-bold text-custom-orange">
                        {verProduct}
                    </h6>
                </div>
                <h1 className={`font-helvetica text-[44px] font-bold leading-[52.01px] w-[${textWidth}px] text-center text-${textColor}`}>
                    {title}
                </h1>
                <h5 className={`font-helvetica text-[21px] font-bold leading-[29px] tracking-[0.0945px] text-center text-${textColor} mt-3`}>
                    {textPrice} ${numPrice}
                </h5>
                <div className="flex flex-col items-center justify-between gap-2 mt-4">
                    <Link href={buyLink}>
                        <button className="flex justify-center items-center px-4 py-2 rounded-full bg-light-blue">
                            <h4 className="font-helvetica text-[17px] font-normal leading-[20px] tracking-[-0.374px] text-center text-light-white">
                                Buy
                            </h4>
                        </button>
                    </Link>
                    <div className="flex justify-between items-start gap-5">
                        {arrLinks.map((item) => (
                            <Link href={item.link}>
                                <h3 className="font-helvetica text-[21px] font-normal leading-[25px] tracking-[0.231px] text-center text-light-blue">
                                    {item.title}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </article>
            <Image 
                src={img}
                className={`${imgAuto ? `h-[${imgHeight}px] w-[${imgWidth}px]` : `h-${imgHeight} w-${imgWidth}`}`}
                alt="Products"
            />
        </section>
    )
}

export default function HeaderSect() {
    return(
        <header className="flex flex-col items-center justify-center w-full h-auto">
            {arrSectCard.map((item, index) => (
                <CardProduct
                    id={index}
                    flex={item.flex}
                    bgColor={item.bgColor}
                    gap={item.gap}
                    modelProduct={item.modelProduct}
                    verProduct={item.verProduct}
                    textColor={item.textColor}
                    textWidth={item.textWidth}
                    title={item.title}
                    textPrice={item.textPrice}
                    numPrice={item.numPrice}
                    buyLink={item.buyLink}
                    arrLinks={item.arrLinks}
                    img={item.img}
                    imgAuto= {item.imgAuto}
                    imgHeight={item.imgHeight}
                    imgWidth={item.imgWidth}
                />
            ))}
        </header>
    )
}