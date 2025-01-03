import { productProps } from "@/utils/ProductArtArr";
import { productsMac } from "@/utils/productsMac";
import Link from "next/link";
import ProductArticle from "./productArt";

type FotlinkProps = {
    title: string;
    link: string | any;
}

const footerLinks: FotlinkProps[] = [
    {
        title: "Compare all Mac models",
        link: ""
    },
    {
        title: "Shop Mac",
        link: ""
    }
]

export default function Pazzle() {
    return(
        <section className="flex justify-center items-center bg-white">
            <div className="flex flex-col justify-between items-center">
                <h1 className="font-helvetica text-[43px] font-bold leading-[52.01px] tracking-[-0.144px] text-black mb-14">
                    Which Mac is right for you?
                </h1>
                <div className="flex flex-col justify-between items-center gap-7 w-full h-auto">
                    <h6 className="font-helvetica text-[17px] font-normal leading-[17px] tracking-[-0.357px] text-black">
                        Laptop
                    </h6>
                    <div className="flex justify-between gap-10 items-start w-full">
                        {productsMac.map((item) => (
                            <ProductArticle 
                                id={item.id}
                                key={item.id}
                                head={item.head}
                                body={item.body}
                            />
                        ))}
                    </div>
                </div>
                <footer className="flex items-center justify-between gap-10 mt-6">
                    {footerLinks.map((item) => (
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