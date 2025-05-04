
import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    if (!isWishlisted) {
      toast({
        title: "Added to Wishlist",
        description: `${product.name} has been added to your wishlist.`,
        variant: "default",
      });
    }
  };

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
      variant: "default",
    });
  };

  return (
    <div className="product-card group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="product-image-container relative overflow-hidden aspect-square">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105"
          />
          {product.isNew && (
            <div className="absolute top-3 left-3 bg-rose-500 text-white text-xs font-medium px-2 py-1 rounded-full shadow-sm">
              New
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
        <button 
          className={`absolute top-3 right-3 bg-white p-2 rounded-full shadow-md ${isWishlisted ? 'text-rose-500' : 'text-gray-400'} hover:text-rose-500 transition-all duration-300 transform hover:scale-110`}
          onClick={handleWishlist}
        >
          <Heart size={18} className={isWishlisted ? 'fill-rose-500' : ''} />
        </button>
      </div>
      <div className="p-4">
        <div className="flex text-amber-400 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={12} fill="currentColor" />
          ))}
        </div>
        <h3 className="font-medium text-gray-800 mb-1 group-hover:text-love-600 transition-colors">
          <Link to={`/product/${product.id}`}>
            {product.name}
          </Link>
        </h3>
        <p className="text-love-600 font-semibold mb-3">${product.price.toFixed(2)}</p>
        <button 
          className="w-full py-2.5 text-center bg-white border border-gray-200 rounded-md text-gray-700 font-medium hover:bg-love-500 hover:text-white hover:border-love-500 transition-all duration-300"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
