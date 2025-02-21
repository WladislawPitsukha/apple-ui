import Pazzle from "./components/pazzle";
import DescSect from "./components/descriptSect";
import PazzDescSec from "./components/pazzDescSec";
import PazzDescFir from "./components/pazzDescFir";
import HeaderPage from "./components/header";

export default function MacBookPage() {
    return(
        <div className="flex flex-col items-center justify-between w-full">
            <HeaderPage />
            <Pazzle />
            <PazzDescFir />
            <DescSect />
            <PazzDescSec />
        </div>
    )
}