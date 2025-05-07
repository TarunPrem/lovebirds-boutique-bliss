
import { useEffect, useState } from "react";
import ProductCard, { Product } from "./ProductCard";

const sampleNewProducts: Product[] = [
  {
    id: 5,
    name: "Ruby Teardrop Love Necklace",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608508644127-ba99fd37f85c?auto=format&fit=crop&w=500&q=80",
    category: "necklaces",
    isNew: true
  },
  {
    id: 6,
    name: "Silver Heart Dangle Earrings",
    price: 55.00,
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=500&q=80",
    category: "earrings",
    isNew: true
  },
  {
    id: 7,
    name: "Love Letter Pendant Set",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1575863438850-fb1c63f29dd4?auto=format&fit=crop&w=500&q=80",
    category: "gift sets",
    isNew: true
  },
  {
    id: 8,
    name: "Red Crystal Love Bracelet",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=500&q=80",
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
    <section className="py-16 bg-gradient-to-b from-love-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 fade-in text-love-800">New Arrivals</h2>
          <p className="text-gray-700 max-w-2xl mx-auto fade-in">
            Be the first to discover our latest love-inspired collections, freshly added to our boutique.
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
