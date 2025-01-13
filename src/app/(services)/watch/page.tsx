import HeaderSect from "./components/headerSect";
import FamilySet from "./components/familySet";
import FitnessSet from "./components/fitnessSet";
import TextBlock from "./components/textBlock";

export default function WatchPage() {
    return(
        <div className="flex flex-col items-center justify-center">
            <HeaderSect />
            <FamilySet />
            <FitnessSet />
            <TextBlock />
        </div>
    )
}