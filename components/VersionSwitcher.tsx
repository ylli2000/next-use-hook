import { headers } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";

export default function VersionSwitcher() {
  return <Suspense fallback={null}>{
    (async () => {
    const headerList = await headers();
    const pathname = headerList.get("x-current-path") || '';
    const isNext = pathname.startsWith("/next");
    return (
      <div className="inline-flex gap-2 rounded-lg bg-gray-100 dark:bg-gray-800 p-1 border border-gray-200 dark:border-gray-700">
        <Link href="/" className={`px-4 py-2 rounded-md font-medium transition-colors duration-150 ${!isNext ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>React 18+ use() RSC</Link>
        <Link href="/next" className={`px-4 py-2 rounded-md font-medium transition-colors duration-150 ${isNext ? 'bg-purple-600 text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>Next 15 Server Actions</Link>
      </div>
    );
    })()
  }
  </Suspense>
} 