import React from 'react';
import { Check, Star } from 'lucide-react';
import { SubscriptionPlan } from '../../types';
import { Button } from '../UI/Button';

interface PlanCardProps {
  plan: SubscriptionPlan;
  isPopular?: boolean;
}

export function PlanCard({ plan, isPopular }: PlanCardProps) {
  const getBadgeColor = () => {
    switch (plan.type) {
      case 'veg': return 'bg-emerald-100 text-emerald-800';
      case 'non-veg': return 'bg-orange-100 text-orange-800';
      case 'mixed': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`relative bg-white rounded-2xl shadow-lg p-8 ${isPopular ? 'ring-2 ring-emerald-500 scale-105' : ''} hover:shadow-xl transition-all duration-300`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
            <Star className="h-4 w-4 fill-current" />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      <div className="text-center mb-6">
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${getBadgeColor()}`}>
          {plan.type.charAt(0).toUpperCase() + plan.type.slice(1).replace('-', ' ')}
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        <p className="text-gray-600 mb-4">{plan.description}</p>
        
        <div className="mb-4">
          <span className="text-4xl font-bold text-gray-900">₹{plan.price}</span>
          <span className="text-gray-600">/{plan.duration}</span>
        </div>
        
        <p className="text-sm text-gray-500">
          {plan.mealsPerWeek} meals • ₹{Math.round(plan.price / plan.mealsPerWeek)} per meal
        </p>
      </div>

      <div className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
              <Check className="h-3 w-3 text-emerald-600" />
            </div>
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>

      <Button 
        className="w-full" 
        variant={isPopular ? 'primary' : 'outline'}
      >
        Choose Plan
      </Button>
    </div>
  );
}