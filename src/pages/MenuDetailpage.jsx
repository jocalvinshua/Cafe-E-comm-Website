import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, getProductsByCategory } from '../data/CafeData.jsx';
import { useCart } from '../context/CartContext.jsx';
import { ShoppingBag, Minus, Plus, ArrowLeft } from 'lucide-react';
import ProductCard from '../container/ProductCard.jsx';
import { useState } from 'react';

export default function ProductDetailPage(){
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = productId ? getProductById(productId) : undefined;
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  
  if (!product) {
    return (
      <div className="pt-20 min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-medium text-primary-800 mb-4">Product Not Found</h2>
          <p className="text-neutral-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={() => navigate('/products')}
            className="btn-primary py-2 px-6"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }
  
  const similarProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 3);
  
  const handleQuantityChange = (value) => {
    setQuantity(Math.max(1, value));
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
    // Show toast or feedback
  };

  return (
    <div className="pt-20 min-h-screen bg-neutral-50">
      <div className="container-custom py-12">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary-700 hover:text-primary-800 mb-8 transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <span className="text-sm font-medium text-accent-600 uppercase tracking-wider">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </span>
              <h1 className="font-heading text-3xl md:text-4xl text-primary-800 mt-2">{product.name}</h1>
              <p className="text-2xl font-medium text-primary-700 mt-3">${product.price.toFixed(2)}</p>
            </div>
            
            <p className="text-neutral-600">{product.description}</p>
            
            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-neutral-700 mb-3">Size</h3>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? 'bg-primary-600 text-white'
                          : 'bg-white border border-neutral-300 text-neutral-700 hover:border-primary-600'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium text-neutral-700 mb-3">Quantity</h3>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="p-2 rounded-md bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-16 text-center">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="p-2 rounded-md bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-md flex items-center justify-center gap-2 transition-colors"
            >
              <ShoppingBag size={18} />
              Add to Cart
            </button>
          </div>
        </div>
        
        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="font-heading text-2xl text-primary-800 mb-8">You might also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
