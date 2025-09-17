import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import SubscribePage from './pages/SubscribePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Recipe } from './types/Recipe';
import { recipes } from './data/recipes';

function App() {
  const [favoriteRecipes, setFavoriteRecipes] = useState<string[]>([]);

  const toggleFavorite = (recipeId: string) => {
    setFavoriteRecipes(prev => 
      prev.includes(recipeId) 
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage recipes={recipes} />} />
          <Route path="/categories" element={<CategoriesPage recipes={recipes} />} />
          <Route 
            path="/recipe/:id" 
            element={
              <RecipeDetailPage 
                recipes={recipes} 
                favoriteRecipes={favoriteRecipes}
                onToggleFavorite={toggleFavorite}
              />
            } 
          />
          <Route path="/subscribe" element={<SubscribePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;