import Image1 from "@/assets/img/macbook/image1.png";
import Image2 from "@/assets/img/macbook/image2.png";
import Image3 from "@/assets/img/macbook/image3.png";

export type CardOfferProps = {
    id: number;
    widthTitle: number;
    cardWidth?: string;
    flexType: string;
    partTitle?: string;
    title: string;
    span?: string;
    desc?: string;
    link: string;
    img: any;
}

export const arrCardOffer: CardOfferProps[] = [
    {
        id: 1,
        widthTitle: 500,
        flexType: "col",
        title: "Mac does",
        span: "that.",
        desc: "Discover what Mac can do for you.",
        link: "",
        img: Image1,
    },
    {
        id: 2,
        widthTitle: 500,
        flexType: "col",
        partTitle: "Continuity",
        title: "All your devices. One seamless experience.",
        link: "",
        img: Image2,
    },
    {
        id: 3,
        widthTitle: 330,
        cardWidth: "full",
        flexType: "row",
        partTitle: "macOS Ventura",
        title: "Works smarter. Plays harder. Goes further.",
        link: "",
        img: Image3,
    },
]