import React from 'react';
import { Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { menuItems } from '../../data/menuData';
import { Button } from '../UI/Button';

export function FeaturedDishes() {
  const featuredItems = menuItems.filter(item => item.isPopular);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Featured Dishes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most loved dishes, crafted with authentic recipes and the finest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.category === 'veg' 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {item.category === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                  </span>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                  <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">4.8</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">₹{item.price}</span>
                  <span className="text-sm text-gray-500">{item.cuisine}</span>
                </div>
                
                <Button className="w-full">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/menu">
            <Button variant="outline" size="lg">
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}