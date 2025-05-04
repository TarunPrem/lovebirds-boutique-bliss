
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard, { Product } from "@/components/ProductCard";
import Newsletter from "@/components/Newsletter";

const newArrivalsData: Product[] = [
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
  },
  {
    id: 9,
    name: "Crystal Drop Earrings",
    price: 68.00,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=500&q=80",
    category: "earrings",
    isNew: true
  },
  {
    id: 10,
    name: "Amethyst Pendant",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=500&q=80",
    category: "necklaces",
    isNew: true
  },
  {
    id: 11,
    name: "Silver Chain Anklet",
    price: 42.00,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=500&q=80",
    category: "anklets",
    isNew: true
  },
  {
    id: 12,
    name: "Pearl Hair Pin Set",
    price: 38.00,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=500&q=80",
    category: "hair-accessories",
    isNew: true
  }
];

const NewArrivalsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // In a real app, you'd fetch from an API
    setProducts(newArrivalsData);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-love-50 py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif mb-6 fade-in">New Arrivals</h1>
              <p className="text-lg text-gray-700 fade-in">
                Discover our latest collection of elegant jewelry and accessories
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16 bg-love-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif mb-4 fade-in">Coming Soon</h2>
              <p className="text-gray-700 mb-8 fade-in">
                We're always working on exciting new pieces. Subscribe to our newsletter to be the first to know when they arrive.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="bg-gray-100 h-48 rounded flex items-center justify-center mb-4">
                    <p className="text-gray-500">Coming Soon</p>
                  </div>
                  <h3 className="font-medium">Summer Collection</h3>
                  <p className="text-gray-600">Expected in June</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="bg-gray-100 h-48 rounded flex items-center justify-center mb-4">
                    <p className="text-gray-500">Coming Soon</p>
                  </div>
                  <h3 className="font-medium">Wedding Specials</h3>
                  <p className="text-gray-600">Expected in July</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="bg-gray-100 h-48 rounded flex items-center justify-center mb-4">
                    <p className="text-gray-500">Coming Soon</p>
                  </div>
                  <h3 className="font-medium">Limited Edition Set</h3>
                  <p className="text-gray-600">Expected in August</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default NewArrivalsPage;
