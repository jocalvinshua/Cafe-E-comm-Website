import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext.jsx";
import { ShoppingBag} from 'lucide-react';
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product.options) {
      const defaults = {};
      product.options.forEach(option => {
        defaults[option.name] = option.choices[0];
      });
      setSelectedOptions(defaults);
    }
  }, [product.options]);

  const handleAddToCart = (e) => {
    e.preventDefault(); // 🔑 supaya tidak trigger Link
    addToCart({
      product,
      quantity,
      options: selectedOptions
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
    setQuantity(1);
  };

  return (
    <Link 
      to={`/products/${product.id}`}
      className="group"
    >
      <div className="card h-full flex flex-col overflow-hidden">
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.featured && (
            <span className="absolute top-2 left-2 bg-green-600 text-white text-xs uppercase tracking-wider py-1 px-2 rounded">
              Featured
            </span>
          )}
        </div>
        
        <div className="flex-grow p-5 flex flex-col">
          <div className="mb-2">
            <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
              {product.category}
            </span>
            <h3 className="text-lg font-medium text-primary-800 mt-1 group-hover:text-primary-700 transition-colors">
              {product.name}
            </h3>
          </div>
          
          <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{product.description}</p>
          
          <div className="mt-auto flex items-center justify-between">
            <span className="font-medium text-primary-700">
              ${product.price.toFixed(2)}
            </span>
            
            <button
              onClick={handleAddToCart}
              className="p-2 rounded-full bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag size={18} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
