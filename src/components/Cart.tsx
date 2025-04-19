
import { useCartStore } from '../store/cartStore';
import { Button } from './ui/button';
import { ShoppingCart, Trash2 } from 'lucide-react';

const Cart = () => {
  const { items, removeItem, clearCart } = useCartStore();

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Cart
        </h2>
        {items.length > 0 && (
          <Button
            variant="destructive"
            size="sm"
            onClick={() => clearCart()}
            className="flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Clear
          </Button>
        )}
      </div>
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div>
                  <h3 className="font-medium">{item.product.name}</h3>
                  <p className="text-sm text-gray-600">
                    {item.quantity} {item.product.unit} × ${item.product.price}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeItem(item.product.id)}
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-bold text-green-600">
                ${total.toFixed(2)}
              </span>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
