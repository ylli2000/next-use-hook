import { fetchPlanets } from "@/util/api"
import AstronomicalList from "./astronomical-list"

//NOTE the use of Async...Await here
export default async function Planets() {
    const result = await fetchPlanets()
    return (
        <AstronomicalList {...result}/>
    )
}