
import { useEffect, useState } from "react";
import ProductCard, { Product } from "./ProductCard";

// Sample product data with love-themed jewelry
const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Silver Heart Pendant Necklace",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80",
    category: "necklaces",
    isFeatured: true
  },
  {
    id: 2,
    name: "Red Ruby Heart Earrings",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80",
    category: "earrings",
    isFeatured: true
  },
  {
    id: 3,
    name: "Silver Infinity Love Bracelet",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=500&q=80",
    category: "bracelets",
    isFeatured: true
  },
  {
    id: 4,
    name: "Ruby Encrusted Promise Ring",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=500&q=80",
    category: "rings",
    isFeatured: true
  },
];

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // In a real app, you'd fetch from an API
    setProducts(sampleProducts);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-love-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 fade-in text-love-800">Featured Products</h2>
          <p className="text-gray-700 max-w-2xl mx-auto fade-in">
            Discover our handpicked selection of elegant pieces,
            perfect for expressing your love and adding a touch of romance to any occasion.
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

export default FeaturedProducts;
