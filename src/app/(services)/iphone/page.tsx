import GuatedTour from "./components/guidedTour";
import HeaderSect from "./components/headerSect";
import MakeIphone from "./components/makeIphone";
import PazzFeatAcc from "./components/pazzleFeatAcc";
import PazzMoreIphone from "./components/pazzMoreIphone";
import PazzOfferIphone from "./components/pazzOfferIphone";
import PazzWaysSave from "./components/pazzWaysSafe";

export default function IphonePage() {
    return(
        <div className="flex flex-col items-center w-full h-full">
            <HeaderSect />
            <GuatedTour />
            <PazzWaysSave />
            <PazzFeatAcc />
            <PazzOfferIphone />
            <MakeIphone />
            <PazzMoreIphone />
        </div>
    )
}