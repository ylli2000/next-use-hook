import Link from "next/link";

type Props = {
  variant: 'planets' | 'star-systems';
  href?: string;
  isActive?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function AstronomicalButton({ 
  href,
  variant,
  isActive = false,
  disabled = false,
  size = 'md'
}: Props) {
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const baseClasses = `
    inline-flex items-center gap-2 rounded-lg font-semibold transition-all duration-200
    border-2 focus:outline-none focus:ring-2 focus:ring-offset-2
    ${sizeClasses[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105'}
  `;

  const variantClasses = isActive
    ? variant === 'planets'
      ? 'bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-500/25 focus:ring-blue-500'
      : 'bg-purple-500 border-purple-500 text-white shadow-lg shadow-purple-500/25 focus:ring-purple-500'
    : variant === 'planets'
      ? 'bg-white dark:bg-gray-800 border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:ring-blue-500'
      : 'bg-white dark:bg-gray-800 border-purple-300 dark:border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 focus:ring-purple-500';

  const PlanetsIcon = () => (
    <svg 
      className={iconSizeClasses[size]} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      {/* Main planet (larger) */}
      <circle cx="12" cy="12" r="7" fill="currentColor" opacity="0.2" />
      <circle cx="12" cy="12" r="5.5" stroke="currentColor" strokeWidth="2" fill="none" />
      
      {/* Planet surface details */}
      <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="14" cy="13" r="0.8" fill="currentColor" opacity="0.3" />
      <circle cx="11" cy="15" r="0.6" fill="currentColor" opacity="0.5" />
      
      {/* Orbital rings (larger) */}
      <ellipse 
        cx="12" 
        cy="12" 
        rx="9" 
        ry="3.5" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        fill="none"
        opacity="0.7"
      />
      <ellipse 
        cx="12" 
        cy="12" 
        rx="11" 
        ry="2.5" 
        stroke="currentColor" 
        strokeWidth="1" 
        fill="none"
        opacity="0.5"
      />
      
      {/* Moons (positioned better) */}
      <circle cx="21" cy="12" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="3" cy="12" r="0.8" fill="currentColor" opacity="0.6" />
      <circle cx="12" cy="3" r="0.6" fill="currentColor" opacity="0.5" />
    </svg>
  );

  const StarSystemIcon = () => (
    <svg 
      className={iconSizeClasses[size]} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      {/* Central star */}
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      
      {/* Star rays */}
      <path strokeLinecap="round" strokeWidth="2" d="M12 2v4M12 18v4M22 12h-4M6 12H2" />
      <path strokeLinecap="round" strokeWidth="1.5" d="M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83M19.07 19.07l-2.83-2.83M7.76 7.76L4.93 4.93" />
      
      {/* Orbiting planets */}
      <circle cx="18" cy="12" r="1" fill="currentColor" opacity="0.7" />
      <circle cx="6" cy="12" r="0.8" fill="currentColor" opacity="0.6" />
      <circle cx="12" cy="6" r="0.6" fill="currentColor" opacity="0.5" />
      
      {/* Distant stars */}
      <circle cx="20" cy="4" r="0.5" fill="currentColor" opacity="0.4" />
      <circle cx="4" cy="20" r="0.5" fill="currentColor" opacity="0.4" />
      <circle cx="20" cy="20" r="0.3" fill="currentColor" opacity="0.3" />
    </svg>
  );

  const getLabel = () => {
    return variant === 'planets' ? 'Planets' : 'Star Systems';
  };

  const getIcon = () => {
    return variant === 'planets' ? <PlanetsIcon /> : <StarSystemIcon />;
  };

  return (
    <Link
      className={`${baseClasses} ${variantClasses}`}
      href={!disabled && href ? href : ''}
    >
      {getIcon()}
      <span>{getLabel()}</span>
      
      {/* Active indicator */}
      {isActive && (
        <div className="w-2 h-2 rounded-full bg-current opacity-75 animate-pulse" />
      )}
    </Link>
  );
} 