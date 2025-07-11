'use client';

import { useState, useMemo, ReactNode } from 'react';

// Animation keyframes for the rotating border effect
const rotateOneTurn = 'rotateOneTurn';

// Add global styles for the animation
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rotateOneTurn {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;
  document.head.appendChild(style);
}

interface AnimatedCardWrapperProps {
  children: ReactNode;
  type?: number;
  className?: string;
}

function AnimatedCardWrapper({ children, type = 0, className = '' }: AnimatedCardWrapperProps) {
  const [isHover, setIsHover] = useState(false);

  const shadowColor = useMemo(() => {
    switch (type) {
      case 4:
        return '#95042e';
      case 3:
        return '#ab4bff';
      case 2:
        return '#20C963';
      case 1:
        return '#f3cb78';
      default:
        return '';
    }
  }, [type]);

  return (
    <div className={`relative overflow-visible mx-auto transition-all duration-100 ${className}`}>
      <div
        className="relative flex items-center justify-center p-0.5 rounded-2xl z-0 overflow-hidden shadow-lg"
        style={{
          boxShadow: '0 0 20px rgba(0,0,0,0.1)',
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div
          className={`absolute w-[200%] h-[200%] z-[-1] top-[-50%] left-[-50%] rounded-full transition-all duration-300 ${
            isHover ? '' : ''
          }`}
          style={
            isHover
              ? {
                  backgroundImage: `conic-gradient(transparent, ${shadowColor}, transparent 30%)`,
                  animation: `${rotateOneTurn} 5s linear infinite`,
                }
              : {}
          }
        />
        {children}
      </div>
    </div>
  );
}

interface AnimatedCardProps {
  type?: number;
  title?: string;
  content?: string;
}

export default function AnimatedCard({
  type = 0,
  title = 'Tren Finance Protocol Token',
  content = 'Presale\nMax Buy: 10K USDC',
}: AnimatedCardProps) {
  return (
    <AnimatedCardWrapper type={type} className="max-w-[380px]">
      <div className="w-full rounded-2xl bg-[#181c23] text-white shadow-2xl relative overflow-visible p-0 min-w-[300px] min-h-[300px]">
       
      </div>
    </AnimatedCardWrapper>
  );
}

export { AnimatedCardWrapper };