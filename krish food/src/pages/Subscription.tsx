import React from 'react';
import { PlanCard } from '../components/Subscription/PlanCard';
import { subscriptionPlans } from '../data/menuData';
import { Truck, Calendar, Shield, Gift } from 'lucide-react';

export function Subscription() {
  const benefits = [
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Choose your delivery days and customize your meal preferences'
    },
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'No delivery charges on subscription orders, save more every month'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'Fresh, hygienic meals prepared by expert chefs every single day'
    },
    {
      icon: Gift,
      title: 'Exclusive Perks',
      description: 'Get special discounts, priority support, and seasonal bonuses'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Subscription Plans</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Save time and money with our convenient meal subscription plans. Get fresh, delicious meals 
            delivered regularly without the hassle of daily ordering.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {subscriptionPlans.map((plan, index) => (
            <PlanCard 
              key={plan.id} 
              plan={plan} 
              isPopular={index === 2} // Make the mixed plan popular
            />
          ))}
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I pause my subscription?</h3>
                <p className="text-gray-600">Yes, you can pause your subscription anytime from your account dashboard. Your billing will be paused accordingly.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How does delivery scheduling work?</h3>
                <p className="text-gray-600">You can choose your preferred delivery time slots and days. Our team will coordinate with you for the most convenient schedule.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I customize my meals?</h3>
                <p className="text-gray-600">Absolutely! You can set your spice preferences, dietary restrictions, and even skip certain ingredients you don't like.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What if I don't like a meal?</h3>
                <p className="text-gray-600">We offer a satisfaction guarantee. If you're not happy with any meal, we'll replace it or credit your account.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How do I cancel my subscription?</h3>
                <p className="text-gray-600">You can cancel anytime from your account settings. There are no cancellation fees or hidden charges.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Are there any setup fees?</h3>
                <p className="text-gray-600">No setup fees! You only pay for your chosen subscription plan. First-time subscribers get a 10% discount.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}