import React from 'react';

interface EmptyStateProps {
  type: 'no-parent' | 'no-child' | 'no-links';
  parentSelected?: boolean;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ type, parentSelected = false }) => {
  const getContent = () => {
    switch (type) {
      case 'no-parent':
        return {
          icon: '🎯',
          title: 'Select a category to start',
          description: 'Choose a father category from the dropdown above to see available subcategories.',
        };
      case 'no-child':
        return {
          icon: '📂',
          title: 'Select a subcategory to continue',
          description: 'Choose a son category to view the related links and resources.',
        };
      case 'no-links':
        return {
          icon: '📭',
          title: 'No links available',
          description: 'There are no links in this category yet. Check back later for updates.',
        };
      default:
        return {
          icon: '🎯',
          title: 'Get started',
          description: 'Select categories to explore available links.',
        };
    }
  };

  const content = getContent();

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6 animate-bounce" role="img" aria-label="Empty state icon">
          {content.icon}
        </div>
        <h2 className="text-2xl font-semibold text-brand-black mb-4">
          {content.title}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          {content.description}
        </p>
        {type === 'no-child' && parentSelected && (
          <div className="mt-6 p-4 bg-brand-light rounded-lg border-l-4 border-brand-accent">
            <p className="text-sm text-brand-dark">
              💡 <strong>Tip:</strong> Use the dropdown above to select a subcategory and explore related links.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
