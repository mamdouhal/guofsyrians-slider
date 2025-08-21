import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface BreadcrumbProps {
  parentName?: string;
  childName?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ parentName, childName }) => {
  if (!parentName) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
      <span className="text-brand-accent font-medium">Categories</span>
      <ChevronRightIcon className="w-4 h-4 text-gray-400" />
      <span className="text-brand-dark font-medium">{parentName}</span>
      {childName && (
        <>
          <ChevronRightIcon className="w-4 h-4 text-gray-400" />
          <span className="text-brand-black font-semibold">{childName}</span>
        </>
      )}
    </nav>
  );
};
