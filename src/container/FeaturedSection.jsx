import { getFeaturedProducts } from '../data/CafeData';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16 bg-[#F9F5EB]" id="featured">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4037] mb-4">
            Our Signature Items
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most beloved offerings, crafted with care and the finest ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/products" 
            className="inline-block px-8 py-3 bg-[#5D4037] text-white rounded-full font-medium hover:bg-[#8B5A2B] transition-colors duration-300"
          >
            View Full Menu
          </Link>

        </div>
      </div>
    </section>
  );
}
