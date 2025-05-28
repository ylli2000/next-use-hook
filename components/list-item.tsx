import { Planet, StarSystem } from "@/types/api"

type Props = {
    item: Planet | StarSystem
}

export default function ListItem({ item }: Props) {
    return (
        <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">

            <div className="relative p-6">
                {/* Header with title and distance badge */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 truncate">
                            {item.officialName}
                        </h3>
                        
                        {/* AKA names */}
                        {item.aka && item.aka.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2">
                                {item.aka.map((alias, index) => (
                                    <span 
                                        key={index}
                                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                                    >
                                        {alias}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    {/* Distance badge */}
                    <div className="ml-4 flex-shrink-0">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-sm">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            {item.distance}
                        </span>
                    </div>
                </div>
                
                {/* Description */}
                <div className="space-y-3">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-200">
                        {item.description}
                    </p>
                </div>
                
                {/* Footer with ID and hover action */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                        ID: {item.id}
                    </span>
                    
                    {/* Hover action indicator */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                            View details
                            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            
            {/* Subtle border accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </div>
    )
}