import { catalog } from '../data/catalog';
import type { ParentCategory, ChildCategory, Link } from '../data/catalog';

export const useCatalog = () => {
  const getParentCategories = (): ParentCategory[] => catalog;

  const getParentById = (id: string): ParentCategory | undefined => {
    return catalog.find(parent => parent.id === id);
  };

  const getChildCategories = (parentId: string): ChildCategory[] => {
    const parent = getParentById(parentId);
    return parent?.children || [];
  };

  const getChildById = (parentId: string, childId: string): ChildCategory | undefined => {
    const parent = getParentById(parentId);
    return parent?.children.find(child => child.id === childId);
  };

  const getLinks = (parentId: string, childId: string): Link[] => {
    const child = getChildById(parentId, childId);
    return child?.links || [];
  };

  const isValidParent = (parentId: string): boolean => {
    return catalog.some(parent => parent.id === parentId);
  };

  const isValidChild = (parentId: string, childId: string): boolean => {
    const parent = getParentById(parentId);
    return parent?.children.some(child => child.id === childId) || false;
  };

  return {
    getParentCategories,
    getParentById,
    getChildCategories,
    getChildById,
    getLinks,
    isValidParent,
    isValidChild,
  };
};
