export type DietaryTag = 'Vegetarian' | 'Vegan' | 'Gluten-Friendly' | 'Halal' | 'Chef Special';

export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  description: string;
  price: number; // in CAD
  category: MenuCategory;
  image: string;
  tags: DietaryTag[];
  isSignature?: boolean;
  spiceLevel?: 0 | 1 | 2 | 3; // 0 mild, 1 medium, 2 spicy, 3 extra spicy
  pairing?: string;
}

export type MenuCategory = 
  | 'Appetizers'
  | 'Non - Veg'
  | 'Veg Curry'
  | 'Non-Veg Curry'
  | 'Lamb Curry'
  | 'South Indian'
  | 'Thalis'
  | 'Biryani et Riz'
  | 'Bread and Rice'
  | 'Desi Chinese Veg'
  | 'Desi Chinese Non-Veg'
  | 'Wraps and Burgers';

export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  location: string;
  rating: number;
  quote: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Curries' | 'Tandoor' | 'Biryani' | 'Desserts' | 'Restaurant';
  image: string;
  caption: string;
}

export interface ReservationRequest {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion?: string;
  dietaryNotes?: string;
  seatingPreference?: 'Standard' | 'Quiet Corner' | 'Chef View' | 'Private Dining';
}
