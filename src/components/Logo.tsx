import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'badge' | 'full' | 'horizontal';
  withBackground?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  withBackground = false
}) => {
  // Height & responsive sizing
  const sizeMap = {
    xs: { height: 32 },
    sm: { height: 46 },
    md: { height: 64 },
    lg: { height: 98 },
    xl: { height: 148 },
    '2xl': { height: 215 }
  };

  const dim = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none transition-transform duration-300 ${
        withBackground
          ? 'bg-[#000000] p-4 rounded-[6px] border border-[#D4AF37]/25 shadow-[0_8px_30px_rgba(0,0,0,0.85)]'
          : ''
      } ${className}`}
      style={{ maxHeight: dim.height }}
    >
      <img
        src="/images/vedha-logo.png"
        alt="Vedha – Chez Cuisine Indienne Official Logo"
        className="w-auto h-full max-w-full object-contain drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]"
        style={{ height: dim.height }}
      />
    </div>
  );
};
