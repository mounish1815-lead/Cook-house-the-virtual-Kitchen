export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'veg' | 'non-veg';
  cuisine: string;
  isPopular?: boolean;
  spiceLevel?: 'mild' | 'medium' | 'hot';
  customizations?: {
    spiceLevels: boolean;
    extraToppings: string[];
    sizes?: string[];
  };
}

export interface CartItem extends MenuItem {
  quantity: number;
  selectedSpiceLevel?: string;
  selectedSize?: string;
  extraToppings: string[];
  totalPrice: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  favorites: string[];
  orderHistory: Order[];
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered';
  orderDate: Date;
  deliveryAddress: string;
  estimatedDeliveryTime: Date;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: 'weekly' | 'monthly';
  type: 'veg' | 'non-veg' | 'mixed';
  mealsPerWeek: number;
  features: string[];
}