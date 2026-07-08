export default function YellowHighlight({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`relative inline-block px-2 ${className}`}>
      <span className="relative z-10">{children}</span>
      <svg
        className="absolute pointer-events-none"
        style={{ top: '-16%', bottom: '-20%', left: '-8%', right: '-8%' }}
        viewBox="0 0 200 100"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 20 C10 28 4 55 14 75 C26 96 70 100 110 98 C155 96 190 82 194 55 C197 32 178 10 140 4 C100 -3 55 2 34 14 C26 18 22 20 30 22"
          stroke="#00A868"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </span>
  );
}

import React from 'react';
