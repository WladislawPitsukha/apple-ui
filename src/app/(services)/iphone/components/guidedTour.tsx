import '../global.css'
import Link from "next/link";
import React from "react";

export default function GuatedTour() {
    return(
        <section className="flex items-center w-auto rounded-[34px] h-auto p-[15px] image-fon mx-[15px] mt-[15px] mb-[9px] bg-white">
            <div className="flex flex-col items-start justify-start rounded-[34px] gap-[21px] ml-[218px]">
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
                            <React.Fragment key={index}>
                                <Link href={item.link}>
                                    <h2
                                        className="font-helvetica text-[43px] font-bold leading-[52.01px] tracking-tighter text-left text-white" 
                                        key={index}
                                    >
                                        {item.title}
                                    </h2>
                                </Link>
                            </React.Fragment>
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
    )
}