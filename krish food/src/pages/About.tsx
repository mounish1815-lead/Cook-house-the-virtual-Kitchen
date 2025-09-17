import React from 'react';
import { Heart, Users, Award, Clock } from 'lucide-react';

export function About() {
  const stats = [
    { number: '10,000+', label: 'Happy Customers', icon: Users },
    { number: '50+', label: 'Menu Items', icon: Heart },
    { number: '5+', label: 'Years Experience', icon: Clock },
    { number: '15+', label: 'Awards Won', icon: Award },
  ];

  const team = [
    {
      name: 'Krish Sharma',
      role: 'Founder & Head Chef',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      description: 'With over 15 years of culinary experience, Krish brings authentic Indian flavors to every dish.'
    },
    {
      name: 'Priya Patel',
      role: 'Operations Manager',
      image: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg',
      description: 'Ensures smooth operations and maintains our high standards of quality and customer service.'
    },
    {
      name: 'Raj Kumar',
      role: 'Head of Delivery',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg',
      description: 'Manages our delivery network to ensure your food reaches you fresh and on time.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Krish Foods
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Born from a passion for authentic Indian cuisine and a commitment to bringing 
              the taste of home to every doorstep, Krish Foods has been serving delicious, 
              fresh meals since 2019.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Krish Foods began as a dream in a small kitchen in Delhi. Our founder, 
                  Krish Sharma, was a software engineer who found solace in cooking traditional 
                  Indian recipes passed down through generations. What started as cooking for 
                  friends and family soon turned into a passion project.
                </p>
                <p>
                  In 2019, we officially launched Krish Foods with a simple mission: to make 
                  authentic, home-style Indian food accessible to everyone. We believe that good 
                  food brings people together and creates lasting memories.
                </p>
                <p>
                  Today, we're proud to serve over 10,000 customers across the city, maintaining 
                  the same commitment to quality, authenticity, and freshness that started it all. 
                  Every dish is prepared with love, using traditional recipes and the finest ingredients.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg"
                alt="Our kitchen"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're driven by simple yet powerful principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. From sourcing the finest ingredients to 
                maintaining strict hygiene standards, excellence is our priority.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Centric</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We listen, adapt, 
                and continuously improve to exceed expectations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Authenticity</h3>
              <p className="text-gray-600">
                We preserve traditional recipes and cooking methods while embracing 
                modern techniques to deliver authentic flavors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Krish Foods who work tirelessly to bring you the best dining experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}