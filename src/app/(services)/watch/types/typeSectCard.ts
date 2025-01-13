import Product1 from '@/assets/img/watch/watch1.png';
import Product2 from '@/assets/img/watch/watch2.png';
import Product3 from '@/assets/img/watch/watch3.png';

export type SectCardProps = {
    id?: number;
    flex: string;
    bgColor: string;
    gap: number;
    modelProduct: string;
    verProduct: string;
    textColor: string;
    textWidth: number;
    title: string;
    textPrice: string;
    numPrice: number;
    buyLink: string;
    arrLinks: CardLinksProps[];
    img: any | string;
    imgAuto: boolean;
    imgHeight?: number | string;
    imgWidth?: number | string;
}

export type CardLinksProps = {
    title: string;
    link: string;
}

export const arrSectCard: SectCardProps[] = [
    {
        id: 1,
        flex: "col",
        bgColor: "bg-custom-light-gray",
        gap: 65,
        modelProduct: "Watch",
        verProduct: "Ultra",
        textColor: "black",
        textWidth: 379,
        title: "Adventure awaits",
        textPrice: "",
        numPrice: 799,
        buyLink: "",
        arrLinks: [
            {
                title: "Learn more",
                link: "",
            },
            {
                title: "Watch the film",
                link: "",
            }
        ],
        img: Product1,
        imgAuto: false,
        imgHeight: "auto",
        imgWidth: "full",
    },
    {
        id: 2,
        flex: "row-reverse",
        bgColor: "black",
        gap: 0,
        modelProduct: "Watch",
        verProduct: "series 8",
        textColor: "light-white",
        textWidth: 452,
        title: "A healthy leap ahead.",
        textPrice: "From",
        numPrice: 399,
        buyLink: "",
        arrLinks: [
            {
                title: "Learn more",
                link: "",
            },
            {
                title: "Watch the film",
                link: "",
            }
        ],
        img: Product2,
        imgAuto: true,
        imgHeight: 775,
        imgWidth: 381,
    },
    {
        id: 3,
        flex: "row",
        bgColor: "light-white",
        gap: 0,
        modelProduct: "Watch",
        verProduct: "se",
        textColor: "black",
        textWidth: 252,
        title: "A great deal to love.",
        textPrice: "From",
        numPrice: 249,
        buyLink: "",
        arrLinks: [
            {
                title: "Learn more",
                link: "",
            },
            {
                title: "Watch the film",
                link: "",
            }
        ],
        img: Product3,
        imgAuto: true,
        imgHeight: 505,
        imgWidth: 505,
    }
]