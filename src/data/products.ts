export type Product = {
  id: number
  name: string
  category: string
  image: string
  price: number
  oldPrice?: number
  rating: number
  badge: string
  availability: string
  inStock: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Technical Shell Jacket',
    category: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800',
    price: 890,
    oldPrice: 1450,
    rating: 4.9,
    badge: 'Discount',
    availability: 'In Stock • Ships in 2 days',
    inStock: true,
  },
  {
    id: 2,
    name: 'Speedster Running Shoes',
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    price: 1200,
    rating: 4.8,
    badge: 'Limited',
    availability: 'Only 4 items left',
    inStock: true,
  },
  {
    id: 3,
    name: 'Minimalist Quartz Watch',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    price: 1850,
    rating: 4.7,
    badge: 'Sold Out',
    availability: 'Back in stock next week',
    inStock: false,
  },
  {
    id: 4,
    name: 'Classic Canvas Sneakers',
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800',
    price: 550,
    rating: 4.5,
    badge: 'Popular',
    availability: 'In Stock • ships in 1 day',
    inStock: true,
  },
  {
    id: 5,
    name: 'Premium Wireless Headphones',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    price: 1690,
    oldPrice: 2200,
    rating: 4.9,
    badge: 'Hot Deal',
    availability: 'In Stock • Ships in 2 days',
    inStock: true,
  },
  {
    id: 6,
    name: 'Tech Daypack',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    price: 1100,
    rating: 4.6,
    badge: 'New Arrival',
    availability: 'In Stock • Ships in 1 day',
    inStock: true,
  },
]
