import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Product } from "@/components/ProductCard";

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

// Extended product details
interface ProductDetails extends Product {
  description?: string;
  material?: string;
  dimensions?: string;
}

// Add product details
const productDetails: Record<number, Partial<ProductDetails>> = {
  1: {
    description: "This elegant pearl pendant necklace features a lustrous freshwater pearl suspended from a delicate sterling silver chain. The perfect accessory to add a touch of timeless elegance to any outfit.",
    material: "Sterling Silver, Freshwater Pearl",
    dimensions: "Chain Length: 18 inches, Pearl Diameter: 8mm"
  },
  2: {
    description: "These beautiful rose gold heart earrings are the perfect expression of love. Featuring a polished finish and secure butterfly backs, they make an ideal gift for someone special.",
    material: "18K Rose Gold Plated Sterling Silver",
    dimensions: "Heart Size: 10mm x 10mm"
  },
  3: {
    description: "Our Crystal Love Bracelet combines sparkling crystals with a durable design. The adjustable clasp ensures a comfortable fit for any wrist size, while the elegant packaging makes it perfect for gifting.",
    material: "Sterling Silver, Crystal",
    dimensions: "Adjustable Length: 6-8 inches"
  },
  4: {
    description: "The Silver Infinity Ring symbolizes eternal love and connection. Its polished finish and comfortable band make it perfect for everyday wear, while the infinity symbol adds a meaningful touch.",
    material: "925 Sterling Silver",
    dimensions: "Band Width: 2mm"
  },
  5: {
    description: "The Opal Teardrop Necklace features a stunning Australian opal in a delicate silver setting. Each opal displays unique color play, making every piece one-of-a-kind.",
    material: "Sterling Silver, Australian Opal",
    dimensions: "Chain Length: 16 inches with 2-inch extender, Pendant Size: 12mm x 8mm"
  },
  6: {
    description: "These delicate gold butterfly earrings capture the beauty of nature. The intricate wing details catch the light beautifully, adding a touch of whimsy to any outfit.",
    material: "14K Gold Plated Brass",
    dimensions: "Butterfly Size: 12mm x 10mm"
  },
  7: {
    description: "Our Sparkling Gemstone Set includes a matching necklace, bracelet, and earrings featuring multi-colored gemstones. Perfect for special occasions or as a thoughtful gift.",
    material: "Sterling Silver, Mixed Gemstones",
    dimensions: "Necklace: 18 inches, Bracelet: 7 inches, Earrings: 15mm drop"
  },
  8: {
    description: "The Minimalist Moon Bracelet features a crescent moon charm on a delicate chain. Adjustable and lightweight, it's perfect for layering with other bracelets.",
    material: "Sterling Silver",
    dimensions: "Adjustable Length: 6-8 inches, Moon Charm: 8mm"
  }
};

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState("description");

  useEffect(() => {
    if (productId) {
      const id = parseInt(productId);
      const foundProduct = allProducts.find(p => p.id === id);
      
      if (foundProduct) {
        const details = productDetails[id] || {};
        setProduct({ ...foundProduct, ...details });
      }
    }
  }, [productId]);
  
  const handleAddToCart = () => {
    if (product) {
      // In a real app, you'd add to cart in state/context
      toast({
        title: "Added to Cart",
        description: `${quantity} x ${product.name} added to your cart.`,
      });
    }
  };
  
  const handleAddToWishlist = () => {
    if (product) {
      toast({
        title: "Added to Wishlist",
        description: `${product.name} added to your wishlist.`,
      });
    }
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container-custom py-16 text-center">
          <h2 className="text-2xl font-medium">Product not found</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Image */}
            <div className="rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Product Details */}
            <div>
              {product.isNew && (
                <div className="inline-block bg-rose-500 text-white text-sm px-3 py-1 rounded-full mb-4">
                  New Arrival
                </div>
              )}
              <h1 className="text-3xl font-serif mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">(12 reviews)</span>
              </div>
              <p className="text-2xl font-medium text-love-600 mb-6">
                ₹{product.price.toFixed(2)}
              </p>
              <div className="mb-6">
                <p className="text-gray-700">
                  {product.description || "No description available."}
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center mb-6">
                <span className="text-gray-700 mr-4">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded">
                  <button 
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-12 text-center border-x border-gray-300 py-1 focus:outline-none"
                  />
                  <button 
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  className="flex-1 bg-love-500 text-white py-3 px-6 rounded-md hover:bg-love-600 transition-colors flex items-center justify-center gap-2"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button 
                  className="flex-1 bg-white border border-gray-300 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                  onClick={handleAddToWishlist}
                >
                  <Heart size={20} />
                  Wishlist
                </button>
              </div>

              {/* Product information tabs */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex border-b border-gray-200">
                  <button
                    className={`pb-2 px-4 text-sm font-medium ${
                      tab === "description" ? "border-b-2 border-love-500 text-love-600" : "text-gray-500"
                    }`}
                    onClick={() => setTab("description")}
                  >
                    Description
                  </button>
                  <button
                    className={`pb-2 px-4 text-sm font-medium ${
                      tab === "details" ? "border-b-2 border-love-500 text-love-600" : "text-gray-500"
                    }`}
                    onClick={() => setTab("details")}
                  >
                    Details
                  </button>
                  <button
                    className={`pb-2 px-4 text-sm font-medium ${
                      tab === "reviews" ? "border-b-2 border-love-500 text-love-600" : "text-gray-500"
                    }`}
                    onClick={() => setTab("reviews")}
                  >
                    Reviews (12)
                  </button>
                </div>

                <div className="py-4">
                  {tab === "description" && (
                    <div>
                      <p className="text-gray-700">{product.description}</p>
                    </div>
                  )}
                  
                  {tab === "details" && (
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium">Material</h4>
                        <p className="text-gray-600">{product.material || "Information not available"}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Dimensions</h4>
                        <p className="text-gray-600">{product.dimensions || "Information not available"}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Care</h4>
                        <p className="text-gray-600">Clean with a soft, dry cloth. Store in the provided pouch when not in use.</p>
                      </div>
                    </div>
                  )}
                  
                  {tab === "reviews" && (
                    <div className="space-y-4">
                      <p className="text-gray-700">Customer reviews will be displayed here.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
