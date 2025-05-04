
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

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
  return (
    <div className="product-card group">
      <div className="product-image-container">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="product-image"
          />
          {product.isNew && (
            <div className="absolute top-2 left-2 bg-rose-500 text-white text-xs px-2 py-1 rounded">
              New
            </div>
          )}
        </Link>
        <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full text-gray-500 hover:text-love-500 transition-colors">
          <Heart size={18} />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-800 mb-1">
          <Link to={`/product/${product.id}`} className="hover:text-love-500">
            {product.name}
          </Link>
        </h3>
        <p className="text-love-600 font-medium">${product.price.toFixed(2)}</p>
        <button className="w-full mt-2 py-2 text-center border border-gray-300 rounded text-gray-700 hover:bg-love-50 hover:border-love-300 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
