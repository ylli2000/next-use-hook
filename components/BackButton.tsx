import Link from 'next/link';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal';
  className?: string;
}

export default function BackButton({ 
  size = 'md',
  variant = 'default',
  className = ''
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
    focus:outline-none focus:ring-2 focus:ring-offset-2 hover:scale-105
    ${sizeClasses[size]}
  `;

  const variantClasses = variant === 'default'
    ? 'bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-gray-500'
    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100';

  const BackIcon = () => (
    <svg 
      className={iconSizeClasses[size]} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M10 19l-7-7m0 0l7-7m-7 7h18" 
      />
    </svg>
  );

  return (
    <Link
      href="/"
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      <BackIcon />
      <span>Back to Home</span>
    </Link>
  );
} 