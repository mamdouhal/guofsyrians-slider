import React from 'react';
import { useCatalog } from '../hooks/useCatalog';

interface UniversityLinksProps {
  selectedCityId: string | null;
  selectedUniversityId: string | null;
}

export const UniversityLinks: React.FC<UniversityLinksProps> = ({
  selectedCityId,
  selectedUniversityId,
}) => {
  const { getUniversitiesForCity, getParentById } = useCatalog();

  if (!selectedCityId || !selectedUniversityId) {
    return null;
  }

  const universities = getUniversitiesForCity(selectedCityId);
  const selectedUniversity = universities.find(uni => uni.id === selectedUniversityId);
  const city = getParentById(selectedCityId);

  if (!selectedUniversity) {
    return null;
  }

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center border-b border-gray-200 pb-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-3xl">{selectedUniversity.icon}</span>
          <h2 className="text-2xl font-bold text-brand-black">
            {selectedUniversity.title}
          </h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {selectedUniversity.description}
        </p>
        <div className="mt-3 text-sm text-gray-500">
          {city?.name} • جمهورية تركيا
        </div>
      </div>

      {/* Action Button */}
      <div className="text-center">
        <button
          onClick={() => handleLinkClick(selectedUniversity.url)}
          className="inline-flex items-center gap-3 px-8 py-4 bg-brand-dark text-white font-medium rounded-xl hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl group"
        >
          <span className="text-xl">💬</span>
          <span>انضم إلى المجموعة</span>
          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 text-center">
          <div className="text-3xl mb-2">🎓</div>
          <h3 className="font-medium text-green-800 mb-1">دعم أكاديمي</h3>
          <p className="text-sm text-green-600">تبادل المعلومات والمساعدة الدراسية</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 rounded-xl p-6 text-center">
          <div className="text-3xl mb-2">🤝</div>
          <h3 className="font-medium text-blue-800 mb-1">شبكة تواصل</h3>
          <p className="text-sm text-blue-600">تكوين صداقات وعلاقات مهنية</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-xl p-6 text-center">
          <div className="text-3xl mb-2">📚</div>
          <h3 className="font-medium text-purple-800 mb-1">موارد تعليمية</h3>
          <p className="text-sm text-purple-600">مشاركة الملاحظات والمراجع</p>
        </div>
      </div>

      {/* Note */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
        <div className="flex items-center justify-center gap-2 text-amber-700">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">ملاحظة مهمة</span>
        </div>
        <p className="text-sm text-amber-600 mt-1">
          يرجى اتباع قوانين المجموعة والتعامل بأدب واحترام مع جميع الأعضاء
        </p>
      </div>
    </div>
  );
};
