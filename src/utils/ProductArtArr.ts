import Device from "@/assets/img/device1.png";
import Device2 from '@/assets/img/device2.png';
import Watch from '@/assets/img/watch.png';
import IPad from '@/assets/img/iPad.png';
import HomePad from '@/assets/img/homePod.png';
import MacBook from '@/assets/img/macBook.png';
import Fitness from '@/assets/img/fitness.png'
import Card from '@/assets/img/card.png';
import AirPod from '@/assets/img/airPods.png';

export type ProductArtProps = {
    id: number;
    arr: string[];
    title: string;
    text: string;
    model?: string;
    textColor: string;
    img: any;
}

export const links: string[] = ["Learn more", "Buy"]

export const productProps: ProductArtProps[] = [
    {
        id: 1,
        arr: links,
        title: "iPhone 15 Pro",
        text: "Pro. Beyond.",
        textColor: "white",
        img: Device
    },
    {
        id: 2,
        arr: links,
        title: "iPhone 14 Pro",
        text: "Two great sizes. Now with a splash of yellow.",
        textColor: "black",
        img: Device2
    },
    {
        id: 3,
        arr: links,
        title: "Watch",
        text: "A healthy leap ahead.",
        model: "series 8",
        textColor: "white",
        img: Watch
    },
    {
        id: 4,
        arr: links,
        title: "iPad",
        text: "Lovable. Drawable. Magical.",
        textColor: "black",
        img: IPad
    },
    {
        id: 5,
        arr: links,
        title: "MacBook Pro",
        text: "Supercharged by M2 Pro and M2 Max.",
        textColor: "white",
        img: MacBook
    },
    {
        id: 6,
        arr: links,
        title: "HomePod",
        text: "Profound sound.",
        textColor: "white",
        img: HomePad
    },
    {
        id: 7,
        arr: links,
        title: "AirPods Pro",
        text: "Up to 2x more Active Noise Cancellation.",
        textColor: "white",
        img: AirPod
    },
    {
        id: 8,
        arr: links,
        title: "Fitness+",
        text: "Welcome to the year of you. Now all you need is iPhone.",
        textColor: "black",
        img: Fitness
    },
    {
        id: 9,
        arr: links,
        title: "Card",
        text: "Get up to 3% Daily Cash back with every purchase.",
        textColor: "black",
        img: Card
    }
]