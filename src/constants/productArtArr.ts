import { ProductArtProps } from "@/types/typeProductArt";import Device from "@/assets/img/device1.png";

import Device2 from '@/assets/img/device2.png';
import Watch from '@/assets/img/watch.png';
import IPad from '@/assets/img/iPad.png';
import HomePad from '@/assets/img/homePod.png';
import MacBook from '@/assets/img/macBook.png';
import Fitness from '@/assets/img/fitness.png'
import Card from '@/assets/img/card.png';
import AirPod from '@/assets/img/airPods.png';

export const links: string[] = ["Learn more", "Buy"]

export const productProps: ProductArtProps[] = [
    {
        id: 1,
        arr: links,
        text: {
            title: "iPhone 15 Pro",
            textObj: "Pro. Beyond.",
            textColor: "white",
        },
        img: Device
    },
    {
        id: 2,
        arr: links,
        text: {
            title: "iPhone 14 Pro", 
            textObj: "Two great sizes. Now with a splash of yellow.",
            textColor: "black",
        },
        img: Device2
    },
    {
        id: 3,
        arr: links,
        text: {
            title: "Watch",
            textObj: "A healthy leap ahead.",
            textColor: "white",
        },
        model: "series 8",
        img: Watch
    },
    {
        id: 4,
        arr: links,
        text: {
            title: "iPad",
            textObj: "Lovable. Drawable. Magical.",
            textColor: "black",
        },
        img: IPad
    },
    {
        id: 5,
        arr: links,
        text: {
            title: "MacBook Pro",
            textObj: "Supercharged by M2 Pro and M2 Max.",
            textColor: "white",
        },
        img: MacBook
    },
    {
        id: 6,
        arr: links,
        text: {
            title: "HomePod",
            textObj: "Profound sound.",
            textColor: "white",
        },
        img: HomePad
    },
    {
        id: 7,
        arr: links,
        text: {
            title: "AirPods Pro", 
            textObj: "Up to 2x more Active Noise Cancellation.",
            textColor: "white",
        },
        img: AirPod
    },
    {
        id: 8,
        arr: links,
        text: {
            title: "Fitness+",
            textObj: "Welcome to the year of you. Now all you need is iPhone.",
            textColor: "black",
        },
        img: Fitness
    },
    {
        id: 9,
        arr: links,
        text: {
            title: "Card",
            textObj: "Get up to 3% Daily Cash back with every purchase.",
            textColor: "black",
        },
        img: Card
    }
]