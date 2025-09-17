import React, { useState } from 'react';
import { Mail, Check, Gift, Clock, Star } from 'lucide-react';

const SubscribePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('weekly');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const benefits = [
    'Weekly featured recipes delivered to your inbox',
    'Exclusive cooking tips from professional chefs',
    'Seasonal recipe collections',
    'Early access to new recipes',
    'Personalized recipe recommendations',
    'Monthly cooking challenges with prizes'
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Subscribe to Krish Foods
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of food lovers and get the best recipes, cooking tips, 
            and culinary inspiration delivered straight to your inbox.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Subscription Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose Your Plan</h2>
            
            {/* Plan Selection */}
            <div className="space-y-4 mb-8">
              <div 
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedPlan === 'weekly' 
                    ? 'border-orange-500 bg-orange-50' 
                    : 'border-gray-200 hover:border-orange-300'
                }`}
                onClick={() => setSelectedPlan('weekly')}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">Weekly Digest</h3>
                    <p className="text-sm text-gray-600">Perfect for busy food lovers</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-600">Free</div>
                    <div className="text-xs text-gray-500">Every Tuesday</div>
                  </div>
                </div>
              </div>

              <div 
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedPlan === 'daily' 
                    ? 'border-orange-500 bg-orange-50' 
                    : 'border-gray-200 hover:border-orange-300'
                }`}
                onClick={() => setSelectedPlan('daily')}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">Daily Inspiration</h3>
                    <p className="text-sm text-gray-600">For passionate home cooks</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-600">Free</div>
                    <div className="text-xs text-gray-500">Every day</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Form */}
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105"
                >
                  Subscribe Now
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Successfully Subscribed!</h3>
                <p className="text-gray-600">
                  Welcome to the Krish Foods family! Check your email for a confirmation message.
                </p>
              </div>
            )}

            <p className="text-xs text-gray-500 mt-4 text-center">
              By subscribing, you agree to receive emails from Krish Foods. 
              You can unsubscribe at any time.
            </p>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">What You'll Get</h2>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">What Our Subscribers Say</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">
                    "The weekly recipes have transformed my cooking! I look forward to every email."
                  </p>
                  <p className="text-xs text-gray-500">- Sarah M., Home Cook</p>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">
                    "Amazing recipes and clear instructions. My family loves everything I make now!"
                  </p>
                  <p className="text-xs text-gray-500">- Michael R., Food Enthusiast</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">50K+</div>
                <div className="text-sm text-gray-600">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">500+</div>
                <div className="text-sm text-gray-600">Recipes Shared</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">4.9★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;