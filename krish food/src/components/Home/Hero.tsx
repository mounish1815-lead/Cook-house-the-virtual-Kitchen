import React from 'react';
import { ArrowRight, Clock, Shield, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../UI/Button';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-orange-50 overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Authentic Indian
                <span className="text-emerald-600"> Flavors</span>
                <br />
                <span className="text-orange-600">Delivered Fresh</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the rich taste of traditional Indian cuisine made with fresh ingredients 
                and delivered hot to your doorstep. From aromatic biryanis to creamy curries, 
                we bring the authentic flavors of India to your table.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/menu">
                <Button size="lg" className="w-full sm:w-auto">
                  Order Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/subscription">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Subscription Plans
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Quick Delivery</h3>
                  <p className="text-sm text-gray-600">30-45 minutes</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Fresh & Safe</h3>
                  <p className="text-sm text-gray-600">Quality assured</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Truck className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Free Delivery</h3>
                  <p className="text-sm text-gray-600">Above ₹299</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg"
                alt="Delicious Indian Food"
                className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}