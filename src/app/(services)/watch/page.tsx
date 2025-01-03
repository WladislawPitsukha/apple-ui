import Image from "next/image";
import Link from "next/link";
import { FaApple } from "react-icons/fa";

import Watch1 from "@/assets/img/watch/watch1.png";
import Watch2 from "@/assets/img/watch/watch2.png";
import Watch3 from "@/assets/img/watch/watch3.png";

export type SectLinkProps = {
    title: string;
    link: string;
}

export const sectLink1: SectLinkProps[] = [
    {
        title: "Learn more",
        link: ""
    },
    {
        title: "Watch the film",
        link: ""
    }
]

export default function WatchPage() {
    return(
        <div className="flex flex-col items-center justify-center">
            <section className="flex flex-col items-center justify-between bg-custom-light-gray w-full pt-[65px] gap-[65px] pb-[150px] h-auto">
                <article className="flex flex-col items-center justify-between w-auto gap-[9px]">
                    <div className="flex flex-col justify-between items-center gap-1">
                        <div className="flex justify-center items-start gap-2">
                            <FaApple 
                                className="text-black w-6 h-6"
                            />
                            <h2 className="font-helvetica font-bold uppercase text-[30px] leading-[25px] tracking-[0.231px] text-black">
                                Watch
                            </h2>
                        </div>
                        <h6 className="font-helvetica uppercase font-bold text-custom-orange">
                            Ultra
                        </h6>
                    </div>
                    <h1 className="font-helvetica text-[44px] font-bold leading-[52.01px] text-center text-black">
                        Adventure awaits.
                    </h1>   
                    <h5 className="font-helvetica text-[21px] font-bold leading-[29px] tracking-[0.0945px] text-center text-black mt-3">
                        $799
                    </h5>
                    <div className="flex flex-col items-center justify-between gap-2 amt-4">
                        <button className="flex justify-center items-center px-4 py-2 rounded-full bg-light-blue">
                            <h4 className="font-helvetica text-[17px] font-normal leading-[20px] tracking-[-0.374px] text-center text-light-white">
                                Buy
                            </h4>
                        </button>
                        <div className="flex justify-between items-start gap-5">
                            {sectLink1.map((item) => (
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
                    src={Watch1}
                    alt="image"
                    className="w-full h-auto"
                />
            </section>
            <section className="flex justify-around items-center w-full h-auto bg-black">
                <Image
                    src={Watch2}
                    alt="image"
                    className="w-[381px] h-[775px]"
                />
                <article className="flex flex-col items-center justify-between w-auto gap-[9px] my-[250px]">
                    <div className="flex flex-col justify-between items-center gap-1">
                        <div className="flex justify-center items-start gap-2">
                            <FaApple 
                                className="text-light-white w-6 h-6"
                            />
                            <h2 className="font-helvetica font-bold uppercase text-[30px] leading-[25px] tracking-[0.231px] text-light-white">
                                Watch
                            </h2>
                        </div>
                        <h6 className="font-helvetica uppercase text-custom-red">
                            series 8
                        </h6>
                    </div>
                    <h1 className="font-helvetica text-[44px] font-bold leading-[52.01px] text-center text-light-white">
                        A healthy leap ahead.
                    </h1>   
                    <h5 className="font-helvetica text-[21px] font-bold leading-[29px] tracking-[0.0945px] text-center text-light-white mt-3">
                        From $399
                    </h5>
                    <div className="flex flex-col items-center justify-between gap-2 amt-4">
                        <button className="flex justify-center items-center px-4 py-2 rounded-full bg-light-blue">
                            <h4 className="font-helvetica text-[17px] font-normal leading-[20px] tracking-[-0.374px] text-center text-light-white">
                                Buy
                            </h4>
                        </button>
                        <div className="flex justify-between items-start gap-5">
                            {sectLink1.map((item) => (
                                <Link href={item.link}>
                                    <h3 className="font-helvetica text-[21px] font-normal leading-[25px] tracking-[0.231px] text-center text-light-blue">
                                        {item.title}
                                    </h3>
                                </Link>
                            ))}
                        </div>
                    </div>
                </article>
            </section>
            <section className="flex justify-around items-center w-full h-auto bg-light-white py-[105px]">
                <article className="flex flex-col items-center justify-between w-auto gap-[9px]">
                    <div className="flex flex-col justify-between items-center gap-1">
                        <div className="flex justify-center items-start gap-2">
                            <FaApple 
                                className="text-black w-6 h-6"
                            />
                            <h2 className="font-helvetica font-bold uppercase text-[30px] leading-[25px] tracking-[0.231px] text-black">
                                Watch
                            </h2>
                        </div>
                        <h6 className="font-helvetica uppercase text-custom-red">
                            series 8
                        </h6>
                    </div>
                    <h1 className="font-helvetica text-[44px] font-bold leading-[52.01px] text-center text-black w-[252.38px]">
                        A great deal <br /> to love..
                    </h1>   
                    <h5 className="font-helvetica text-[21px] font-bold leading-[29px] tracking-[0.0945px] text-center text-black mt-3">
                        $799
                    </h5>
                    <div className="flex items-start justify-between gap-6 mt-4">
                        <button className="flex justify-center items-center px-4 py-2 rounded-full bg-light-blue">
                            <h4 className="font-helvetica text-[17px] font-normal leading-[20px] tracking-[-0.374px] text-center text-light-white">
                                Buy
                            </h4>
                        </button>
                        <div className="flex justify-between items-start gap-5">
                            <Link href="">
                                <h3 className="font-helvetica text-[21px] font-normal leading-[25px] tracking-[0.231px] text-center text-light-blue">
                                    Learn more
                                </h3>
                            </Link>
                        </div>
                    </div>
                </article>
                <Image
                    src={Watch3}
                    alt="image"
                    className="w-[505px] h-[505px]"
                />
            </section>
        </div>
    )
}