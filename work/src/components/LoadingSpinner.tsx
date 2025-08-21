import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="relative">
        <div className="w-8 h-8 border-4 border-brand-light border-t-brand-accent rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-8 h-8 border-4 border-transparent border-r-brand-dark rounded-full animate-ping"></div>
      </div>
    </div>
  );
};
