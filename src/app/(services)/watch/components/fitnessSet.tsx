import FitnessMan from "@/assets/img/watch/fitnessMan.png";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaApple } from "react-icons/fa";
import React from "react";

export function CreateIcon({
    icon
}: {
    icon: IconType
}): JSX.Element {
    const Icon = icon;
    return(
        <Icon 
            className="w-12 h-11 text-black"
        />
    )
}

export default function FitnessSet() {
    return(
        <section className="relative h-[645px] w-full px-[30px] pt-[80px] pb-[50px] mt-[220px]">
            <div className="flex justify-end items-center">
                <Image
                    src={FitnessMan}
                    className="absolute w-full h-[852px] z-10"
                    alt="Fitness man"
                />
                <article className="flex flex-col gap-2 z-10 items-center mr-[125px]">
                    <div className="flex">
                        <CreateIcon icon={FaApple} />
                        <h2 className="font-helvetica text-[43px] font-bold leading-[52.01px] tracking-[-0.144px] text-center text-black">
                            Fitness+
                        </h2>
                    </div>
                    <h3 className="font-helvetica text-[29px] font-bold leading-[36px] tracking-[0.128px] mt-6 text-center text-black w-[400px]">
                        Get 3 months free when you buy an Apple Watch.14
                    </h3>
                    {[{
                        text: "Shop Apple Watch",
                        link: ""
                    },
                    {
                        text: "Learn about Apple Fitness+",
                        link: ""
                    }].map((item, index) => (
                        <React.Fragment key={index}>
                            <Link href={item.link}>
                                <h5 className="font-helvetica text-[21px] font-normal leading-[25px] tracking-[0.231px] text-center text-light-blue">
                                    {item.text}
                                </h5>
                            </Link>
                        </React.Fragment>
                    ))}
                </article>
            </div>
        </section>
    )
}