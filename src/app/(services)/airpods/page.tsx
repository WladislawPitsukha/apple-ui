import FlexOffers from "./components/flexOffers";
import GridApps from "./components/gridApps";
import SectCards from "./components/sectCards";

export default function AirpodsPage() {
    return(
        <div className="flex flex-col items-center w-full h-full">
            <SectCards />
            <GridApps />
            
            <FlexOffers />
        </div>
    )
}