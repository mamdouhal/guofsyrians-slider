import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useCatalog } from '../hooks/useCatalog';

interface ChildSelectProps {
  selectedParentId: string | null;
  selectedChildId: string | null;
  onChildChange: (childId: string | null) => void;
}

export const ChildSelect: React.FC<ChildSelectProps> = ({
  selectedParentId,
  selectedChildId,
  onChildChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { getChildCategories, getChildById } = useCatalog();

  const children = selectedParentId ? getChildCategories(selectedParentId) : [];
  const selectedChild = selectedParentId && selectedChildId ? 
    getChildById(selectedParentId, selectedChildId) : null;

  const isDisabled = !selectedParentId || children.length === 0;

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
    if (isDisabled) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(selectedChildId ? children.findIndex(c => c.id === selectedChildId) : 0);
        } else if (focusedIndex >= 0) {
          onChildChange(children[focusedIndex].id);
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
          setFocusedIndex(prev => (prev < children.length - 1 ? prev + 1 : 0));
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (isOpen) {
          setFocusedIndex(prev => (prev > 0 ? prev - 1 : children.length - 1));
        }
        break;
    }
  };

  const handleOptionClick = (childId: string) => {
    onChildChange(childId);
    setIsOpen(false);
    setFocusedIndex(-1);
    buttonRef.current?.focus();
  };

  const getPlaceholderText = () => {
    if (!selectedParentId) return 'اختر المدينة أولاً';
    if (children.length === 0) return 'لا توجد جامعات متاحة';
    return 'اختر الجامعة';
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-sm font-medium text-brand-black mb-2">
        الجامعة
      </label>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => !isDisabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        disabled={isDisabled}
        className={`
          w-full px-4 py-3 text-left rounded-lg shadow-sm
          focus:outline-none transition-colors duration-200
          ${isDisabled 
            ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed' 
            : `bg-white border hover:border-brand-dark focus:ring-2 focus:ring-brand-accent focus:border-brand-accent ${
                isOpen ? 'border-brand-accent ring-2 ring-brand-accent' : 'border-gray-300'
              }`
          }
        `}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="اختر الجامعة"
      >
        <div className="flex items-center justify-between">
          <span className={selectedChild ? 'text-brand-black font-medium' : 'text-gray-500'}>
            {selectedChild ? selectedChild.name : getPlaceholderText()}
          </span>
          <ChevronDownIcon 
            className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      {isOpen && !isDisabled && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-hidden">
          <ul
            role="listbox"
            aria-label="اختر الجامعة"
            className="py-1 max-h-60 overflow-auto"
          >
            {children.map((child, index) => (
              <li
                key={child.id}
                role="option"
                aria-selected={child.id === selectedChildId}
                className={`
                  px-4 py-3 cursor-pointer transition-colors duration-150
                  ${focusedIndex === index ? 'bg-brand-light' : ''}
                  ${child.id === selectedChildId ? 'bg-brand-accent bg-opacity-20 text-brand-dark font-medium border-l-4 border-brand-accent' : 'text-brand-black'}
                  hover:bg-brand-light
                `}
                onClick={() => handleOptionClick(child.id)}
                onMouseEnter={() => setFocusedIndex(index)}
              >
                {child.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
