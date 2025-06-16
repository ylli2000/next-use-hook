import { fetchStarSystems } from "@/util/api";
import AstronomicalList from "./astronomical-list";

//NOTE the use of Async...Await here
export default async function StarSystems() {
    const result = await fetchStarSystems()
    return (
        <AstronomicalList {...result}/>
    )
}