import React from 'react';
import { Heart, Users, Award, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Food',
      description: 'We believe cooking is an art form that brings people together and creates lasting memories.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Our community of food lovers shares, learns, and grows together through the joy of cooking.'
    },
    {
      icon: Award,
      title: 'Quality Recipes',
      description: 'Every recipe is carefully tested and curated to ensure the best cooking experience.'
    },
    {
      icon: Globe,
      title: 'Global Cuisine',
      description: 'We celebrate diverse culinary traditions from around the world, bringing flavors to your kitchen.'
    }
  ];

  const team = [
    {
      name: 'Krish Patel',
      role: 'Founder & Head Chef',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With 15 years of culinary experience, Krish founded this platform to share his passion for authentic flavors.'
    },
    {
      name: 'Priya Sharma',
      role: 'Recipe Developer',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Priya specializes in traditional Indian cuisine and modern fusion dishes that delight the senses.'
    },
    {
      name: 'Marco Rodriguez',
      role: 'International Cuisine Expert',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Marco brings authentic flavors from Mediterranean and Latin American cuisines to our platform.'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Krish Foods
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Born from a passion for authentic flavors and the joy of sharing meals, 
            Krish Foods is your gateway to discovering incredible recipes from around the world. 
            We believe that great food brings people together and creates unforgettable moments.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Krish Foods began in 2020 when our founder, Krish Patel, realized that authentic, 
                  home-style recipes were becoming harder to find in our fast-paced digital world. 
                  Growing up in a family where cooking was a celebration, Krish wanted to preserve 
                  and share these precious culinary traditions.
                </p>
                <p>
                  What started as a small blog sharing family recipes has grown into a vibrant 
                  community of food enthusiasts from all walks of life. Today, we feature recipes 
                  from professional chefs, home cooks, and food lovers who share our passion for 
                  authentic, delicious cuisine.
                </p>
                <p>
                  Our mission is simple: to make cooking accessible, enjoyable, and meaningful for 
                  everyone, regardless of their skill level or background.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cooking together"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl text-white p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Recipes Shared</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-lg opacity-90">Happy Cooks</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg opacity-90">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-lg opacity-90">Meals Cooked</div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            To inspire and empower people to create delicious, meaningful meals that bring joy, 
            nourishment, and connection to their lives. We believe that everyone deserves access 
            to great recipes and the confidence to cook with passion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;