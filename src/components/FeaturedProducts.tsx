
import { useEffect, useState } from "react";
import ProductCard, { Product } from "./ProductCard";

// Sample product data
const sampleProducts: Product[] = [
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
];

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // In a real app, you'd fetch from an API
    setProducts(sampleProducts);
  }, []);

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 fade-in">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto fade-in">
            Discover our handpicked selection of elegant pieces,
            perfect for adding a touch of romance to any occasion.
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
