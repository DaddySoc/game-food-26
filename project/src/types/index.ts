// Define common types used throughout the application

export interface Product {
  id: string;
  name: string;
  nameFr: string;
  description: string;
  descriptionFr: string;
  price: number;
  image: string;
  category: 'sandwich' | 'dessert' | 'drink';
}

export interface CartItem {
  product: Product;
  quantity: number;
  recipientName: string;
  recipientPhone: string;
}

export interface OrderStatus {
  id: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
  items: CartItem[];
  total: number;
  customerEmail: string;
}

export type Language = 'en' | 'fr';