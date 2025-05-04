
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Menu, X, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo for mobile and desktop */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-serif font-medium text-love-600">Lovebirds</h1>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-love-500 font-medium">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-love-500 font-medium">
              Shop
            </Link>
            <Link to="/new-arrivals" className="text-gray-700 hover:text-love-500 font-medium">
              New Arrivals
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-love-500 font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-love-500 font-medium">
              Contact
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-love-500">
              <Search size={20} />
            </button>
            <button className="text-gray-700 hover:text-love-500">
              <User size={20} />
            </button>
            <button className="text-gray-700 hover:text-love-500">
              <Heart size={20} />
            </button>
            <Link to="/cart" className="text-gray-700 hover:text-love-500 relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-love-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-love-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block py-2 text-gray-700 hover:text-love-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/new-arrivals"
              className="block py-2 text-gray-700 hover:text-love-500"
              onClick={() => setIsMenuOpen(false)}
            >
              New Arrivals
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-700 hover:text-love-500"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-gray-700 hover:text-love-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
