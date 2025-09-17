import React, { useState } from 'react';
import { Plus, Heart, Star } from 'lucide-react';
import { MenuItem } from '../../types';
import { Button } from '../UI/Button';
import { useApp } from '../../context/AppContext';

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSpiceLevel, setSelectedSpiceLevel] = useState(item.spiceLevel || 'medium');
  const [selectedSize, setSelectedSize] = useState(item.customizations?.sizes?.[0] || '');
  const [extraToppings, setExtraToppings] = useState<string[]>([]);
  const { dispatch } = useApp();

  const handleAddToCart = () => {
    const totalPrice = item.price * quantity;
    
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item,
        quantity,
        selectedSpiceLevel,
        selectedSize,
        extraToppings,
        totalPrice,
      },
    });
  };

  const toggleTopping = (topping: string) => {
    setExtraToppings(prev =>
      prev.includes(topping)
        ? prev.filter(t => t !== topping)
        : [...prev, topping]
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
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
        {item.isPopular && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium">
            Popular
          </div>
        )}
        <button className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
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

        <p className="text-gray-600 mb-4">{item.description}</p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-gray-900">₹{item.price}</span>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {item.cuisine}
          </span>
        </div>

        {/* Customization Options */}
        <div className="space-y-4 mb-6">
          {item.customizations?.spiceLevels && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Spice Level
              </label>
              <div className="flex space-x-2">
                {['mild', 'medium', 'hot'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedSpiceLevel(level)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedSpiceLevel === level
                        ? 'bg-orange-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {item.customizations?.sizes && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Size
              </label>
              <div className="flex space-x-2">
                {item.customizations.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Quantity</span>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                -
              </button>
              <span className="font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <Button onClick={handleAddToCart} className="w-full">
          Add to Cart - ₹{item.price * quantity}
        </Button>
      </div>
    </div>
  );
}