import { Header } from './components/Header';
import { ParentSelect } from './components/ParentSelect';
import { UniversitySelect } from './components/UniversitySelect';
import { UniversityLinks } from './components/UniversityLinks';
import { EmptyState } from './components/EmptyState';
import { Breadcrumb } from './components/Breadcrumb';
import { useUrlState } from './hooks/useUrlState';
import { useCatalog } from './hooks/useCatalog';

function App() {
  const { state, setParent, setUniversity } = useUrlState();
  const { isValidParent, getParentById } = useCatalog();

  // Validate current state
  const isParentValid = state.parent ? isValidParent(state.parent) : false;
  const currentParent = isParentValid ? getParentById(state.parent!) : null;

  // Determine what to show in the main content area
  const renderMainContent = () => {
    if (!state.parent || !isParentValid) {
      return <EmptyState type="no-parent" />;
    }
    
    if (!state.university) {
      return (
        <UniversitySelect
          selectedCityId={state.parent}
          selectedUniversityId={state.university}
          onUniversitySelect={setUniversity}
        />
      );
    }
    
    return (
      <UniversityLinks 
        selectedCityId={state.parent}
        selectedUniversityId={state.university}
      />
    );
  };

  const handlePlatformClick = () => {
    // You can add navigation logic here
    console.log('Platform button clicked');
  };

  return (
    <div className="min-h-screen bg-brand-light">
      {/* Header */}
      <Header 
        title="منصة الروابط الإلكترونية"
        onPlatformClick={handlePlatformClick}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="grid grid-cols-1 gap-8">
            <ParentSelect
              selectedParentId={isParentValid ? state.parent : null}
              onParentChange={setParent}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 min-h-[400px]">
          <Breadcrumb 
            parentName={currentParent?.name}
            childName={undefined}
          />
          {renderMainContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 text-sm">
            <p>Built with React, Vite, and Tailwind CSS • Made with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
