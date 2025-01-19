import GuatedTour from "./components/guidedTour";
import HeaderSect from "./components/headerSect";
import PazzFeatAcc from "./components/pazzleFeatAcc";
import PazzWaysSave from "./components/pazzWaysSafe";

export default function IphonePage() {
    return(
        <div className="flex flex-col items-center w-full h-auto">
            <HeaderSect />
            <GuatedTour />
            <PazzWaysSave />
            <PazzFeatAcc />
        </div>
    )
}