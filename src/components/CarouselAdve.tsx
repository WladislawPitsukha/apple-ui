"use client";

import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import React from "react";

interface CarouselProps {
    images: (string | StaticImageData)[];
    interval?: number;
}

export default function CarouselAdve({
    images,
    interval = 1000,
}: CarouselProps) {
    const [curIndex, setCurIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            )
        }, interval);
        return () => clearInterval(timer);
    }, [images.length, interval])

    const SwitchColor = ({i, j}: {i: number, j: number}) => {
        const colors = ['bg-black', 'bg-white', 'bg-slate-500', 'bg-rose-100', 'bg-blue-300', 'bg-green-200']
        const colorIndex = Math.abs((i * 3 + j * 2) % colors.length);

        if(i === j) {
            return colors[0]
        }

        return colors[colorIndex];
    }
    
    return (
        <div className="flex flex-col justify-center items-center w-auto h-auto overflow-hidden">
            <div className="relative w-[239px] h-[257px]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-auto h-auto transition-opacity duration-500 ${
                            index === curIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <Image 
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className='h-[257px] min-w-[188px] max-w-[239px]'
                        />
                    </div>
                ))}
            </div>
            <div className="mt-4 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        className={`w-2 h-2 rounded-full border border-black ${
                            SwitchColor({i: index, j: curIndex})
                        }`}
                        onClick={() => setCurIndex(index)}
                    >
                    </button>
                ))}
            </div>
        </div>
    );
}