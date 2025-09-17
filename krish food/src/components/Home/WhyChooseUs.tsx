import React from 'react';
import { ChefHat, Clock, Leaf, Shield, Users, Award } from 'lucide-react';

const features = [
  {
    icon: ChefHat,
    title: 'Expert Chefs',
    description: 'Our experienced chefs bring authentic Indian flavors to every dish',
    color: 'emerald'
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'We source the freshest ingredients and spices for maximum flavor',
    color: 'green'
  },
  {
    icon: Clock,
    title: 'Quick Delivery',
    description: 'Hot, fresh meals delivered to your doorstep in 30-45 minutes',
    color: 'orange'
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Strict quality control and hygienic food preparation standards',
    color: 'blue'
  },
  {
    icon: Users,
    title: 'Happy Customers',
    description: 'Over 10,000+ satisfied customers trust us for their daily meals',
    color: 'purple'
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized for excellence in food quality and customer service',
    color: 'yellow'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Krish Foods?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering not just food, but an exceptional dining experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className={`h-8 w-8 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}