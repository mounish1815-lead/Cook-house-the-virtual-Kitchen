import React, { useState, useMemo } from 'react';
import { MenuCard } from '../components/Menu/MenuCard';
import { MenuFilters } from '../components/Menu/MenuFilters';
import { menuItems } from '../data/menuData';

export function Menu() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCuisine, setSelectedCuisine] = useState('all');
  const [showPopularOnly, setShowPopularOnly] = useState(false);

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesCuisine = selectedCuisine === 'all' || item.cuisine === selectedCuisine;
      const matchesPopular = !showPopularOnly || item.isPopular;

      return matchesSearch && matchesCategory && matchesCuisine && matchesPopular;
    });
  }, [searchTerm, selectedCategory, selectedCuisine, showPopularOnly]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our delicious collection of authentic Indian dishes, carefully crafted with traditional recipes and fresh ingredients.
          </p>
        </div>

        {/* Filters */}
        <MenuFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedCuisine={selectedCuisine}
          onCuisineChange={setSelectedCuisine}
          showPopularOnly={showPopularOnly}
          onPopularToggle={setShowPopularOnly}
        />

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing {filteredItems.length} dish{filteredItems.length !== 1 ? 'es' : ''}
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.007-5.824-2.582M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No dishes found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}