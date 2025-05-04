
import { useEffect, useState } from "react";
import ProductCard, { Product } from "./ProductCard";

const sampleNewProducts: Product[] = [
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
    category: "gift sets",
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

const NewArrivals = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // In a real app, you'd fetch from an API
    setProducts(sampleNewProducts);
  }, []);

  return (
    <section className="py-16 bg-love-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 fade-in">New Arrivals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto fade-in">
            Be the first to discover our latest collections, freshly added to our boutique.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
