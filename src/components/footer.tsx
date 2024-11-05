import { arrFotProps } from "@/types/typeFotArr";
import React from "react";

export default function Footer() {
    return(
        <footer className="flex flex-col justify-between w-full">
            <section className="">

            </section>
            <section className="">

            </section>
            <section className="flex flex-col items-start gap-5">
                <article className="flex gap-5 items-center justify-between">
                    <h3 className="font-helvetica text-xs font-normal leading-4 text-left text-custom-gray">
                        More ways to shop: <a className="text-custom-blue" href="">Find an Apple Store</a> or <a className="text-custom-blue" href="">other retailer</a> near you.
                    </h3>
                    <h3 className="font-helvetica text-xs font-normal leading-4 text-left text-custom-gray">
                        Or call 1-800-MY-APPLE.
                    </h3>
                </article>
                <hr className="border-[1px] border-custom-gray" />
                <article className="flex justify-between items-center w-full">
                    <h3 className="font-helvetica text-xs font-normal leading-4 text-left text-custom-gray">
                        Copyright © 2023 Apple Inc. All rights reserved.
                    </h3>
                    <div className="flex items-center justify-between">
                        {arrFotProps.map((item, index) => (
                            <React.Fragment key={index}>
                                {index > 1 && <hr className="border-l-2 border-custom-gray" />}
                                <a href={item.link}>
                                    <h4
                                        className="text-custom-gray font-helvetica text-xs font-bold leading-4 text-left m-2"
                                    >
                                        {item.title}
                                    </h4>
                                </a>
                            </React.Fragment>
                        ))}
                    </div>
                    <h3 className="font-helvetica text-xs font-normal leading-4 text-left text-custom-gray">
                        United States
                    </h3>
                </article>
            </section>
        </footer>
    )
}