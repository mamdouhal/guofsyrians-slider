import React from 'react';
import { ParentSelect } from './components/ParentSelect';
import { ChildSelect } from './components/ChildSelect';
import { LinksGrid } from './components/LinksGrid';
import { EmptyState } from './components/EmptyState';
import { Breadcrumb } from './components/Breadcrumb';
import { useUrlState } from './hooks/useUrlState';
import { useCatalog } from './hooks/useCatalog';

function App() {
  const { state, setParent, setChild } = useUrlState();
  const { getLinks, isValidParent, isValidChild, getParentById, getChildById } = useCatalog();

  // Validate current state
  const isParentValid = state.parent ? isValidParent(state.parent) : false;
  const isChildValid = state.parent && state.child ? isValidChild(state.parent, state.child) : false;

  // Get current selections for display
  const currentParent = isParentValid ? getParentById(state.parent!) : null;
  const currentChild = isChildValid ? getChildById(state.parent!, state.child!) : null;

  // Get links if both selections are valid
  const links = isParentValid && isChildValid ? getLinks(state.parent!, state.child!) : [];

  // Determine what to show in the main content area
  const renderMainContent = () => {
    if (!state.parent || !isParentValid) {
      return <EmptyState type="no-parent" />;
    }
    
    if (!state.child || !isChildValid) {
      return <EmptyState type="no-child" parentSelected={true} />;
    }
    
    if (links.length === 0) {
      return <EmptyState type="no-links" />;
    }
    
    return <LinksGrid links={links} />;
  };

  return (
    <div className="min-h-screen bg-brand-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-brand-black mb-3">
              Guofsyrians Slider
            </h1>
            <p className="text-lg text-gray-600">
              Explore categorized links and resources
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ParentSelect
              selectedParentId={isParentValid ? state.parent : null}
              onParentChange={setParent}
            />
            <ChildSelect
              selectedParentId={isParentValid ? state.parent : null}
              selectedChildId={isChildValid ? state.child : null}
              onChildChange={setChild}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 min-h-[400px]">
          <Breadcrumb 
            parentName={currentParent?.name}
            childName={currentChild?.name}
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
