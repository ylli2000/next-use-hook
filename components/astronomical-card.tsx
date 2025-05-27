import AstronomicalButton from "./astronomical-button";

type Props = {
  variant: 'planets' | 'star-systems';
  className?: string;
}

export default function AstronomicalCard({ 
  variant,
  className = ''
}: Props) {
  const getContent = () => {
    if (variant === 'planets') {
      return {
        title: '🪐 Planets',
        description: 'Discover fascinating worlds orbiting stars throughout the universe. Explore their unique characteristics, atmospheres, and potential for life.',
        href: '/planets'
      };
    } else {
      return {
        title: '✨ Star Systems',
        description: 'Explore stellar formations and cosmic neighborhoods. Learn about binary stars, planetary systems, and the birth and death of stars.',
        href: '/star-systems'
      };
    }
  };



  const content = getContent();

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 max-w-sm hover:shadow-xl transition-shadow duration-200 ${className}`}>
      {/* Content */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {content.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {content.description}
        </p>
      </div>
      
      {/* Button */}
      <div className="flex justify-center">
        <AstronomicalButton href={content.href} variant={variant}/>
      </div>
    </div>
  );
} 