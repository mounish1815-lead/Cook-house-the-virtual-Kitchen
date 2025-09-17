import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  Clock, 
  Users, 
  Heart, 
  ArrowLeft, 
  Leaf, 
  Drumstick,
  ChefHat,
  MessageCircle
} from 'lucide-react';
import { Recipe } from '../types/Recipe';

interface RecipeDetailPageProps {
  recipes: Recipe[];
  favoriteRecipes: string[];
  onToggleFavorite: (recipeId: string) => void;
}

const RecipeDetailPage: React.FC<RecipeDetailPageProps> = ({ 
  recipes, 
  favoriteRecipes, 
  onToggleFavorite 
}) => {
  const { id } = useParams<{ id: string }>();
  const [newReview, setNewReview] = useState({ rating: 5, comment: '', userName: '' });
  const [showReviewForm, setShowReviewForm] = useState(false);

  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recipe not found</h2>
          <Link to="/categories" className="text-orange-600 hover:text-orange-700">
            ← Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  const isFavorite = favoriteRecipes.includes(recipe.id);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    console.log('New review:', newReview);
    setNewReview({ rating: 5, comment: '', userName: '' });
    setShowReviewForm(false);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/categories" 
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Categories
        </Link>

        {/* Recipe Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center space-x-2 mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 ${
                  recipe.category === 'vegetarian' 
                    ? 'bg-green-500/80 text-white' 
                    : 'bg-red-500/80 text-white'
                }`}>
                  {recipe.category === 'vegetarian' ? (
                    <>
                      <Leaf className="h-3 w-3" />
                      <span>Vegetarian</span>
                    </>
                  ) : (
                    <>
                      <Drumstick className="h-3 w-3" />
                      <span>Non-Vegetarian</span>
                    </>
                  )}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">
                  {recipe.cuisine}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{recipe.title}</h1>
            </div>
            <button
              onClick={() => onToggleFavorite(recipe.id)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            >
              <Heart 
                className={`h-6 w-6 ${isFavorite ? 'text-red-500 fill-current' : 'text-white'}`} 
              />
            </button>
          </div>

          <div className="p-6">
            {/* Recipe Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
                <div className="text-2xl font-bold text-gray-800">{recipe.rating}</div>
                <div className="text-sm text-gray-600">{recipe.reviews.length} reviews</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-5 w-5 text-orange-500" />
                </div>
                <div className="text-2xl font-bold text-gray-800">{recipe.cookingTime}</div>
                <div className="text-sm text-gray-600">minutes</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <ChefHat className="h-5 w-5 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-gray-800">{recipe.difficulty}</div>
                <div className="text-sm text-gray-600">difficulty</div>
              </div>
            </div>

            {/* Nutritional Info */}
            {recipe.nutritionalInfo && (
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Nutritional Information (per serving)</h3>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-orange-600">{recipe.nutritionalInfo.calories}</div>
                    <div className="text-xs text-gray-600">Calories</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-600">{recipe.nutritionalInfo.protein}</div>
                    <div className="text-xs text-gray-600">Protein</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">{recipe.nutritionalInfo.carbs}</div>
                    <div className="text-xs text-gray-600">Carbs</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-600">{recipe.nutritionalInfo.fat}</div>
                    <div className="text-xs text-gray-600">Fat</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recipe Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ingredients */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Ingredients</h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Instructions</h2>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 leading-relaxed">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <MessageCircle className="h-6 w-6 mr-2" />
              Reviews ({recipe.reviews.length})
            </h2>
            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all"
            >
              Write Review
            </button>
          </div>

          {/* Review Form */}
          {showReviewForm && (
            <form onSubmit={handleSubmitReview} className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your name"
                  value={newReview.userName}
                  onChange={(e) => setNewReview({ ...newReview, userName: e.target.value })}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
                <select
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value={5}>5 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={2}>2 Stars</option>
                  <option value={1}>1 Star</option>
                </select>
              </div>
              <textarea
                placeholder="Write your review..."
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent mb-4"
                rows={3}
                required
              />
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Submit Review
                </button>
                <button
                  type="button"
                  onClick={() => setShowReviewForm(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {/* Reviews List */}
          <div className="space-y-4">
            {recipe.reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {review.userName.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-semibold text-gray-800">{review.userName}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;