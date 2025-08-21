import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useCatalog } from '../hooks/useCatalog';

interface ParentSelectProps {
  selectedParentId: string | null;
  onParentChange: (parentId: string | null) => void;
}

export const ParentSelect: React.FC<ParentSelectProps> = ({
  selectedParentId,
  onParentChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { getParentCategories, getParentById } = useCatalog();

  const parents = getParentCategories();
  const selectedParent = selectedParentId ? getParentById(selectedParentId) : null;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(selectedParentId ? parents.findIndex(p => p.id === selectedParentId) : 0);
        } else if (focusedIndex >= 0) {
          onParentChange(parents[focusedIndex].id);
          setIsOpen(false);
          setFocusedIndex(-1);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedIndex(-1);
        buttonRef.current?.focus();
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else {
          setFocusedIndex(prev => (prev < parents.length - 1 ? prev + 1 : 0));
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (isOpen) {
          setFocusedIndex(prev => (prev > 0 ? prev - 1 : parents.length - 1));
        }
        break;
    }
  };

  const handleOptionClick = (parentId: string) => {
    onParentChange(parentId);
    setIsOpen(false);
    setFocusedIndex(-1);
    buttonRef.current?.focus();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-sm font-medium text-brand-black mb-2">
        Father Category
      </label>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className={`
          w-full px-4 py-3 text-left bg-white border rounded-lg shadow-sm
          focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent
          hover:border-brand-dark transition-colors duration-200
          ${isOpen ? 'border-brand-accent ring-2 ring-brand-accent' : 'border-gray-300'}
        `}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select father category"
      >
        <div className="flex items-center justify-between">
          <span className={selectedParent ? 'text-brand-black font-medium' : 'text-gray-500'}>
            {selectedParent ? selectedParent.name : 'Select a father category'}
          </span>
          <ChevronDownIcon 
            className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-hidden">
          <ul
            role="listbox"
            aria-label="Father categories"
            className="py-1 max-h-60 overflow-auto"
          >
            {parents.map((parent, index) => (
              <li
                key={parent.id}
                role="option"
                aria-selected={parent.id === selectedParentId}
                className={`
                  px-4 py-3 cursor-pointer transition-colors duration-150
                  ${focusedIndex === index ? 'bg-brand-light' : ''}
                  ${parent.id === selectedParentId ? 'bg-brand-accent bg-opacity-20 text-brand-dark font-medium border-l-4 border-brand-accent' : 'text-brand-black'}
                  hover:bg-brand-light
                `}
                onClick={() => handleOptionClick(parent.id)}
                onMouseEnter={() => setFocusedIndex(index)}
              >
                {parent.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
