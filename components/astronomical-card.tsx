import AstronomicalButton from "./astronomical-button";

type Props = {
  variant: "star-systems" | "planets",
  href: string
}

export default function AstronomicalCard(content: Props) {
  let title, description;
  if(content.variant === "planets") {
    title = '🪐 Planets'
    description = 'Discover fascinating worlds orbiting stars throughout the universe. Explore their unique characteristics, atmospheres, and potential for life.'
  } else { //star-systems
    title = '✨ Star Systems'
    description = 'Explore stellar formations and cosmic neighborhoods. Learn about binary stars, planetary systems, and the birth and death of stars.'
  }
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 max-w-sm hover:shadow-xl transition-shadow duration-200`}>
      {/* Content */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {description}
        </p>
      </div>
      
      {/* Button */}
      <div className="flex justify-center">
        <AstronomicalButton href={content.href} variant={content.variant}/>
      </div>
    </div>
  );
} 