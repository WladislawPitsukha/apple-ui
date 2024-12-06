import Link from "next/link";
import { FaApple } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";

export default function NavBar() {
    const links: string[] = [
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "AirPods",
        "TV & Home",
        "Entertainment",
        "Accessories",
        "Support",
    ]

    return(
        <nav className="flex justify-around items-center p-4 bg-navbar-color sticky top-0 z-50">
            <FaApple className="text-white text-2xl" />
            <article className="flex space-x-4">
                {links.map((item, index) => (
                    <Link
                        href={`/${item.toLocaleLowerCase()}`}
                        key={index}
                    >
                        <h3
                            className="text-white hover:text-gray-300 transition-colors"
                        >
                            {item}
                        </h3>
                    </Link>
                ))}
            </article>
            <article className="flex space-x-4">
                <IoMdSearch className="text-white text-xl" />
                <IoBagOutline className="text-white text-xl" />
            </article>
        </nav>
    )
}