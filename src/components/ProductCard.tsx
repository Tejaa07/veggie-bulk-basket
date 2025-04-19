
import { Product } from '../data/products';
import { Button } from './ui/button';
import { useState } from 'react';
import { useCartStore } from '../store/cartStore';
import { useToast } from './ui/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(product.minOrder);
  const addItem = useCartStore((state) => state.addItem);
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity}${product.unit} of ${product.name} added to cart`
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <p className="text-green-600 font-bold">
          ${product.price}/{product.unit}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <input
            type="number"
            min={product.minOrder}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-20 px-2 py-1 border rounded"
          />
          <span className="text-sm text-gray-500">{product.unit}</span>
          <Button 
            onClick={handleAddToCart}
            className="ml-auto bg-green-600 hover:bg-green-700"
          >
            Add to Cart
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Minimum order: {product.minOrder} {product.unit}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
