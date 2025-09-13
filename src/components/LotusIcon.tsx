import React from 'react';

interface LotusIconProps {
  className?: string;
  size?: number;
}

const LotusIcon: React.FC<LotusIconProps> = ({ className = "", size = 32 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Lotus flower SVG - Vietnamese national flower */}
      <g transform="translate(50,50)">
        {/* Center circle */}
        <circle cx="0" cy="0" r="8" fill="currentColor" opacity="0.9"/>
        
        {/* Outer petals */}
        <path d="M0,-35 Q-15,-25 -20,-10 Q-15,5 0,0 Q15,5 20,-10 Q15,-25 0,-35Z" fill="currentColor" opacity="0.7"/>
        <path d="M25,-25 Q35,-15 30,0 Q15,10 0,0 Q-5,-15 10,-30 Q20,-30 25,-25Z" fill="currentColor" opacity="0.7"/>
        <path d="M25,25 Q35,15 30,0 Q15,-10 0,0 Q-5,15 10,30 Q20,30 25,25Z" fill="currentColor" opacity="0.7"/>
        <path d="M0,35 Q-15,25 -20,10 Q-15,-5 0,0 Q15,-5 20,10 Q15,25 0,35Z" fill="currentColor" opacity="0.7"/>
        <path d="M-25,25 Q-35,15 -30,0 Q-15,-10 0,0 Q5,15 -10,30 Q-20,30 -25,25Z" fill="currentColor" opacity="0.7"/>
        <path d="M-25,-25 Q-35,-15 -30,0 Q-15,10 0,0 Q5,-15 -10,-30 Q-20,-30 -25,-25Z" fill="currentColor" opacity="0.7"/>
        
        {/* Inner petals */}
        <path d="M0,-20 Q-8,-15 -10,-5 Q-8,3 0,0 Q8,3 10,-5 Q8,-15 0,-20Z" fill="currentColor" opacity="0.8"/>
        <path d="M14,-14 Q20,-8 17,0 Q8,6 0,0 Q-3,-8 6,-17 Q12,-17 14,-14Z" fill="currentColor" opacity="0.8"/>
        <path d="M14,14 Q20,8 17,0 Q8,-6 0,0 Q-3,8 6,17 Q12,17 14,14Z" fill="currentColor" opacity="0.8"/>
        <path d="M0,20 Q-8,15 -10,5 Q-8,-3 0,0 Q8,-3 10,5 Q8,15 0,20Z" fill="currentColor" opacity="0.8"/>
        <path d="M-14,14 Q-20,8 -17,0 Q-8,-6 0,0 Q3,8 -6,17 Q-12,17 -14,14Z" fill="currentColor" opacity="0.8"/>
        <path d="M-14,-14 Q-20,-8 -17,0 Q-8,6 0,0 Q3,-8 -6,-17 Q-12,-17 -14,-14Z" fill="currentColor" opacity="0.8"/>
      </g>
    </svg>
  );
};

export default LotusIcon;