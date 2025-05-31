import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";

interface ProductsPageProps {
  onAddToCart: (product: {id: string, price: number, name: string}) => void;
}

export default function ProductsPage({ onAddToCart }: ProductsPageProps) {
  const products = useQuery(api.products.list) || [];

  const handleAddToCart = (product: any) => {
    onAddToCart({
      id: product._id,
      price: product.price,
      name: product.name
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600">Premium protein ice cream in four delicious flavors</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product._id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-w-16 aspect-h-12">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                {/* Nutritional Info */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Nutritional Facts (per serving)</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span>Protein:</span>
                      <span className="font-medium text-blue-600">{product.protein}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Calories:</span>
                      <span className="font-medium">{product.calories}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </div>
                  
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                      product.inStock
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </button>
                </div>
                
                {product.inStock && (
                  <p className="text-green-600 text-sm mt-2 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    In Stock
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Meli's Protein Ice Cream?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Muscle Building</h3>
                <p className="text-gray-600 text-sm">High-quality protein to support muscle growth and recovery</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Weight Management</h3>
                <p className="text-gray-600 text-sm">Low calorie, high satiety to help you reach your goals</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-10 5a7 7 0 1114 0H3z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Great Taste</h3>
                <p className="text-gray-600 text-sm">Indulgent flavors that satisfy your cravings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
