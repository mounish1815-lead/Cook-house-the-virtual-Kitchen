import React from 'react';
import { ChefHat, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-8 w-8 text-emerald-500" />
              <span className="text-2xl font-bold">Krish Foods</span>
            </div>
            <p className="text-gray-400 mb-4">
              Delivering delicious, fresh, and authentic Indian cuisine right to your doorstep. 
              Experience the taste of home with every meal.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-emerald-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-emerald-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-emerald-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/subscription" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Subscription Plans
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/menu?category=veg" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Vegetarian
                </Link>
              </li>
              <li>
                <Link to="/menu?category=non-veg" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Non-Vegetarian
                </Link>
              </li>
              <li>
                <Link to="/menu?cuisine=north-indian" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  North Indian
                </Link>
              </li>
              <li>
                <Link to="/menu?cuisine=south-indian" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  South Indian
                </Link>
              </li>
              <li>
                <Link to="/menu?popular=true" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  Popular Items
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-400">orders@krishfoods.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  123 Food Street, Gourmet District,<br />
                  Delhi, India - 110001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Krish Foods. All rights reserved. | Delivering happiness, one meal at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}