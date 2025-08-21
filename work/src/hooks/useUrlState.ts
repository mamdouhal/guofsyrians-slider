import { useState, useEffect } from 'react';

interface UrlState {
  parent: string | null;
  child: string | null;
}

export const useUrlState = () => {
  const [state, setState] = useState<UrlState>(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return {
      parent: params.get('parent'),
      child: params.get('child'),
    };
  });

  useEffect(() => {
    const updateUrl = () => {
      const params = new URLSearchParams();
      if (state.parent) {
        params.set('parent', state.parent);
      }
      if (state.child) {
        params.set('child', state.child);
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
        child: params.get('child'),
      });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const setParent = (parentId: string | null) => {
    setState(prev => ({
      parent: parentId,
      child: parentId === prev.parent ? prev.child : null, // Clear child if parent changes
    }));
  };

  const setChild = (childId: string | null) => {
    setState(prev => ({
      ...prev,
      child: childId,
    }));
  };

  return {
    state,
    setParent,
    setChild,
  };
};
