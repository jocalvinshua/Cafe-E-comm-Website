import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag, Coffee } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';  

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems = [] } = useCart();
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-primary-700 font-heading text-2xl font-bold"
          onClick={() => setIsOpen(false)}
        >
          <Coffee size={28} />
          <span>Café Aroma</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            {[
              { name: 'Home', path: '/' },
              { name: 'Products', path: '/products' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors duration-200 relative ${
                    isActive 
                      ? 'text-primary-700' 
                      : isScrolled 
                        ? 'text-neutral-800 hover:text-primary-600' 
                        : 'text-white hover:text-secondary-200'
                  } after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary-600 after:transition-all hover:after:w-full`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          
          <Link 
            to="/cart" 
            className={`relative p-2 rounded-full transition-colors ${
              isScrolled ? 'text-primary-700 hover:bg-primary-50' : 'text-white hover:bg-white/10'
            }`}
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
        
        <div className="md:hidden flex items-center">
          <Link 
            to="/cart" 
            className={`relative p-2 mr-2 rounded-full transition-colors ${
              isScrolled ? 'text-primary-700 hover:bg-primary-50' : 'text-white hover:bg-white/10'
            }`}
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-md transition-colors ${
              isScrolled ? 'text-primary-700 hover:bg-primary-50' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-primary-950/95 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full text-white">
          <nav className="flex flex-col items-center space-y-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'Products', path: '/products' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `text-xl font-medium transition-colors duration-200 ${
                    isActive ? 'text-accent-400' : 'text-white hover:text-secondary-200'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};