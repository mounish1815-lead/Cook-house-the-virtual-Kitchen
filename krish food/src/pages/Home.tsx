import React from 'react';
import { Hero } from '../components/Home/Hero';
import { FeaturedDishes } from '../components/Home/FeaturedDishes';
import { WhyChooseUs } from '../components/Home/WhyChooseUs';

export function Home() {
  return (
    <div>
      <Hero />
      <FeaturedDishes />
      <WhyChooseUs />
    </div>
  );
}