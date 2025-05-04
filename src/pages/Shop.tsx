
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard, { Product } from "@/components/ProductCard";

// Combine sample products
const allProducts: Product[] = [
  {
    id: 1,
    name: "Pearl Pendant Necklace",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=500&q=80",
    category: "necklaces",
    isFeatured: true
  },
  {
    id: 2,
    name: "Rose Gold Heart Earrings",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=500&q=80",
    category: "earrings",
    isFeatured: true
  },
  {
    id: 3,
    name: "Crystal Love Bracelet",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=500&q=80",
    category: "bracelets",
    isFeatured: true
  },
  {
    id: 4,
    name: "Silver Infinity Ring",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=500&q=80",
    category: "rings",
    isFeatured: true
  },
  {
    id: 5,
    name: "Opal Teardrop Necklace",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=500&q=80",
    category: "necklaces",
    isNew: true
  },
  {
    id: 6,
    name: "Gold Butterfly Earrings",
    price: 55.00,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=500&q=80",
    category: "earrings",
    isNew: true
  },
  {
    id: 7,
    name: "Sparkling Gemstone Set",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=500&q=80",
    category: "gift-sets",
    isNew: true
  },
  {
    id: 8,
    name: "Minimalist Moon Bracelet",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=500&q=80",
    category: "bracelets",
    isNew: true
  }
];

const categories = ["All", "Necklaces", "Earrings", "Bracelets", "Rings", "Gift Sets"];

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    // In a real app, you'd fetch from an API
    setProducts(allProducts);
    setFilteredProducts(allProducts);
  }, []);

  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (activeCategory !== "All") {
      const categoryLower = activeCategory.toLowerCase().replace(" ", "-");
      result = result.filter(product => 
        product.category === categoryLower || 
        product.category === categoryLower.slice(0, -1) // Handle plural forms
      );
    }
    
    // Apply sorting
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "newest") {
      result = result.filter(product => product.isNew).concat(
        result.filter(product => !product.isNew)
      );
    } else {
      // Default: featured first
      result = result.filter(product => product.isFeatured).concat(
        result.filter(product => !product.isFeatured)
      );
    }
    
    setFilteredProducts(result);
  }, [activeCategory, sortBy, products]);

  return (
    <>
      <Navbar />
      <main>
        {/* Shop Header */}
        <section className="bg-love-50 py-10">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-serif text-center">Shop Collection</h1>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="py-8">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between mb-8">
              {/* Category Filter */}
              <div className="flex overflow-x-auto pb-3 md:pb-0 space-x-4 mb-4 md:mb-0">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`whitespace-nowrap px-4 py-2 rounded-md ${
                      activeCategory === category
                        ? "bg-love-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort Options */}
              <div className="flex items-center">
                <label htmlFor="sort" className="text-gray-700 mr-2">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border rounded-md p-2"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-700">No products found</h3>
                <p className="text-gray-500 mt-2">Try changing your filters</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Shop;
