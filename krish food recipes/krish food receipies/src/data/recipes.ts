import { Recipe } from '../types/Recipe';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Butter Chicken',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'non-vegetarian',
    ingredients: [
      '1 lb chicken breast, cubed',
      '1 cup heavy cream',
      '2 tbsp butter',
      '1 onion, diced',
      '3 cloves garlic, minced',
      '1 tbsp ginger, grated',
      '2 tbsp tomato paste',
      '1 tsp garam masala',
      '1 tsp cumin',
      '1 tsp paprika',
      'Salt and pepper to taste',
      'Fresh cilantro for garnish'
    ],
    instructions: [
      'Season chicken with salt, pepper, and half the spices',
      'Heat butter in a large pan and cook chicken until golden',
      'Remove chicken and sauté onions until soft',
      'Add garlic, ginger, and remaining spices. Cook for 1 minute',
      'Stir in tomato paste and cook for 2 minutes',
      'Add cream and bring to a simmer',
      'Return chicken to pan and simmer for 10 minutes',
      'Garnish with cilantro and serve with rice'
    ],
    cookingTime: 30,
    difficulty: 'Medium',
    rating: 4.8,
    cuisine: 'Indian',
    reviews: [
      {
        id: '1',
        userName: 'Sarah M.',
        rating: 5,
        comment: 'Absolutely delicious! The flavors were perfect.',
        date: '2024-01-15'
      },
      {
        id: '2',
        userName: 'Mike R.',
        rating: 4,
        comment: 'Great recipe, will make again!',
        date: '2024-01-10'
      }
    ],
    nutritionalInfo: {
      calories: 420,
      protein: '35g',
      carbs: '8g',
      fat: '28g'
    }
  },
  {
    id: '2',
    title: 'Palak Paneer',
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'vegetarian',
    ingredients: [
      '200g paneer, cubed',
      '500g fresh spinach',
      '1 onion, chopped',
      '3 tomatoes, chopped',
      '4 cloves garlic',
      '1 inch ginger',
      '2 green chilies',
      '1 tsp cumin seeds',
      '1 tsp garam masala',
      '1/2 tsp turmeric',
      '2 tbsp oil',
      'Salt to taste',
      '1/4 cup cream'
    ],
    instructions: [
      'Blanch spinach in boiling water for 2 minutes, then blend to paste',
      'Heat oil and fry paneer cubes until golden, set aside',
      'In same pan, add cumin seeds and let them splutter',
      'Add onions and cook until golden brown',
      'Add ginger-garlic paste and green chilies',
      'Add tomatoes and cook until soft',
      'Add spices and cook for 2 minutes',
      'Add spinach paste and simmer for 5 minutes',
      'Add paneer and cream, simmer for 3 minutes',
      'Serve hot with roti or rice'
    ],
    cookingTime: 25,
    difficulty: 'Easy',
    rating: 4.6,
    cuisine: 'Indian',
    reviews: [
      {
        id: '3',
        userName: 'Priya K.',
        rating: 5,
        comment: 'Perfect comfort food! Just like my mom makes.',
        date: '2024-01-12'
      }
    ],
    nutritionalInfo: {
      calories: 280,
      protein: '18g',
      carbs: '12g',
      fat: '20g'
    }
  },
  {
    id: '3',
    title: 'Grilled Salmon',
    image: 'https://images.pexels.com/photos/3622643/pexels-photo-3622643.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'non-vegetarian',
    ingredients: [
      '4 salmon fillets',
      '2 tbsp olive oil',
      '2 lemons (juiced)',
      '3 cloves garlic, minced',
      '1 tsp dried dill',
      '1 tsp paprika',
      'Salt and black pepper',
      'Fresh parsley for garnish'
    ],
    instructions: [
      'Preheat grill to medium-high heat',
      'Mix olive oil, lemon juice, garlic, dill, and paprika',
      'Season salmon with salt and pepper',
      'Brush salmon with the oil mixture',
      'Grill for 4-5 minutes per side',
      'Check internal temperature reaches 145°F',
      'Garnish with fresh parsley and serve'
    ],
    cookingTime: 15,
    difficulty: 'Easy',
    rating: 4.7,
    cuisine: 'Mediterranean',
    reviews: [
      {
        id: '4',
        userName: 'John D.',
        rating: 5,
        comment: 'Simple and delicious! Perfect for weeknight dinners.',
        date: '2024-01-08'
      }
    ],
    nutritionalInfo: {
      calories: 350,
      protein: '40g',
      carbs: '2g',
      fat: '20g'
    }
  },
  {
    id: '4',
    title: 'Vegetable Biryani',
    image: 'https://images.pexels.com/photos/8753657/pexels-photo-8753657.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'vegetarian',
    ingredients: [
      '2 cups basmati rice',
      '1 cup mixed vegetables',
      '1 large onion, sliced',
      '1/2 cup yogurt',
      '1/4 cup mint leaves',
      '1/4 cup cilantro',
      '1 tsp garam masala',
      '1 tsp biryani masala',
      '4 green cardamom',
      '2 bay leaves',
      '1 cinnamon stick',
      'Saffron soaked in milk',
      'Ghee and oil',
      'Salt to taste'
    ],
    instructions: [
      'Soak rice for 30 minutes, then boil with whole spices',
      'Fry onions until golden and crispy, set aside',
      'Cook vegetables with yogurt and spices',
      'Layer rice and vegetables in a heavy-bottomed pot',
      'Top with fried onions, mint, cilantro, and saffron milk',
      'Cover and cook on high heat for 3 minutes',
      'Reduce heat and cook for 45 minutes',
      'Let it rest for 10 minutes before serving',
      'Serve with raita and pickle'
    ],
    cookingTime: 90,
    difficulty: 'Hard',
    rating: 4.9,
    cuisine: 'Indian',
    reviews: [
      {
        id: '5',
        userName: 'Anita S.',
        rating: 5,
        comment: 'Best biryani recipe ever! Takes time but worth every minute.',
        date: '2024-01-05'
      }
    ],
    nutritionalInfo: {
      calories: 380,
      protein: '12g',
      carbs: '65g',
      fat: '8g'
    }
  }
];