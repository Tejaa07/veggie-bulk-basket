
export interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  minOrder: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Carrots",
    price: 2.99,
    unit: "kg",
    minOrder: 5,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    description: "Fresh, organic carrots perfect for bulk purchases."
  },
  {
    id: 2,
    name: "Red Apples",
    price: 3.99,
    unit: "kg",
    minOrder: 10,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    description: "Sweet and crispy red apples from local orchards."
  },
  {
    id: 3,
    name: "Fresh Tomatoes",
    price: 4.99,
    unit: "kg",
    minOrder: 5,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    description: "Ripe, juicy tomatoes perfect for restaurants and catering."
  }
];
