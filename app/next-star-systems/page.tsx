import BackButton from "@/components/BackButton";
import ListLoading from "@/components/list-loading";
import StarSystems from "@/components/next-star-systems";
import { Suspense } from "react";

export default function PlanetsPage() {
  return (
    <>
      <div className="text-center relative">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Star Systems that Are Close to Us
        </h2>
        <p className="mt-8 text-gray-600 dark:text-gray-400">
          Explore the wonders of space and distant worlds
        </p>
      </div>
      <div>
      <div className="absolute top-8 left-16 flex justify-start gap-8 m-8">
        <BackButton url="/next" />
      </div>
      <Suspense fallback={<ListLoading />}>
        <StarSystems />
      </Suspense>
    </div>
    </>
  );
}
