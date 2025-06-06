import { useState } from "react";
import { products } from "../data/CafeData.jsx";
import ProductCard from "../container/ProductCard.jsx";
import { ShoppingBag, Coffee, Cake } from "lucide-react";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Products", icon: <ShoppingBag size={20} /> },
    { id: "coffee", name: "Coffee", icon: <Coffee size={20} /> },
    { id: "food", name: "Food", icon: <Cake size={20} /> },
    { id: "merchandise", name: "Merchandise", icon: <ShoppingBag size={20} /> },
  ];

  const getFilteredProducts = () => {
    return products.filter((product) => {
      const categoryMatch =
        activeCategory === "all" || product.category === activeCategory;

      const searchMatch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      return categoryMatch && searchMatch;
    });
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="pt-20 min-h-screen bg-neutral-50">
      <div className="container-custom py-12">
        {/* Heading */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl text-primary-800 mb-4">
            Our Products
          </h1>
          <p className="text-neutral-600">
            Explore our selection of handcrafted coffees, freshly baked pastries,
            and premium coffee accessories.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-10 space-y-6">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 pl-4 pr-10 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Search products"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary-600 text-white"
                    : "bg-white text-neutral-700 hover:bg-neutral-100"
                }`}
                aria-label={`Filter by ${category.name}`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-neutral-600">
              No products found matching your criteria.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
