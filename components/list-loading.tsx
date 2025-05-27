'use client'

type Props = {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function ListLoading({ 
  message = "Exploring the cosmos",
  size = 'md'
}: Props) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16', 
    lg: 'w-20 h-20'
  };

  const textSizeClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl'
  };

  return (
    <div className="flex flex-col justify-center py-30">
      <div className="text-center">
        {/* Animated Planet SVG */}
        <div className="mb-6 relative">
          <svg 
            className={`${sizeClasses[size]} mx-auto animate-spin text-blue-500`}
            style={{ animationDuration: '3s' }}
            fill="none" 
            viewBox="0 0 100 100"
          >
            {/* Planet base */}
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="currentColor"
              className="opacity-20"
            />
            
            {/* Planet surface with gradient */}
            <defs>
              <radialGradient id="planetGradient" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.9" />
              </radialGradient>
              <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            
            <circle 
              cx="50" 
              cy="50" 
              r="35" 
              fill="url(#planetGradient)"
            />
            
            {/* Planet surface details */}
            <circle cx="35" cy="40" r="4" fill="#1e40af" opacity="0.4" />
            <circle cx="60" cy="35" r="3" fill="#1e40af" opacity="0.3" />
            <circle cx="45" cy="60" r="5" fill="#1e40af" opacity="0.5" />
            <circle cx="65" cy="55" r="2" fill="#1e40af" opacity="0.4" />
            
            {/* Orbital ring */}
            <ellipse 
              cx="50" 
              cy="50" 
              rx="42" 
              ry="12" 
              fill="none" 
              stroke="url(#ringGradient)" 
              strokeWidth="2"
              className="animate-pulse"
            />
            
            {/* Small orbiting moon */}
            <circle 
              cx="50" 
              cy="50" 
              r="3" 
              fill="#fbbf24"
              className="animate-ping"
              style={{ 
                transformOrigin: '50px 50px',
                animation: 'orbit 2s linear infinite'
              }}
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
          
          {/* Glowing effect */}
          <div 
            className={`absolute inset-0 ${sizeClasses[size]} mx-auto rounded-full bg-blue-400 opacity-20 animate-pulse blur-sm`}
          />
        </div>

        {/* Loading text with animated dots */}
        <div className={`${textSizeClasses[size]} font-semibold text-gray-700 dark:text-gray-300 flex items-center justify-center gap-1`}>
          <span>{message}</span>
          <div className="flex gap-1">
            <span 
              className="animate-bounce"
              style={{ animationDelay: '0ms', animationDuration: '1.4s' }}
            >
              .
            </span>
            <span 
              className="animate-bounce"
              style={{ animationDelay: '200ms', animationDuration: '1.4s' }}
            >
              .
            </span>
            <span 
              className="animate-bounce"
              style={{ animationDelay: '400ms', animationDuration: '1.4s' }}
            >
              .
            </span>
          </div>
        </div>
      </div>

      {/* Custom CSS for orbit animation */}
      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(42px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(42px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
} 