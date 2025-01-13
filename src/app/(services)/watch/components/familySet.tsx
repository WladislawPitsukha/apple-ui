import Image from "next/image";
import WatchFamily from "@/assets/img/watch/watchFamily.png"
import Link from "next/link";

export default function FamilySet() {
    return(
        <section 
            className="flex items-center justify-around bg-custom-light-gray w-full h-auto mb-0 py-[150px] px-[80px]"
            style={{
                margin: "30px",
            }}
        >
            <article className="flex flex-col justify-between items-center gap-[9px] w-auto h-auto">
                <h3 className="font-helvetica text-[22px] font-bold leading-[28px] tracking-[0.216px] text-center text-black">
                    Family Setup
                </h3>
                <h1 className="font-helvetica text-[43px] font-bold leading-[52.01px] tracking-[-0.144px] text-center text-black w-[369px]">
                    Your family joined at the wrist.
                </h1>  
                <p className="font-helvetica text-[21px] font-bold leading-[25px] tracking-[0.231px] text-center text-black mt-2 w-[303px]">
                    Family members who don‘t have an iPhone can stay in touch with Apple Watch.
                </p>
                <div className="flex items-start justify-between mt-7 w-auto h-auto gap-5">
                    <Link href={""}>
                        <button className="border border-light-blue rounded-full px-[18px] py-[9px] bg-custom-light-gray">
                            <h5 className="font-helvetica text-[17px] font-normal leading-[21px] tracking-[-0.374px] text-center text-light-blue">
                                Learn more
                            </h5>
                        </button>
                    </Link>
                    <Link href={""}>
                        <h5 className="self-start font-helvetica text-[17px] font-normal leading-[21px] tracking-[-0.374px] text-center text-light-blue">
                            Shop Apple Watch
                        </h5>
                    </Link>
                </div>
            </article>
            <Image 
                src={WatchFamily}
                className="w-auto h-auto"
                alt="Apple Watch"
            />
        </section>
    )
}