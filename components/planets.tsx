import { fetchPlanets } from "@/util/api"
import { use } from "react"
import AstronomicalList from "./astronomical-list"


export default function Planets() {
    const resultPromise = fetchPlanets()
    const result = use(resultPromise)
    return (
        <AstronomicalList {...result}/>
    )
}