import { create } from 'zustand';
import { FilterState } from '../types';
import Cookies from 'js-cookie';

interface Store {
  filters: FilterState;
  selectedFeature: string | null;
  setFilters: (filters: Partial<FilterState>) => void;
  setSelectedFeature: (feature: string | null) => void;
  resetFilters: () => void;
}

const COOKIE_KEY = 'dashboard_preferences';

const getInitialFilters = (): FilterState => {
  const savedPreferences = Cookies.get(COOKIE_KEY);
  if (savedPreferences) {
    const parsed = JSON.parse(savedPreferences);
    return {
      ...parsed,
      dateRange: {
        start: parsed.dateRange.start ? new Date(parsed.dateRange.start) : null,
        end: parsed.dateRange.end ? new Date(parsed.dateRange.end) : null,
      },
    };
  }

  return {
    ageRange: null,
    gender: null,
    dateRange: {
      start: null,
      end: null,
    },
  };
};

export const useStore = create<Store>((set) => ({
  filters: getInitialFilters(),
  selectedFeature: null,
  setFilters: (newFilters) =>
    set((state) => {
      const updatedFilters = { ...state.filters, ...newFilters };
      Cookies.set(COOKIE_KEY, JSON.stringify(updatedFilters));
      return { filters: updatedFilters };
    }),
  setSelectedFeature: (feature) => set({ selectedFeature: feature }),
  resetFilters: () => {
    Cookies.remove(COOKIE_KEY);
    set({
      filters: {
        ageRange: null,
        gender: null,
        dateRange: { start: null, end: null },
      },
      selectedFeature: null,
    });
  },
}));