import { ApiResult, Planet, StarSystem } from "@/types/api";
import ListEmpty from "./list-empty";
import ListError from "./list-error";
import ListItem from "./list-item";

export default function AstronomicalList(result: ApiResult<Planet[] | StarSystem[]>) {
  // Handle error state
  if ('error' in result) {
    return <ListError error={new Error(result.message)} />;
  }

  // Handle empty data
  if (!result.data || result.data.length === 0) {
    return <ListEmpty />;
  }

  const {data} = result;

  // Render the list of items
  return (
    <div className="w-full">
      {/* Header with count */}
      <div className="mb-6">
        <div className="flex items-center justify-end">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
            {data.length} {data.length === 1 ? 'object' : 'objects'}
          </span>
        </div>
      </div>

      {/* Responsive grid of list items */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {data.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>

      {/* Footer with total count */}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Showing {data.length} astronomical {data.length === 1 ? 'object' : 'objects'}
        </p>
      </div>
    </div>
  );
} 