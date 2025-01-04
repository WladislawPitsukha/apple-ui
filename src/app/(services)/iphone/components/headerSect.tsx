import Link from "next/link"
import { arrCardSect, CardSectProps } from "../types/typeCardSect"
import Image from "next/image"

export function CardSection({
    id,
    flexDir,
    update,
    model,
    title,
    widthTitle,
    price,
    priceMonth,
    period,
    buyLink,
    learnLink,
    img,
    imgHeight,
    imgWidth,
    textColor,
    fonColor,
    gapNum,
    padTop,
    padBut
}: CardSectProps) {
    return(
        <section 
            className={`flex flex-${flexDir} justify-between items-center bg-${fonColor} gap-${gapNum} h-full w-full px-52 pt-${padTop} pb-${padBut}`}
            key={id}
        >
            <article className="flex flex-col items-center justify-center gap-1 h-auto w-auto">
                <h5 className="font-helvetica m-0 text-[24px] leading-[25px] text-center text-custom-red">
                    {update}
                </h5>
                <h3 className={`font-helvetica text-[25px] font-bold leading-[25px] tracking-tightest text-center text-${textColor} mt-[9px]`}>
                    {model}
                </h3>
                <h1 className={`font-helvetica text-[43px] font-bold leading-[52.01px] tracking-tighter text-${textColor} text-center mt-3 w-[${widthTitle}]`}>
                    {title}
                </h1>
                <p className={`font-helvetica text-[19px] font-normal leading-[29px] tracking-tight text-center text-${textColor} mt-5`}>
                    From ${price} or ${priceMonth}/mo. for {period} mo. before trade‑in2
                </p>
                <div className="flex items-center justify-center mt-[6px] gap-7">
                    <Link href={buyLink}>
                        <button className="flex justify-center items-center px-4 py-2 bg-light-blue rounded-3xl">
                            <h6 className="font-helvetica text-[17px] leading-[20px] tracking-tightest text-center text-white">
                                Buy
                            </h6>
                        </button>
                    </Link>
                    <Link href={learnLink}>
                        <h4 className="font-helvetica text-[21px] leading-[29px] tracking-tighter text-center text-light-blue ">
                            Learn more
                        </h4>
                    </Link>
                </div>
            </article>
            <Image 
                src={img}
                className={`h-${imgHeight} w-${imgWidth}`}
                alt="Product"
            />
        </section>
    )
}

export default function HeaderSect() {
    return(
        <header className="flex flex-col items-center">
            {arrCardSect.map((card) => (
                <CardSection 
                    id={card.id}
                    flexDir={card.flexDir}
                    update={card.update}
                    model={card.model}
                    title={card.title}
                    widthTitle={card.widthTitle}
                    price={card.price}
                    priceMonth={card.priceMonth}
                    period={card.period}
                    buyLink={card.buyLink}
                    learnLink={card.learnLink}
                    img={card.img}
                    imgHeight={card.imgHeight}
                    imgWidth={card.imgWidth}
                    textColor={card.textColor}
                    fonColor={card.fonColor}
                    gapNum={card.gapNum}
                    padTop={card.padTop}
                    padBut={card.padBut}
                />
            ))}
            <section className="flex items-center justify-center p-[15px]">
                <div className="flex items-center justify-start rounded-[34px]">
                    <article className="flex flex-col items-start gap-2">
                        <h4 className="font-helvetica text-[21px] font-bold leading-[28px] tracking-tight text-left text-white">
                            A Guided Tour of
                        </h4>
                        <div className="flex flex-col items-start">
                            {[{
                                title: "iPhone 14 &",
                                link: "",
                            }, 
                            {
                                title: "iPhone 14 Pro",
                                link: "",
                            }].map((item, index) => (
                                <Link href={item.link}>
                                    <h2
                                        className="font-helvetica text-[43px] font-bold leading-[52.01px] tracking-tighter text-left text-white" 
                                        key={index}
                                    >
                                        {item.title}
                                    </h2>
                                </Link>
                            ))}
                        </div>
                    </article>
                    <Link href={""}>
                        <button className="flex items-center justify-center rounded-full px-4 py-2 bg-white">
                            <h5 className="font-helvetica text-[17px] leading-[20px] tracking-tightest text-center text-black">
                                Watch the film
                            </h5>
                        </button>
                    </Link>
                </div>
            </section>
        </header>
    )
}