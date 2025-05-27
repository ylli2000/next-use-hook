type Props = {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
}

export default function ListEmpty({ 
  title = "No astronomical objects found",
  message = "The cosmos seems empty at the moment. Check back later for new discoveries!",
  icon
}: Props) {
  const defaultIcon = (
    <svg 
      className="w-16 h-16 mx-auto text-gray-400" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={1.5} 
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" 
      />
    </svg>
  );

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="text-center max-w-md">
        <div className="mb-4">
          {icon || defaultIcon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {message}
        </p>
      </div>
    </div>
  );
} 