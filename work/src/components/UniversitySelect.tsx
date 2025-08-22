import React from 'react';
import { useCatalog } from '../hooks/useCatalog';

interface UniversitySelectProps {
  selectedCityId: string | null;
  selectedUniversityId: string | null;
  onUniversitySelect: (universityId: string | null) => void;
}

export const UniversitySelect: React.FC<UniversitySelectProps> = ({
  selectedCityId,
  selectedUniversityId,
  onUniversitySelect,
}) => {
  const { getUniversitiesForCity } = useCatalog();

  if (!selectedCityId) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🏙️</div>
        <h3 className="text-lg font-medium text-gray-600 mb-2">اختر مدينة أولاً</h3>
        <p className="text-gray-500">اختر مدينة من القائمة أعلاه لعرض الجامعات المتاحة</p>
      </div>
    );
  }

  const universities = getUniversitiesForCity(selectedCityId);

  if (universities.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📭</div>
        <h3 className="text-lg font-medium text-gray-600 mb-2">لا توجد جامعات</h3>
        <p className="text-gray-500">لا توجد جامعات متاحة في هذه المدينة حالياً</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-lg font-semibold text-brand-black mb-4 text-center">
        اختر الجامعة
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {universities.map((university) => (
          <button
            key={university.id}
            onClick={() => onUniversitySelect(university.id)}
            className={`
              group relative p-6 rounded-xl border-2 transition-all duration-200 text-right
              ${selectedUniversityId === university.id
                ? 'border-brand-accent bg-brand-accent bg-opacity-10 shadow-lg'
                : 'border-gray-200 bg-white hover:border-brand-dark hover:shadow-md'
              }
            `}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{university.icon}</span>
                  <h4 className={`font-medium text-lg ${
                    selectedUniversityId === university.id 
                      ? 'text-brand-dark' 
                      : 'text-brand-black group-hover:text-brand-dark'
                  }`}>
                    {university.title}
                  </h4>
                </div>
                <p className={`text-sm leading-relaxed ${
                  selectedUniversityId === university.id 
                    ? 'text-gray-700' 
                    : 'text-gray-600'
                }`}>
                  {university.description}
                </p>
              </div>
              {selectedUniversityId === university.id && (
                <div className="flex-shrink-0 ml-3">
                  <div className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className={`absolute inset-0 rounded-xl transition-opacity duration-200 ${
              selectedUniversityId === university.id 
                ? 'bg-brand-accent bg-opacity-5' 
                : 'bg-transparent group-hover:bg-brand-light bg-opacity-30'
            }`} />
          </button>
        ))}
      </div>
    </div>
  );
};
