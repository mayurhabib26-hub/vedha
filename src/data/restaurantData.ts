import { MenuItem, Testimonial, GalleryItem } from '../types';

export const RESTAURANT_INFO = {
  name: 'VEDHA',
  subname: 'Chez Cuisine Indienne',
  tagline: 'A Taste of India, Crafted with Elegance',
  phone: '+1 (514) 842-7890',
  formattedPhone: '+1 514 842 7890',
  email: 'hello@vedha.ca',
  reservationsEmail: 'reservations@vedha.ca',
  address: {
    street: '1428 Rue Sainte-Catherine Ouest',
    suite: 'Floor 2, Golden Square Mile',
    city: 'Montréal',
    province: 'Quebec',
    country: 'Canada',
    postalCode: 'H3G 1R3'
  },
  hours: [
    { days: 'Monday – Thursday', times: '11:30 AM – 10:00 PM', service: 'Lunch & Dinner' },
    { days: 'Friday – Saturday', times: '11:30 AM – 11:00 PM', service: 'Late Night Dining' },
    { days: 'Sunday', times: '12:00 PM – 10:00 PM', service: 'Royal Feast & Dinner' }
  ],
  socials: {
    instagram: 'https://instagram.com/vedha.cuisine',
    facebook: 'https://facebook.com/vedhacuisine',
    tiktok: 'https://tiktok.com/@vedharestaurant'
  }
};

export const SIGNATURE_DISHES: MenuItem[] = [
  {
    id: 'sig-1',
    name: 'Butter Chicken',
    description: 'Boneless chicken cooked in a rich butter cream garnished with coriander.',
    price: 17.99,
    category: 'Non-Veg Curry',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=80',
    tags: ['Halal', 'Gluten-Friendly', 'Chef Special'],
    isSignature: true,
    spiceLevel: 1,
    pairing: 'Garlic Naan & Crisp Indian Chai'
  },
  {
    id: 'sig-2',
    name: 'Paneer Tikka',
    description: 'Indian cheese marinated in a spiced yogurt mixture, skewered and grilled to perfection.',
    price: 17.99,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1000&q=80',
    tags: ['Vegetarian', 'Gluten-Friendly', 'Chef Special'],
    isSignature: true,
    spiceLevel: 2,
    pairing: 'Mint Laccha Chutney & Refreshing Lassi'
  },
  {
    id: 'sig-3',
    name: 'Lamb Rogan Josh',
    description: 'Lamb cooked with mint, yogurt and Indians spices.',
    price: 18.99,
    category: 'Lamb Curry',
    image: 'https://images.unsplash.com/photo-1708782344490-9026aaa5eec7?auto=format&fit=crop&w=1000&q=80',
    tags: ['Halal', 'Gluten-Friendly', 'Chef Special'],
    isSignature: true,
    spiceLevel: 2,
    pairing: 'Butter Naan & Saffron Rice'
  },
  {
    id: 'sig-4',
    name: 'Hyderabadi Biryani',
    description: 'Fragrant basmati rice cooked Hyderabadi-style with rich spices and fresh herbs.',
    price: 15.99,
    category: 'Biryani et Riz',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80',
    tags: ['Halal', 'Chef Special'],
    isSignature: true,
    spiceLevel: 2,
    pairing: 'Mirchi Ka Salan & Cucumber Raita'
  },
  {
    id: 'sig-5',
    name: 'Dal Makhni',
    description: 'Black daal cooked with various spiced garnished with tomatoes and cream.',
    price: 16.99,
    category: 'Veg Curry',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    tags: ['Vegetarian', 'Gluten-Friendly', 'Chef Special'],
    isSignature: true,
    spiceLevel: 1,
    pairing: 'Tandoori Roti & Jeera Rice'
  },
  {
    id: 'sig-6',
    name: 'Butter Chicken Thali',
    description: 'Popular favorite featuring signature Butter Chicken, aromatic basmati rice, dal, fresh tandoori naan, and crisp salad.',
    price: 15.99,
    category: 'Thalis',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1000&q=80',
    tags: ['Halal', 'Chef Special'],
    isSignature: true,
    spiceLevel: 1,
    pairing: 'Fresh Sweet Mango Lassi'
  }
];

