import { ProductArtProps } from "@/utils/ProductArtArr";
import Image from "next/image";

export default function ProductArt({
        id,
        arr, 
        title, 
        text, 
        model,
        textColor,
        img
    }: ProductArtProps) {
    return(
        <article className={`${id == 2 ? "bg-white" : ""} flex flex-col items-center gap-[15px] pt-14 pb-[511px] z-10 relative ${id == 2 || id == 4 || id == 8 || id == 7 || id == 8|| id == 9  ? "bg-light-white" : "bg-black"}`}>
            <div className="flex flex-col items-center z-20 gap-[15px]">
                <h1 className={`font-helvetica text-[51px] font-bold leading-[60px] tracking-custom-1 text-center text-${textColor}`}>
                    {title}
                </h1>
                <h4 className={`${id == 3 ? "" : "hidden"} font-helvetica text-[22px] w-[330px] font-bold leading-[31px] tracking-custom-2 text-center uppercase text-red-800`}>
                    {model}
                </h4>
                <h3 className={`font-helvetica text-[24px] w-[330px] font-normal leading-[31px] tracking-custom-2 text-center text-${textColor}`}>
                    {text}
                </h3>
            </div>
            <div className="flex gap-10">
                {arr.map((item, index) => (
                    <a href="" className="no-underline z-20" key={index}>
                        <h4 
                            className={`font-helvetica text-[19px] font-normal leading-[29px] tracking-custom-3 text-center ${id == 7 ? "text-custom-white" : "text-custom-blue"}` }
                            key={index}
                        >
                            {item}
                        </h4>
                    </a>
                ))}
            </div>
            <Image 
                src={img}
                className={`${id == 8 || id == 9 || id == 4 || id == 2 ? "h-[450px]" : ""} absolute bottom-0 ${id == 7 || id == 1 ? "h-full" : ""}`}
                alt="photo"
            />
        </article>
    )
}