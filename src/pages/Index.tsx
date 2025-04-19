
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import { products } from '../data/products';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Veggie Bulk Basket</h1>
          <p className="text-gray-600 mt-2">Fresh produce in bulk quantities</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Cart />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
