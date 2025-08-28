import { useState, useEffect } from 'react';

interface UrlState {
  parent: string | null;
  university: string | null;
}

export const useUrlState = () => {
  const [state, setState] = useState<UrlState>(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return {
      parent: params.get('parent'),
      university: params.get('university'),
    };
  });

  useEffect(() => {
    const updateUrl = () => {
      const params = new URLSearchParams();
      if (state.parent) {
        params.set('parent', state.parent);
      }
      if (state.university) {
        params.set('university', state.university);
      }
      
      const newHash = params.toString();
      const currentHash = window.location.hash.substring(1);
      
      if (newHash !== currentHash) {
        window.location.hash = newHash;
      }
    };

    updateUrl();
  }, [state]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      setState({
        parent: params.get('parent'),
        university: params.get('university'),
      });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const setParent = (parentId: string | null) => {
    setState(prev => ({
      parent: parentId,
      university: parentId === prev.parent ? prev.university : null, // Clear university if parent changes
    }));
  };

  const setUniversity = (universityId: string | null) => {
    setState(prev => ({
      ...prev,
      university: universityId,
    }));
  };

  return {
    state,
    setParent,
    setUniversity,
  };
};
