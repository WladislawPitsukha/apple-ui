import Link from "next/link";
import { arrLinksPazzle } from "./constants/arrLinksPazzle";
import { arrProductsIphone } from "@/constants/productsIphone";
import ProductArticle from "../../mac/components/productArt";
import ProductArtIp from "./productArtIp";

export default function PazzleProducts() {
    return(
        <section className="flex justify-center items-center bg-white">
            <div className="flex flex-col justify-between items-center">
                <h1 className="font-helvetica text-[43px] font-bold leading-[52.01px] tracking-[-0.144px] text-black mb-14">
                    Which Mac is right for you?
                </h1>
                <div className="flex flex-col justify-center items-center gap-7 w-full h-auto">
                    <div className="flex justify-between gap-10 items-start w-full">
                        {arrProductsIphone.map((item) => (
                            <ProductArtIp 
                                {...item}
                            />
                            
                        ))}
                    </div>
                </div>
                <footer className="flex items-center justify-between gap-10 mt-6">
                    {arrLinksPazzle.map((item) => (
                        <Link href={item.link}>
                            <h5 className="font-helvetica text-[21px] font-normal leading-[29px] tracking-[0.231px] text-light-blue">
                                {item.title}
                            </h5>
                        </Link>
                    ))}
                </footer>
            </div>
        </section>
    )
}