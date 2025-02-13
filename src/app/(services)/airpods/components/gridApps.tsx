import Image from "next/image"

import { GridAppMainSet } from "../types/typeGridApp"

import { FaPlus } from "react-icons/fa";
import { arrGridApps } from "../constants/arrGridApp";

export function CardGridApp({
    id,
    image,
    title,
    links,
    padding,
}: GridAppMainSet) {
    const {
        img,
        imgH,
        imgW,
    } = image;

    const {
        infoLink,
        addLink,
    } = links;

    const {
        pad,
        padTop,
        padLeft,
        padBottom,
        padRight,
    } = padding;

    return(
        <article 
            key={id}
            className={`flex flex-col items-center justify-between w-[383px] h-[484px] rounded-[18px] bg-white px-5`}
            style={{

            }}
        >
            <div className="flex justify-center items-center w-[343] h-[376px]">
                <Image 
                    className={imgH === "number" && imgW === "number" ? `h-[${imgH}px] w-[${imgH}px]` : `h-auto w-auto`}
                    src={img}
                    alt="Functions"
                />
            </div>
            <div className="flex items-end justify-between w-full mb-7">
                <h3 className="font-helvetica text-[22px] font-bold leading-[28px] tracking-[0.22px] text-custom-dark">
                    {title}
                </h3>
                <div className="flex items-center justify-center w-auto h-auto bg-black rounded-full p-[8.25px]">
                    <FaPlus className="text-white w-[16.5px] h-[16.5px]" />
                </div>
            </div>
        </article>
    )
}

export function BlockDivCard({
    i, j
}: {
    i: number, j: number
}) {
    return(
        <div className="flex items-center justify-between w-full h-auto">
            {arrGridApps.slice(i, j).map((item, index) => (
                <CardGridApp 
                    key={index}
                    {...item}
                />
            ))}
        </div>
    )
}

export default function GridApps() {
    return(
        <section className="flex flex-col w-full h-auto items-center gap-12 bg-fon-light-gray pt-[144px] pb-[82px] px-5">
            <h1 className="font-helvetica text-[64px] font-bold leading-[64px] tracking-[-0.06px] text-center text-black w-[700px]">
                A magical connection to your devices.
            </h1>
            <div className="flex flex-col items-center justify-center w-full gap-[30px] px-8">
                {[
                    [0, 3],
                    [3, 7]
                ].map((arr, i) => (
                    <BlockDivCard 
                        key={i}
                        i={arr[0]}
                        j={arr[1]}
                    />
                ))}
            </div>
        </section>
    )
}