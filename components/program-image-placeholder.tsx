export function ProgramImagePlaceholder({ className = "" }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background gradient */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fafaf9" />
            <stop offset="100%" stopColor="#f5f5f4" />
          </linearGradient>
        </defs>
  
        <rect width="400" height="300" fill="url(#bgGradient)" />
  
        {/* Decorative circles - subtle and minimal */}
        <circle cx="320" cy="60" r="40" fill="#e7e5e4" opacity="0.5" />
        <circle cx="80" cy="240" r="30" fill="#e7e5e4" opacity="0.3" />
  
        {/* Yoga pose silhouette - centered */}
        <g transform="translate(200, 150)">
          {/* Simple meditation pose */}
          <ellipse cx="0" cy="30" rx="35" ry="8" fill="#d6d3d1" opacity="0.4" />
  
          {/* Body */}
          <path
            d="M 0,-40 Q -15,-20 -15,0 L -15,20 Q -15,25 -10,25 L 10,25 Q 15,25 15,20 L 15,0 Q 15,-20 0,-40 Z"
            fill="#a8a29e"
            opacity="0.6"
          />
  
          {/* Head */}
          <circle cx="0" cy="-45" r="12" fill="#a8a29e" opacity="0.6" />
  
          {/* Arms in meditation pose */}
          <path d="M -15,0 Q -30,5 -35,15 Q -35,20 -30,20 L -20,15 Z" fill="#a8a29e" opacity="0.6" />
          <path d="M 15,0 Q 30,5 35,15 Q 35,20 30,20 L 20,15 Z" fill="#a8a29e" opacity="0.6" />
  
          {/* Legs crossed */}
          <path d="M -10,25 Q -20,30 -25,35 L -15,35 Z" fill="#a8a29e" opacity="0.6" />
          <path d="M 10,25 Q 20,30 25,35 L 15,35 Z" fill="#a8a29e" opacity="0.6" />
        </g>
  
        {/* Subtle text */}
        <text
          x="200"
          y="260"
          textAnchor="middle"
          fill="#a8a29e"
          fontSize="14"
          fontFamily="system-ui, -apple-system, sans-serif"
          opacity="0.5"
        >
          Yoga Program
        </text>
      </svg>
    )
  }
  