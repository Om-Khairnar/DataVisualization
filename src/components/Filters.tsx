import React from 'react';
import { useStore } from '../store/useStore';

export const Filters: React.FC = () => {
  const { filters, setFilters, resetFilters } = useStore();

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Age Range</label>
        <select
          value={filters.ageRange || ''}
          onChange={(e) => setFilters({ ageRange: e.target.value as any })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">All Ages</option>
          <option value="15-25">15-25</option>
          <option value=">25">Above 25</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Gender</label>
        <select
          value={filters.gender || ''}
          onChange={(e) => setFilters({ gender: e.target.value as any })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <button
        onClick={resetFilters}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
      >
        Reset Filters
      </button>
    </div>
  );
};