import { fetchStarSystems } from "@/util/api";
import { use } from "react";
import AstronomicalList from "./astronomical-list";

export default function StarSystems() {
    const resultPromise = fetchStarSystems()
    const result = use(resultPromise)
    return (
        <AstronomicalList {...result}/>
    )
}