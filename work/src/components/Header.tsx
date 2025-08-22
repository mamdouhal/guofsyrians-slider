import React from 'react';
import logoImage from '../assets/syria-union-logo-white.png';

interface HeaderProps {
  title?: string;
  onPlatformClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  title = "منصة الروابط الإلكترونية", 
  onPlatformClick 
}) => {
  return (
    <header className="w-full bg-[#214937] shadow-lg" dir="rtl">
      <div className="w-full px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Right Section - Platform Button (RTL: appears on right) */}
          <div className="flex-shrink-0 order-3">
            <button
              onClick={onPlatformClick}
              aria-label="المنصة الإلكترونية"
              className="px-3 py-1.5 sm:px-4 sm:py-2 border border-white text-white text-xs sm:text-sm font-medium rounded-full hover:bg-white hover:text-[#214937] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#214937] whitespace-nowrap"
            >
              المنصة الإلكترونية
            </button>
          </div>

          {/* Center Section - Main Title */}
          <div className="flex-1 text-center px-2 sm:px-4 min-w-0 order-2">
            <h1 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">
              {title}
            </h1>
          </div>

          {/* Left Section - Logo (RTL: appears on left) */}
          <div className="flex-shrink-0 order-1">
            <div className="h-8 w-8 sm:h-10 sm:w-10 bg-white rounded-lg flex items-center justify-center shadow-sm p-1">
              <img 
                src={logoImage}
                alt="شعار اتحاد الطلاب السوريين"
                className="h-full w-full object-contain hover:scale-105 transition-transform duration-200 cursor-pointer"
                loading="lazy"
                onClick={() => window.location.reload()}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
