import React from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import type { Link } from '../data/catalog';

interface LinksGridProps {
  links: Link[];
}

export const LinksGrid: React.FC<LinksGridProps> = ({ links }) => {
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (links.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📭</div>
        <h3 className="text-lg font-medium text-brand-black mb-2">No links available</h3>
        <p className="text-gray-600">There are no links in this category yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {links.map((link, index) => (
        <div
          key={link.id}
          className="bg-white rounded-lg border border-gray-200 hover:border-brand-accent transition-all duration-200 hover:shadow-lg group animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                {link.icon && (
                  <span className="text-2xl" role="img" aria-label="Link icon">
                    {link.icon}
                  </span>
                )}
                <div>
                  <h3 className="font-semibold text-brand-black group-hover:text-brand-dark transition-colors duration-200">
                    {link.title}
                  </h3>
                </div>
              </div>
              <ArrowTopRightOnSquareIcon className="w-5 h-5 text-gray-400 group-hover:text-brand-accent transition-colors duration-200" />
            </div>
            
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {link.description}
            </p>
            
            <button
              onClick={() => handleLinkClick(link.url)}
              className="w-full px-4 py-2 bg-brand-dark text-white font-medium rounded-lg hover:bg-brand-black focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
              aria-label={`Open ${link.title} in new tab`}
            >
              Open
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
