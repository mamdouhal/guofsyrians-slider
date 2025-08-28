import React from 'react';


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
      <div className="w-full px-2 sm:px-4 py-0.6">
        <div className="flex items-center justify-between">
          {/* Right Section - Platform Button (RTL: appears on right) */}
          <div className="flex-shrink-0 order-3">
            <button
              onClick={onPlatformClick}
              aria-label="المنصة الإلكترونية"
              className="px-2 py-1 sm:px-3 sm:py-1.5 border border-white text-white text-xs sm:text-sm font-medium rounded-full hover:bg-white hover:text-[#214937] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#214937] whitespace-nowrap"
            >
              المنصة الإلكترونية
            </button>
          </div>

          {/* Center Section - Main Title */}
          <div className="flex-1 text-center px-2 sm:px-4 min-w-0 order-2">
            <h1 className="text-sm sm:text-base md:text-lg font-bold text-white leading-tight">
              {title}
            </h1>
          </div>

          {/* Left Section - Logo (RTL: appears on left) */}
          <div className="flex-shrink-0 order-1">
            <div className="h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center">
              <img 
                src={"assets/whitelogoGuofsyrians.png"}
                alt="شعار اتحاد الطلاب السوريين"
                className="h-full w-full object-contain"
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