export const FULL_MENU: MenuItem[] = [
  // ==========================================
  // 1. APPETIZERS
  // ==========================================
  {
    id: 'app-1',
    name: 'Samosa Vegetarien (2)',
    description: 'Indian patty stuffed with potatoes & peas prepared with various spices.',
    price: 4.99,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Vegan'],
    spiceLevel: 1
  },
  {
    id: 'app-2',
    name: 'Samosa Chaat (2)',
    description: 'Veggie Samosa served with chick pea curry garnished with onions, tomatoes, yogurt & sweet chutney.',
    price: 8.99,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Chef Special'],
    spiceLevel: 1
  },
  {
    id: 'app-3',
    name: 'Vegetarian Pakora (6)',
    description: 'Indian Finger food made with cauliflower chick peas, flour & spinach.',
    price: 11.99,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Vegan', 'Gluten-Friendly'],
    spiceLevel: 1
  },
  {
    id: 'app-4',
    name: 'Paneer Pakora (10)',
    description: 'Nuggets made with cheese balls fried in chickpea flour batter.',
    price: 12.99,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },
  {
    id: 'app-5',
    name: 'Spring Rolls',
    description: 'Crispy rolls stuffed with mixed vegetables and spices.',
    price: 13.99,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },
  {
    id: 'app-6',
    name: 'Soya Masala Chaap',
    description: 'Soya chaap cooked in a spicy, flavorful masala gravy.',
    price: 17.99,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 2
  },
  {
    id: 'app-7',
    name: 'Soya Malai Chaap',
    description: 'Creamy, mildly spiced soya chaap marinated and grilled.',
    price: 19.99,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Chef Special'],
    spiceLevel: 1
  },
  {
    id: 'app-8',
    name: 'Soya Tandoori Chaap',
    description: 'Soya chap marinated in tandoori spices and grilled in a clay oven.',
    price: 19.99,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 2
  },
  {
    id: 'app-9',
    name: 'Chaat Papdi',
    description: 'Crisp fried dough wafers served with chickpeas garnished with onions, tomatoes, potatoes and chutneys.',
    price: 14.99,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },
  {
    id: 'app-10',
    name: 'Aloo Tikki Chaat',
    description: 'Crispy potato patties topped with chutneys, yogurt, and spices.',
    price: 9.99,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },
  {
    id: 'app-11',
    name: 'Dahi Puri (6)',
    description: 'Small, crisp puris filled with spiced potatoes, chickpeas, and sweet and tangy chutneys, with yogurt and garnished with sev (crispy noodle).',
    price: 10.99,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Chef Special'],
    spiceLevel: 1
  },
  {
    id: 'app-12',
    name: 'Paneer Tikka',
    description: 'Indian cheese marinated in a spiced yogurt mixture, skewered and grilled to perfection.',
    price: 17.99,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Gluten-Friendly', 'Chef Special'],
    isSignature: true,
    spiceLevel: 2
  },
  {
    id: 'app-13',
    name: 'Paneer Malai Tikka',
    description: 'Cheese marinated in a creamy blend of yogurt, cream, and aromatic spices, skewered and grilled to perfection.',
    price: 18.99,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },
  {
    id: 'app-14',
    name: 'Gobhi Pakora',
    description: 'Cauliflower florets dipped in spiced batter and deep-fried.',
    price: 10.99,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Vegan', 'Gluten-Friendly'],
    spiceLevel: 1
  },
  {
    id: 'app-15',
    name: 'Mix Tandoori Platter',
    description: 'A sizzling platter of assorted tandoori meats and appetizers.',
    price: 27.99,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    tags: ['Chef Special'],
    spiceLevel: 2
  },
  {
    id: 'app-16',
    name: 'French Fries',
    description: 'Crispy golden potato fries served with seasoning.',
    price: 5.99,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Vegan'],
    spiceLevel: 0
  },
  {
    id: 'app-17',
    name: 'Onion Rings',
    description: 'Crunchy battered onion rings, deep-fried to perfection.',
    price: 5.99,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 0
  },

  // ==========================================
  // 2. NON - VEG (Tandoor & Starters)
  // ==========================================
  {
    id: 'nv-1',
    name: 'Chicken Seekh Kabab',
    description: 'Minced meat seasoned with aromatic spices, molded onto skewers, and grilled.',
    price: 17.99,
    category: 'Non - Veg',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Gluten-Friendly'],
    spiceLevel: 2
  },
  {
    id: 'nv-2',
    name: 'Lamb Seekh Kabab',
    description: 'Minced lamb seasoned with aromatic spices, molded onto skewers, and grilled.',
    price: 19.99,
    category: 'Non - Veg',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Gluten-Friendly', 'Chef Special'],
    spiceLevel: 2
  },
  {
    id: 'nv-3',
    name: 'Chicken Tikka',
    description: 'Breast of chicken marinated in spices roasted in the Tandoor.',
    price: 18.99,
    category: 'Non - Veg',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Gluten-Friendly'],
    spiceLevel: 2
  },
  {
    id: 'nv-4',
    name: 'Chicken Malai Tikka',
    description: 'Chicken pieces marinated in a creamy blend of yogurt, cream, and aromatic spices, skewered and grilled to perfection.',
    price: 19.99,
    category: 'Non - Veg',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Chef Special'],
    spiceLevel: 1
  },
  {
    id: 'nv-5',
    name: 'Tandoori Chicken Legs',
    description: 'Chicken leg marinated in tandoori spices and grilled in a clay oven.',
    price: 7.99,
    category: 'Non - Veg',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Gluten-Friendly'],
    spiceLevel: 2
  },
  {
    id: 'nv-6',
    name: 'Tandoori Chicken Half',
    description: 'Juicy half chicken marinated in spices and grilled in a tandoor.',
    price: 17.99,
    category: 'Non - Veg',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Gluten-Friendly'],
    spiceLevel: 2
  },
  {
    id: 'nv-7',
    name: 'Tandoori Chicken Full',
    description: 'Whole chicken marinated in tandoori spices and grilled.',
    price: 25.99,
    category: 'Non - Veg',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Gluten-Friendly', 'Chef Special'],
    spiceLevel: 2
  },
  {
    id: 'nv-8',
    name: 'Chicken Tandoori Masala',
    description: 'Tandoori chicken simmered in a rich masala gravy.',
    price: 9.99,
    category: 'Non - Veg',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal'],
    spiceLevel: 2
  },
  {
    id: 'nv-9',
    name: 'Chicken Tandoori Masala Half',
    description: 'Tandoori chicken simmered in a rich masala gravy.',
    price: 17.99,
    category: 'Non - Veg',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal'],
    spiceLevel: 2
  },
  {
    id: 'nv-10',
    name: 'Chicken Tandoori Masala Full',
    description: 'Tandoor i chicken simmered in a rich masala gravy.',
    price: 24.99,
    category: 'Non - Veg',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal'],
    spiceLevel: 2
  },
  {
    id: 'nv-11',
    name: 'Afghani Chicken Drumstick',
    description: 'Creamy marinated chicken drumsticks grilled to perfection.',
    price: 20.99,
    category: 'Non - Veg',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Chef Special'],
    spiceLevel: 1
  },
  {
    id: 'nv-12',
    name: 'Fried Drumstick',
    description: 'Crispy deep-fried chicken drumsticks with spices.',
    price: 17.99,
    category: 'Non - Veg',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal'],
    spiceLevel: 2
  },
  {
    id: 'nv-13',
    name: 'Chicken Pakora Boneless',
    description: 'Boneless chicken fried in a spiced chickpea flour batter.',
    price: 17.99,
    category: 'Non - Veg',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal'],
    spiceLevel: 1
  },
  {
    id: 'nv-14',
    name: 'Tandoori Shrimp',
    description: 'Juicy shrimp marinated in tandoori spices and grilled to perfection.',
    price: 20.99,
    category: 'Non - Veg',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80',
    tags: ['Gluten-Friendly', 'Chef Special'],
    spiceLevel: 2
  },
  {
    id: 'nv-15',
    name: 'Chicken 65',
    description: 'Spicy South Indian-style fried chicken bites.',
    price: 19.99,
    category: 'Non - Veg',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal'],
    spiceLevel: 3
  },

  // ==========================================
  // 3. VEG CURRY
  // ==========================================
  {
    id: 'vc-1',
    name: 'Dal Makhni',
    description: 'Black daal cooked with various spiced garnished with tomatoes and cream.',
    price: 16.99,
    category: 'Veg Curry',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Gluten-Friendly', 'Chef Special'],
    isSignature: true,
    spiceLevel: 1
  },
  {
    id: 'vc-2',
    name: 'Daal Tadka',
    description: 'Yellow lentils cooked to perfection and tempered with a blend of spices, garlic, and onions.',
    price: 15.99,
    category: 'Veg Curry',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Vegan', 'Gluten-Friendly'],
    spiceLevel: 1
  },
  {
    id: 'vc-3',
    name: 'Shahi Paneer',
    description: 'Cheese cooked in a creamy sauce garnished with spices.',
    price: 17.99,
    category: 'Veg Curry',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Gluten-Friendly'],
    spiceLevel: 1
  },
  {
    id: 'vc-4',
    name: 'Butter Paneer',
    description: 'Paneer cheese cooked in a rich butter cream garnished with coriander.',
    price: 17.99,
    category: 'Veg Curry',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Gluten-Friendly'],
    spiceLevel: 1
  },
  {
    id: 'vc-5',
    name: 'Kadhai Paneer',
    description: '(Indian cheese) cooked with bell peppers, onions, tomatoes, and aromatic spices in a traditional Indian wok.',
    price: 17.99,
    category: 'Veg Curry',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Gluten-Friendly'],
    spiceLevel: 2
  },
  {
    id: 'vc-6',
    name: 'Paneer Tikka Masala',
    description: 'Cheese cooked in a clay oven & fried in a rich spicy sauce.',
    price: 17.99,
    category: 'Veg Curry',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Gluten-Friendly'],
    spiceLevel: 2
  },
  {
    id: 'vc-7',
    name: 'Aloo Matar',
    description: 'Potatoes and green peas cooked in a mildly spiced, flavorful curry.',
    price: 15.99,
    category: 'Veg Curry',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Vegan', 'Gluten-Friendly'],
    spiceLevel: 1
  },
  {
    id: 'vc-8',
    name: 'Matar Paneer',
    description: 'Seasoned homemade cheese cooked with green peas.',
    price: 16.99,
    category: 'Veg Curry',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Gluten-Friendly'],
    spiceLevel: 1
  },
  {
    id: 'vc-9',
    name: 'Malai Kofta',
    description: 'Dumplings of fresh vegetables and cheese cooked in creamy sauce.',
    price: 17.99,
    category: 'Veg Curry',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },
  {
    id: 'vc-10',
    name: 'Navratan Korma',
    description: 'Vegetables cooked in yogurt & a creamy sauce with fresh coriander.',
    price: 17.99,
    category: 'Veg Curry',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Gluten-Friendly'],
    spiceLevel: 1
  },
  {
    id: 'vc-11',
    name: 'Aloo Gobi',
    description: 'Cauliflower, and potatoes cooked with freshly ground spices.',
    price: 15.99,
    category: 'Veg Curry',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Vegan', 'Gluten-Friendly'],
    spiceLevel: 1
  },
  {
    id: 'vc-12',
    name: 'Bhindi Masala',
    description: 'Okra cooked with Indian spices, stir fried with onions and garlic.',
    price: 14.99,
    category: 'Veg Curry',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Vegan', 'Gluten-Friendly'],
    spiceLevel: 1
  },

  // ==========================================
  // 4. NON-VEG CURRY
  // ==========================================
  {
    id: 'nvc-1',
    name: 'Chicken Korma',
    description: 'Tender chicken cooked in a creamy sauce with nuts, mild spices, and cream.',
    price: 17.99,
    category: 'Non-Veg Curry',
    image: 'https://images.unsplash.com/photo-1707448829764-9474458021ed?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Gluten-Friendly'],
    spiceLevel: 1
  },
  {
    id: 'nvc-2',
    name: 'Chicken Curry',
    description: 'Chicken simmered in a sauce of spices, ginger and garlic.',
    price: 16.99,
    category: 'Non-Veg Curry',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Gluten-Friendly'],
    spiceLevel: 2
  },
  {
    id: 'nvc-3',
    name: 'Butter Chicken',
    description: 'Boneless chicken cooked in a rich butter cream garnished with coriander .',
    price: 17.99,
    category: 'Non-Veg Curry',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Gluten-Friendly', 'Chef Special'],
    isSignature: true,
    spiceLevel: 1
  },
  {
    id: 'nvc-4',
    name: 'Karahi Chicken (Avec OS)',
    description: 'Chicken cooked with bell peppers, onions, garlic, ginger and indian spices.',
    price: 16.99,
    category: 'Non-Veg Curry',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Gluten-Friendly'],
    spiceLevel: 2
  },
  {
    id: 'nvc-5',
    name: 'Rara Chicken',
    description: 'Minced chicken and whole pieces cooked in a rich and spicy North Indian sauce.',
    price: 18.99,
    category: 'Non-Veg Curry',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Chef Special'],
    spiceLevel: 2
  },
  {
    id: 'nvc-6',
    name: 'Chicken Tikka Masala',
    description: 'Grilled chicken pieces cooked in a creamy, spiced tomato gravy.',
    price: 18.99,
    category: 'Non-Veg Curry',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Gluten-Friendly'],
    spiceLevel: 2
  },
  {
    id: 'nvc-7',
    name: 'Tawa Chicken',
    description: 'Grilled chicken pieces cooked in a creamy, spiced tomato gravy.',
    price: 18.99,
    category: 'Non-Veg Curry',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal'],
    spiceLevel: 2
  },
  {
    id: 'nvc-8',
    name: 'Mango Chicken',
    description: 'Chicken cooked in sweet pickle & indian spices with a tangy taste of mango.',
    price: 16.99,
    category: 'Non-Veg Curry',
    image: 'https://images.unsplash.com/photo-1567529854338-fc097b962123?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal'],
    spiceLevel: 1
  },
  {
    id: 'nvc-9',
    name: 'Chicken Jalfrezi',
    description: 'Boneless chicken onions & green peppers with a spicy and tangy sauce.',
    price: 16.99,
    category: 'Non-Veg Curry',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Gluten-Friendly'],
    spiceLevel: 2
  },
  {
    id: 'nvc-10',
    name: 'Karahi Chicken (Sans OS)',
    description: 'Chicken cooked with bell peppers, onions, garlic, ginger and indian spices.',
    price: 17.99,
    category: 'Non-Veg Curry',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Gluten-Friendly'],
    spiceLevel: 2
  },

  // ==========================================
  // 5. LAMB CURRY (& Seafood, Goat, Egg)
  // ==========================================
  {
    id: 'lc-1',
    name: 'Lamb Curry',
    description: 'Lamb simmered in a sauce of spices, ginger and garlic.',
    price: 18.99,
    category: 'Lamb Curry',
    image: 'https://images.unsplash.com/photo-1652545296893-ff9227b3512e?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Gluten-Friendly'],
    spiceLevel: 2
  },
  {
    id: 'lc-2',
    name: 'Lamb Karahi',
    description: 'Lamb cooked with green chilies, Green peppers, onions, tomatoes, garlic and Indian spices.',
    price: 19.99,
    category: 'Lamb Curry',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Gluten-Friendly'],
    spiceLevel: 3
  },
  {
    id: 'lc-3',
    name: 'Lamb Tikka Masala',
    description: 'Lamb cooked with bell peppers, onions, tomatoes, ginger, garlic, 35% cream and indian spices.',
    price: 18.99,
    category: 'Lamb Curry',
    image: 'https://images.unsplash.com/photo-1652545297020-f5e8ad779eb4?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Gluten-Friendly'],
    spiceLevel: 2
  },
  {
    id: 'lc-4',
    name: 'Lamb Rogan Josh',
    description: 'Lamb cooked with mint, yogurt and Indians spices.',
    price: 18.99,
    category: 'Lamb Curry',
    image: 'https://images.unsplash.com/photo-1708782344490-9026aaa5eec7?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Gluten-Friendly', 'Chef Special'],
    isSignature: true,
    spiceLevel: 2
  },
  {
    id: 'lc-5',
    name: 'Lamb Vindaloo',
    description: 'Lamb simmered in a vinegar-based curry with whole red chives, in a special spicy sauce.',
    price: 18.99,
    category: 'Lamb Curry',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Gluten-Friendly'],
    spiceLevel: 3
  },
  {
    id: 'lc-6',
    name: 'Goat Curry',
    description: 'Goat meat simmered in a sauce of spices, ginger and garlic.',
    price: 20.99,
    category: 'Lamb Curry',
    image: 'https://images.unsplash.com/photo-1728542575492-47e02eb3305c?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Gluten-Friendly', 'Chef Special'],
    spiceLevel: 2
  },
  {
    id: 'lc-7',
    name: 'Fish Curry',
    description: 'Fish simmered in a sauce of spices, ginger and garlic.',
    price: 17.99,
    category: 'Lamb Curry',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80',
    tags: ['Gluten-Friendly'],
    spiceLevel: 2
  },
  {
    id: 'lc-8',
    name: 'Shrimp Curry',
    description: 'Shrimp simmered in a sauce of spices, ginger, and garlic.',
    price: 18.99,
    category: 'Lamb Curry',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80',
    tags: ['Gluten-Friendly'],
    spiceLevel: 2
  },
  {
    id: 'lc-9',
    name: 'Shrimp Karahi',
    description: 'Shrimp cooked with bell peppers, onions, garlic, ginger and Indian spices.',
    price: 19.99,
    category: 'Lamb Curry',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80',
    tags: ['Gluten-Friendly'],
    spiceLevel: 2
  },
  {
    id: 'lc-10',
    name: 'Egg Curry',
    description: 'Boiled eggs simmered in a spiced tomato-based curry with traditional Indian flavors.',
    price: 16.99,
    category: 'Lamb Curry',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
    tags: ['Gluten-Friendly'],
    spiceLevel: 1
  },

  // ==========================================
  // 6. SOUTH INDIAN
  // ==========================================
  {
    id: 'si-1',
    name: 'Onion Garlic Chilli Cheese Masala Dosa',
    description: 'Crispy dosa filled with spicy onion, garlic, chilli, and melted cheese.',
    price: 16.00,
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 2
  },
  {
    id: 'si-2',
    name: 'Chicken Masala Dosa',
    description: 'Crispy dosa stuffed with flavorful spiced chicken filling.',
    price: 15.00,
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal'],
    spiceLevel: 2
  },
  {
    id: 'si-3',
    name: 'Lamb Masala Dosa',
    description: 'Crispy dosa filled with tender, spiced lamb curry.',
    price: 16.00,
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal'],
    spiceLevel: 2
  },
  {
    id: 'si-4',
    name: 'Cheese Masala Dosa',
    description: 'Crispy dosa stuffed with spiced potato and melted cheese.',
    price: 15.00,
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },
  {
    id: 'si-5',
    name: 'Onion Masala Dosa',
    description: 'Crispy dosa filled with spiced potatoes and sautéed onions.',
    price: 13.50,
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Vegan'],
    spiceLevel: 1
  },
  {
    id: 'si-6',
    name: 'Paneer Masala Dosa',
    description: 'Crispy dosa filled with spiced paneer and mashed potatoes.',
    price: 16.00,
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },
  {
    id: 'si-7',
    name: 'Onion Rava Masala Dosa',
    description: 'Crispy rava dosa filled with onions and spiced mashed potatoes.',
    price: 15.50,
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },
  {
    id: 'si-8',
    name: 'Rava Masala Dosa',
    description: 'Crispy rava dosa filled with spiced mashed potatoes.',
    price: 15.00,
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },
  {
    id: 'si-9',
    name: 'Uttapam',
    description: 'Soft savory pancake topped with fresh vegetables and spices.',
    price: 12.00,
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Vegan', 'Gluten-Friendly'],
    spiceLevel: 1
  },
  {
    id: 'si-10',
    name: 'Onion Uttapam',
    description: 'Soft uttapam topped with fresh onions and spices.',
    price: 13.00,
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Vegan'],
    spiceLevel: 1
  },
  {
    id: 'si-11',
    name: 'Masala Uttapam',
    description: 'Soft uttapam topped with spiced vegetables and flavorful seasonings.',
    price: 17.99,
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },
  {
    id: 'si-12',
    name: 'Onion Tomato Chilli Uttapam (OTC)',
    description: 'Soft uttapam topped with onions, tomatoes, and spicy chillies.',
    price: 14.00,
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 2
  },
  {
    id: 'si-13',
    name: 'Idli (4 Pcs)',
    description: 'Four soft, steamed rice cakes made from fermented batter.',
    price: 12.00,
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Vegan', 'Gluten-Friendly'],
    spiceLevel: 0
  },
  {
    id: 'si-14',
    name: '2+2 Madrass Combo (2 Pcs Idli + 2 Pcs Vada)',
    description: 'Authentic South Indian combo with 2 steamed idlis and 2 crispy medu vadas, served with sambar & chutney.',
    price: 14.00,
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Chef Special'],
    spiceLevel: 1
  },
  {
    id: 'si-15',
    name: '3+1 Combo (3 Pcs Idli + 1 Pcs Vada)',
    description: 'South Indian combo featuring 3 soft idlis and 1 crispy medu vada with sambar and coconut chutney.',
    price: 13.00,
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },

  // ==========================================
  // 7. THALIS
  // ==========================================
  {
    id: 'th-1',
    name: 'Mixed Veg Thali',
    description: 'Complete Indian platter with assorted vegetable curries, dal, rice, naan, and accompaniments.',
    price: 14.99,
    category: 'Thalis',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },
  {
    id: 'th-2',
    name: 'Shahi Paneer Thali',
    description: 'Royal platter featuring Shahi Paneer, yellow dal, basmati rice, warm naan, and salad.',
    price: 16.99,
    category: 'Thalis',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Chef Special'],
    spiceLevel: 1
  },
  {
    id: 'th-3',
    name: 'Lamb Curry Thali',
    description: 'Hearty traditional platter with tender Lamb Curry, vegetable accompaniment, basmati rice, and naan.',
    price: 16.99,
    category: 'Thalis',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal'],
    spiceLevel: 2
  },
  {
    id: 'th-4',
    name: 'Butter Chicken Thali',
    description: 'Popular favorite featuring signature Butter Chicken, aromatic basmati rice, dal, fresh tandoori naan, and crisp salad.',
    price: 15.99,
    category: 'Thalis',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Chef Special'],
    isSignature: true,
    spiceLevel: 1
  },

  // ==========================================
  // 8. BIRYANI ET RIZ
  // ==========================================
  {
    id: 'br-1',
    name: 'Veg Biryani',
    description: 'Aromatic basmati rice cooked with fresh vegetables and Indian spices.',
    price: 14.99,
    category: 'Biryani et Riz',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Gluten-Friendly'],
    spiceLevel: 1
  },
  {
    id: 'br-2',
    name: 'Hyderabadi Biryani',
    description: 'Fragrant basmati rice cooked Hyderabadi-style with rich spices and fresh herbs.',
    price: 15.99,
    category: 'Biryani et Riz',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Chef Special'],
    isSignature: true,
    spiceLevel: 2
  },
  {
    id: 'br-3',
    name: 'Chicken 65 Biryani',
    description: 'Basmati rice served with spicy, crispy Chicken 65.',
    price: 16.99,
    category: 'Biryani et Riz',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal'],
    spiceLevel: 2
  },
  {
    id: 'br-4',
    name: 'Lamb Biryani',
    description: 'Basmati rice cooked with tender lamb and rich spices.',
    price: 17.99,
    category: 'Biryani et Riz',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Chef Special'],
    spiceLevel: 2
  },
  {
    id: 'br-5',
    name: 'Veg 65 Biryani',
    description: 'Basmati rice served with crispy 65-style vegetables and spices.',
    price: 15.99,
    category: 'Biryani et Riz',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 2
  },
  {
    id: 'br-6',
    name: 'Shrimp Biryani',
    description: 'Basmati rice cooked with flavorful shrimp and spices.',
    price: 17.99,
    category: 'Biryani et Riz',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    tags: ['Gluten-Friendly'],
    spiceLevel: 2
  },
  {
    id: 'br-7',
    name: 'Chicken Drum Biryani',
    description: 'Basmati rice slow-cooked with tender chicken and aromatic spices.',
    price: 15.99,
    category: 'Biryani et Riz',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal'],
    spiceLevel: 2
  },

  // ==========================================
  // 9. BREAD AND RICE
  // ==========================================
  {
    id: 'bdr-1',
    name: 'Tawa Roti',
    description: 'Traditional Indian flatbread cooked on an iron griddle (tawa).',
    price: 2.49,
    category: 'Bread and Rice',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Vegan'],
    spiceLevel: 0
  },
  {
    id: 'bdr-2',
    name: 'Tandoori Roti',
    description: 'Whole wheat unleavened bread baked in our traditional clay tandoor.',
    price: 2.99,
    category: 'Bread and Rice',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Vegan'],
    spiceLevel: 0
  },
  {
    id: 'bdr-3',
    name: 'Plain Naan',
    description: 'Soft, fluffy leavened bread freshly baked in the tandoor oven.',
    price: 2.99,
    category: 'Bread and Rice',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 0
  },
  {
    id: 'bdr-4',
    name: 'Butter Naan',
    description: 'Classic tandoor naan generously brushed with melted rich butter.',
    price: 3.99,
    category: 'Bread and Rice',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 0
  },
  {
    id: 'bdr-5',
    name: 'Garlic Naan',
    description: 'Tandoor naan infused with fresh minced garlic and chopped cilantro.',
    price: 4.99,
    category: 'Bread and Rice',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Chef Special'],
    spiceLevel: 0
  },
  {
    id: 'bdr-6',
    name: 'Keema Naan',
    description: 'Leavened naan bread stuffed with spiced minced meat.',
    price: 7.99,
    category: 'Bread and Rice',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal'],
    spiceLevel: 1
  },
  {
    id: 'bdr-7',
    name: 'Onion Naan',
    description: 'Naan bread stuffed with finely chopped seasoned onions and herbs.',
    price: 5.99,
    category: 'Bread and Rice',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 0
  },
  {
    id: 'bdr-8',
    name: 'Aloo Naan',
    description: 'Fluffy naan stuffed with spiced mashed potato and fresh herbs.',
    price: 5.99,
    category: 'Bread and Rice',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 0
  },
  {
    id: 'bdr-9',
    name: 'Paneer Naan',
    description: 'Warm naan stuffed with crumbled spiced cottage cheese and herbs.',
    price: 6.99,
    category: 'Bread and Rice',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 0
  },
  {
    id: 'bdr-10',
    name: 'Missi Roti',
    description: 'Savory spiced flatbread made with chickpea and wheat flour blend.',
    price: 4.99,
    category: 'Bread and Rice',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },
  {
    id: 'bdr-11',
    name: 'Lachha Parantha',
    description: 'Multi-layered crispy flaky whole wheat bread baked in the clay oven.',
    price: 4.99,
    category: 'Bread and Rice',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 0
  },
  {
    id: 'bdr-12',
    name: 'Plain Rice',
    description: 'Steamed long-grain aromatic basmati rice.',
    price: 4.99,
    category: 'Bread and Rice',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Vegan', 'Gluten-Friendly'],
    spiceLevel: 0
  },
  {
    id: 'bdr-13',
    name: 'Pulao Rice',
    description: 'Fragrant basmati rice gently tempered with cumin, peas, and mild spices.',
    price: 6.99,
    category: 'Bread and Rice',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Gluten-Friendly'],
    spiceLevel: 0
  },

  // ==========================================
  // 10. DESI CHINESE VEG
  // ==========================================
  {
    id: 'dcv-1',
    name: 'Cheese Chilly',
    description: 'Fried cheese cubes tossed with peppers, onions, and spicy Indo-Chinese sauce.',
    price: 15.99,
    category: 'Desi Chinese Veg',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 2
  },
  {
    id: 'dcv-2',
    name: 'Vegetable Manchurian',
    description: 'Vegetable dumplings that are deep-fried and then cooked in a savory and tangy Manchurian sauce.',
    price: 14.99,
    category: 'Desi Chinese Veg',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },
  {
    id: 'dcv-3',
    name: 'Honey Chilli Potato',
    description: 'Crispy potatoes glazed in a sweet and spicy honey-chilli sauce.',
    price: 13.99,
    category: 'Desi Chinese Veg',
    image: 'https://images.unsplash.com/photo-1775039983749-aa6003c8ecf9?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },
  {
    id: 'dcv-4',
    name: 'Honey Chilli Gobi',
    description: 'Fried cauliflower coated in sweet and spicy Indo-Chinese honey chilli sauce.',
    price: 14.99,
    category: 'Desi Chinese Veg',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },
  {
    id: 'dcv-5',
    name: 'Paneer Noodles',
    description: 'Stir -fried noodles with paneer cubes, crunchy veggies, and Indo-Chinese spices.',
    price: 15.99,
    category: 'Desi Chinese Veg',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },
  {
    id: 'dcv-6',
    name: 'Veg Maggie',
    description: 'Classic Maggi noodles tossed with vegetables and Indian spices.',
    price: 9.99,
    category: 'Desi Chinese Veg',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },
  {
    id: 'dcv-7',
    name: 'Veg Fried Rice',
    description: 'Stir -fried rice with fresh vegetables and aromatic spices.',
    price: 15.99,
    category: 'Desi Chinese Veg',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },
  {
    id: 'dcv-8',
    name: 'Vegetarian Noodles',
    description: 'Stir -fried noodles with vegetables and Indo-Chinese spices.',
    price: 13.99,
    category: 'Desi Chinese Veg',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },

  // ==========================================
  // 11. DESI CHINESE NON-VEG
  // ==========================================
  {
    id: 'dcnv-1',
    name: 'Chilly Chicken',
    description: 'Fried chicken tossed in a spicy, tangy Indo-Chinese chilli sauce.',
    price: 16.99,
    category: 'Desi Chinese Non-Veg',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Chef Special'],
    spiceLevel: 2
  },
  {
    id: 'dcnv-2',
    name: 'Chicken Manchurian',
    description: 'Chicken cubes cooked in a flavorful Manchurian sauce with garlic and soy.',
    price: 16.99,
    category: 'Desi Chinese Non-Veg',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal'],
    spiceLevel: 2
  },
  {
    id: 'dcnv-3',
    name: 'Chicken Noodle',
    description: 'Stir -fried noodles with tender chicken and vegetables in Indo-Chinese flavors.',
    price: 15.99,
    category: 'Desi Chinese Non-Veg',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal'],
    spiceLevel: 1
  },
  {
    id: 'dcnv-4',
    name: 'Chicken Fried Rice',
    description: 'Stir -fried rice with chicken, veggies, and soy-based seasoning.',
    price: 15.99,
    category: 'Desi Chinese Non-Veg',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal'],
    spiceLevel: 1
  },
  {
    id: 'dcnv-5',
    name: 'Egg Fried Rice',
    description: 'Fragrant rice stir -fried with scrambled eggs and spices.',
    price: 13.99,
    category: 'Desi Chinese Non-Veg',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
    tags: [],
    spiceLevel: 1
  },
  {
    id: 'dcnv-6',
    name: 'Chicken Maggie',
    description: 'Spicy Maggi noodles tossed with tender chicken pieces.',
    price: 13.99,
    category: 'Desi Chinese Non-Veg',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal'],
    spiceLevel: 2
  },

  // ==========================================
  // 12. WRAPS AND BURGERS
  // ==========================================
  {
    id: 'wb-1',
    name: 'Paneer Wrap',
    description: 'Delicious wrap filled with spiced paneer, fresh vegetables, and house-made sauces.',
    price: 12.99,
    category: 'Wraps and Burgers',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },
  {
    id: 'wb-2',
    name: 'Chicken Tikka Wrap',
    description: 'Delicious wrap filled with grilled chicken tikka, fresh veggies, and house-made sauces.',
    price: 13.99,
    category: 'Wraps and Burgers',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal', 'Chef Special'],
    spiceLevel: 1
  },
  {
    id: 'wb-3',
    name: 'Chicken Kabab Wrap',
    description: 'Tasty wrap filled with spiced chicken kebab, fresh veggies, and house-made sauces.',
    price: 13.99,
    category: 'Wraps and Burgers',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal'],
    spiceLevel: 1
  },
  {
    id: 'wb-4',
    name: 'Lamb Kabab Wrap',
    description: 'Delicious wrap filled with spiced lamb kebab, fresh veggies, and house-made sauces.',
    price: 14.99,
    category: 'Wraps and Burgers',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
    tags: ['Halal'],
    spiceLevel: 1
  },
  {
    id: 'wb-5',
    name: 'Noodles Burger',
    description: 'Burger filled with spicy noodles, crunchy veggies, and flavorful sauces.',
    price: 9.99,
    category: 'Wraps and Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian'],
    spiceLevel: 1
  },
  {
    id: 'wb-6',
    name: 'Vedha Burger Combo',
    description: 'Signature burger served with crispy fries and a drink of your choice.',
    price: 13.99,
    category: 'Wraps and Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    tags: ['Chef Special'],
    spiceLevel: 1
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Geneviève Laurent',
    role: 'Food & Wine Critic, Montréal',
    location: 'Westmount, QC',
    rating: 5,
    quote: 'Vedha transcends ordinary dining. The Butter Chicken is velvety perfection, while the clay tandoor preparations offer depth and smokiness rarely experienced outside of Delhi.',
    date: 'February 2026'
  },
  {
    id: 'test-2',
    author: 'Rajiv Sengupta',
    role: 'Gastronomy Enthusiast',
    location: 'Downtown Montréal',
    rating: 5,
    quote: 'As someone raised in Old Delhi, finding authentic Dal Makhni cooked with true patience is sacred. Vedha nails every single detail, from the aroma of charcoal to the hospitality.',
    date: 'January 2026'
  },
  {
    id: 'test-3',
    author: 'Sophie & Marc Tremblay',
    location: 'Mile End, QC',
    rating: 5,
    quote: 'We celebrated our 10th anniversary here. The private dining ambience, the Hyderabadi Biryani, and the warm attentive staff made it our absolute favorite evening of the year.',
    date: 'February 2026'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Royal Tandoor Craft',
    category: 'Tandoor',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1000&q=80',
    caption: 'Clay tandoor roasting at 700°F with natural mesquite wood.'
  },
  {
    id: 'gal-2',
    title: 'Velvety Butter Chicken',
    category: 'Curries',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=80',
    caption: 'Simmered slow in hand-churned butter and sun-ripened tomatoes.'
  },
  {
    id: 'gal-3',
    title: 'Hyderabadi Dum Biryani',
    category: 'Biryani',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80',
    caption: 'Basmati rice cooked in sealed handi under gentle steam.'
  },
  {
    id: 'gal-4',
    title: 'Golden Tandoori Naan',
    category: 'Tandoor',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80',
    caption: 'Fresh leavened dough slapped onto the searing clay walls.'
  },
  {
    id: 'gal-5',
    title: 'Fine Dining Sanctuary',
    category: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    caption: 'Intimate golden atmospheric lighting crafted for unforgettable gatherings.'
  },
  {
    id: 'gal-6',
    title: 'Artisanal Spices & Aromas',
    category: 'Curries',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80',
    caption: 'Whole cardamom, Kashmiri chilies, cinnamon, and wild mace freshly ground daily.'
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
    likes: 342
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80',
    likes: 489
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    likes: 512
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80',
    likes: 278
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80',
    likes: 610
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80',
    likes: 724
  }
];

