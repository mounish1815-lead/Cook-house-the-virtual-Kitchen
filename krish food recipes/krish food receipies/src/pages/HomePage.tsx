import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Users, Leaf, Drumstick } from 'lucide-react';
import { Recipe } from '../types/Recipe';

interface HomePageProps {
  recipes: Recipe[];
}

const HomePage: React.FC<HomePageProps> = ({ recipes }) => {
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to <span className="text-yellow-300">Krish Foods</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover amazing recipes from around the world. From traditional vegetarian delights 
            to mouth-watering non-vegetarian specialties, we've got something for every palate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/categories"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transform hover:scale-105 transition-all shadow-lg"
            >
              Explore Recipes
            </Link>
            <Link
              to="/subscribe"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all"
            >
              Subscribe Now
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Choose Your Culinary Adventure
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to="/categories"
              className="group relative overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-green-400 to-green-600 p-12 text-white">
                <Leaf className="h-16 w-16 mb-6 group-hover:rotate-12 transition-transform" />
                <h3 className="text-3xl font-bold mb-4">🥦 Vegetarian</h3>
                <p className="text-lg opacity-90">
                  Fresh, healthy, and delicious plant-based recipes that will satisfy your taste buds
                </p>
                <div className="mt-6 text-sm opacity-75">
                  {recipes.filter(r => r.category === 'vegetarian').length} recipes available
                </div>
              </div>
            </Link>
            
            <Link
              to="/categories"
              className="group relative overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-red-500 to-red-700 p-12 text-white">
                <Drumstick className="h-16 w-16 mb-6 group-hover:rotate-12 transition-transform" />
                <h3 className="text-3xl font-bold mb-4">🍗 Non-Vegetarian</h3>
                <p className="text-lg opacity-90">
                  Rich, flavorful meat and seafood dishes from various cuisines around the world
                </p>
                <div className="mt-6 text-sm opacity-75">
                  {recipes.filter(r => r.category === 'non-vegetarian').length} recipes available
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Featured Recipes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      recipe.category === 'vegetarian' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {recipe.category === 'vegetarian' ? '🥬 Veg' : '🍖 Non-Veg'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{recipe.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{recipe.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{recipe.cookingTime} min</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {recipe.cuisine} • {recipe.difficulty}
                  </p>
                  <Link
                    to={`/recipe/${recipe.id}`}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all text-center block"
                  >
                    View Recipe
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{recipes.length}+</div>
              <div className="text-lg opacity-90">Delicious Recipes</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-lg opacity-90">Happy Cooks</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Cuisines</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;