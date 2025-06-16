import AstronomicalCard from "@/components/astronomical-card";

export default function Home() {

  return (
    <>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Astronomical Objects (REACT18+ USE() RSC VERSION)
        </h2>
        <p className="mt-8 text-gray-600 dark:text-gray-400">
          Explore the wonders of space and distant worlds
        </p>
      </div>
      <div className="flex justify-center gap-16 mt-16">
        <AstronomicalCard variant="planets" href = '/planets' />
        <AstronomicalCard variant="star-systems" href = '/star-systems' />
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
                🚀 Server-Side use() Hook Demonstration
              </h3>
              <div className="text-gray-700 dark:text-gray-300 space-y-3 text-sm leading-relaxed">
                                 <p>
                   This demo showcases how the <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs font-mono">use()</code> hook works on the server side with Next.js App Router. 
                   Pay attention to the <strong>DevTools Network tab</strong> - you&apos;ll notice there are no API calls after the initial page render.
                 </p>
                 <p>
                   When you click a button, the data is fetched and the page is rendered entirely on the server side. 
                   You&apos;ll see a <strong>2-second artificial delay</strong> before the whole page is ready, simulating real-world data fetching.
                 </p>
                 <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-green-500">
                   <p className="font-medium text-green-800 dark:text-green-400 mb-2">🎯 Key Point:</p>
                   <p>
                     The <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs font-mono">use()</code> hook does <strong>NOT block</strong> the initial page rendering. 
                     While data is being prepared on the server, the loading state is presented immediately, providing a smooth user experience.
                   </p>
                 </div>
                 <p>
                   This demonstrates React&apos;s concurrent features working seamlessly with Next.js server components, 
                   allowing for progressive enhancement and better perceived performance.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
