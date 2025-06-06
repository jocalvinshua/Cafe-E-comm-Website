import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartPage(){
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const shippingCost = 4.99;
  const subtotal = getCartTotal();
  const total = subtotal + (subtotal > 0 ? shippingCost : 0);

  if (cartItems.length === 0) {
    return (
      <div className="pt-20 min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-100 rounded-full mb-6">
            <ShoppingBag size={24} className="text-neutral-500" />
          </div>
          <h2 className="text-2xl font-medium text-primary-800 mb-4">Your cart is empty</h2>
          <p className="text-neutral-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Link 
            to="/products"
            className="btn-primary py-3 px-6"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-neutral-50">
      <div className="container-custom py-12">
        <h1 className="font-heading text-3xl md:text-4xl text-primary-800 mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="divide-y divide-neutral-200">
                {cartItems.map((item) => (
                  <div key={`${item.product.id}-${item.selectedSize}`} className="p-6 flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-24 h-24 bg-neutral-100 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex justify-between mb-1">
                        <Link 
                          to={`/products/${item.product.id}`}
                          className="font-medium text-primary-800 hover:text-primary-600 transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-neutral-400 hover:text-error-600 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      
                      {item.selectedSize && (
                        <p className="text-sm text-neutral-500 mb-2">Size: {item.selectedSize}</p>
                      )}
                      
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border border-neutral-300 rounded-md">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-3 py-1 text-neutral-600 hover:bg-neutral-100 transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="px-3 py-1 text-neutral-800">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-3 py-1 text-neutral-600 hover:bg-neutral-100 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        
                        <p className="font-medium text-primary-800">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-medium text-primary-800 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Shipping</span>
                  <span className="font-medium">${subtotal > 0 ? shippingCost.toFixed(2) : '0.00'}</span>
                </div>
                <div className="border-t border-neutral-200 pt-4 flex justify-between">
                  <span className="font-medium text-primary-800">Total</span>
                  <span className="font-bold text-primary-800">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <button
                className="w-full py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-md flex items-center justify-center gap-2 transition-colors"
                // This would typically go to a checkout page in a real app
              >
                Proceed to Checkout
                <ArrowRight size={18} />
              </button>
              
              <div className="mt-6">
                <Link 
                  to="/products"
                  className="text-primary-700 hover:text-primary-800 flex items-center justify-center gap-1 transition-colors"
                >
                  <ShoppingBag size={16} />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}