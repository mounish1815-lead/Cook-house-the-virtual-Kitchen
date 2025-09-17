import React from 'react';
import { Filter, Search } from 'lucide-react';

interface MenuFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedCuisine: string;
  onCuisineChange: (cuisine: string) => void;
  showPopularOnly: boolean;
  onPopularToggle: (show: boolean) => void;
}

export function MenuFilters({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedCuisine,
  onCuisineChange,
  showPopularOnly,
  onPopularToggle,
}: MenuFiltersProps) {
  const categories = ['all', 'veg', 'non-veg'];
  const cuisines = ['all', 'North Indian', 'South Indian', 'Punjabi', 'Kashmiri', 'Hyderabadi'];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
      <div className="flex items-center space-x-2 mb-6">
        <Filter className="h-5 w-5 text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-900">Filter & Search</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search dishes..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        {/* Category Filter */}
        <div>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="all">All Categories</option>
            <option value="veg">Vegetarian</option>
            <option value="non-veg">Non-Vegetarian</option>
          </select>
        </div>

        {/* Cuisine Filter */}
        <div>
          <select
            value={selectedCuisine}
            onChange={(e) => onCuisineChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            {cuisines.map((cuisine) => (
              <option key={cuisine} value={cuisine}>
                {cuisine === 'all' ? 'All Cuisines' : cuisine}
              </option>
            ))}
          </select>
        </div>

        {/* Popular Filter */}
        <div className="flex items-center">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showPopularOnly}
              onChange={(e) => onPopularToggle(e.target.checked)}
              className="h-4 w-4 text-emerald-600 rounded focus:ring-emerald-500"
            />
            <span className="text-sm font-medium text-gray-700">Popular Only</span>
          </label>
        </div>
      </div>
    </div>
  );
}