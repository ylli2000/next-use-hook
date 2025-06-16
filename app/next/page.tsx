import AstronomicalCard from "@/components/astronomical-card";

export default function Home() {

  return (
    <>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Astronomical Objects (NEXT SERVER ACTIONS VERSION)
        </h2>
        <p className="mt-8 text-gray-600 dark:text-gray-400">
          Explore the wonders of space and distant worlds
        </p>
      </div>
      <div className="flex justify-center gap-16 mt-16">
        <AstronomicalCard variant="planets" href = '/next-planets' />
        <AstronomicalCard variant="star-systems" href = '/next-star-systems' />
      </div>
      
      {/* Description Box */}
      <div className="max-w-4xl mx-auto m-16">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-700 p-6">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                ⚡ Next.js 15 Server Actions Demonstration
              </h3>
              <div className="text-gray-700 dark:text-gray-300 space-y-3 text-sm leading-relaxed">
                <p>
                  This demo showcases <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs font-mono">Server Actions</code> in <strong>Next.js 15</strong>. Server Actions allow you to run server-side logic directly from your components, enabling seamless data mutations and fetches without leaving the React tree.
                </p>
                <p>
                  When you interact with the UI, actions are executed on the server, and the UI updates automatically. This approach enables powerful patterns like optimistic updates, form submissions, and data mutations—all with minimal client-side JavaScript.
                </p>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-green-500">
                  <p className="font-medium text-green-800 dark:text-green-400 mb-2">🎯 Key Point:</p>
                  <p>
                    <strong>Server Actions</strong> let you call server code from your components, reducing client bundle size and improving security. Data fetching and mutations happen on the server, and the client UI stays in sync automatically.
                  </p>
                </div>
                <p>
                  This demonstrates how Next.js 15 enables full-stack React development, letting you build modern apps with less boilerplate and more direct data flow between client and server.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
