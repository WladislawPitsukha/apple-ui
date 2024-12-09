import Image from "next/image";
import Link from "next/link";

import Mac1 from "@/assets/img/macbook/mac1.png";
import Mac2 from "@/assets/img/macbook/mac2.png";

export default function MacBookPage() {
    return(
        <div className="flex flex-col items-center justify-between w-full">
            <section className="flex flex-col justify-center items-center bg-black w-full h-auto gap-[31px] py-[86px] pb-24">
                <h1
                    className="font-helvetica text-[50px] font-bold leading-[60px] tracking-[-0.28px] text-center text-custom-white"
                >
                    Introducing the new <br /> MacBook Pro and Mac mini.
                </h1>
                <Link href="">
                    <button className="rounded-full bg-white py-2 px-6">
                        <h5 className="font-helvetica text-[17px] font-normal leading-[20px] tracking-[-0.374px] text-center text-black">
                            Watch the announcement
                        </h5>
                    </button>
                </Link>
            </section>
            <hr className="h-[10px] w-full bg-custom-white" />
            <section className="flex flex-col justify-center items-center bg-black w-full h-[767.95px] z-10">
                <article className="flex flex-col mt-14 mb-24">
                    <div className="flex flex-col items-center justify-between gap-8">
                        <div className="flex flex-col items-center justify-between gap-[15px]">
                            <h5 className="font-helvetica text-[17px] font-bold leading-[25px] tracking-[-0.374px] text-center text-custom-orange">
                                New
                            </h5>
                            <h1 className="font-helvetica text-[50px] font-bold leading-[60px] tracking-[-0.28px] text-center text-custom-white">
                                MacBook Pro
                            </h1>
                            <h3 className="font-helvetica text-[25px] font-bold leading-[32px] tracking-[0.196px] text-center text-custom-white">
                                Mover. Maker. Boundary breaker.
                            </h3>
                        </div>
                        <div className="flex flex-col items-center justify-between gap-3">
                            <h4 className="font-helvetica  text-custom-white">
                                From $1999
                            </h4>
                            <div className="flex items-start justify-between gap-6">
                                <Link href="">
                                    <button className="rounded-full px-4 py-2 bg-light-blue">
                                        <h3 className="font-helvetica  text-custom-white">
                                            Buy
                                        </h3>
                                    </button>
                                </Link>
                                <Link href="">
                                    <h5 className="font-helvetica  text-light-blue">
                                        Learn more
                                    </h5>
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
                <Image 
                    src={Mac1}
                    alt="macbook"
                    className="m-0 bottom-0 right-0 w-auto h-auto"
                />
            </section>
            <hr className="h-[10px] w-full bg-custom-white z-10" />
            <section className="relative flex justify-center items-start bg-black w-full h-[732px]">
                <article className="flex items-start justify-between gap-6 mt-[60px] pt-[202.95px] z-10">
                    <Link href="">
                        <button className="rounded-full px-4 py-2 bg-light-blue">
                            <h3 className="font-helvetica  text-custom-white">
                                Buy
                            </h3>
                        </button>
                    </Link>
                    <Link href="">
                        <h5 className="font-helvetica  text-light-blue">
                            Learn more
                        </h5>
                    </Link>
                </article>
                <Image 
                    className="absolute bottom-0 w-auto h-auto bg-contain"
                    src={Mac2}
                    alt="macbook"
                />
            </section>
            <hr className="h-[10px] w-full bg-custom-white" />
            <section className="flex flex-col justify-center items-center">

            </section>
        </div>
    )
}