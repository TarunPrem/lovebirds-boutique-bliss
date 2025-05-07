import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, ShoppingCart, Menu, X, Search, User, BadgeCheck, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'} sticky top-0 z-50 transition-all duration-300`}>
      <div className="bg-love-600 text-white py-1.5 text-center text-sm font-medium">
        <div className="container-custom flex items-center justify-center">
          <BadgeCheck size={16} className="mr-2" /> Free shipping on orders over ₹2000 | 30-day returns
        </div>
      </div>
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo for mobile and desktop */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="relative">
                <Heart size={32} className="text-love-500 fill-love-500 mr-2" />
                <Heart size={20} className="text-love-300 fill-love-300 absolute -top-1 -right-1 transform rotate-12" />
              </div>
              <h1 className="text-2xl font-serif font-medium text-love-600">Lovebirds</h1>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-love-500 font-semibold' : 'text-gray-700 hover:text-love-500'} relative font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-love-500 after:transition-all hover:after:w-full`}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={`${isActive('/shop') ? 'text-love-500 font-semibold' : 'text-gray-700 hover:text-love-500'} relative font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-love-500 after:transition-all hover:after:w-full`}
            >
              Shop
            </Link>
            <Link 
              to="/new-arrivals" 
              className={`${isActive('/new-arrivals') ? 'text-love-500 font-semibold' : 'text-gray-700 hover:text-love-500'} relative font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-love-500 after:transition-all hover:after:w-full`}
            >
              New Arrivals
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-love-500 font-semibold' : 'text-gray-700 hover:text-love-500'} relative font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-love-500 after:transition-all hover:after:w-full`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-love-500 font-semibold' : 'text-gray-700 hover:text-love-500'} relative font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-love-500 after:transition-all hover:after:w-full`}
            >
              Contact
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-love-500 transition-colors">
              <Search size={20} />
            </button>
            <Link to="/login" className="text-gray-700 hover:text-love-500 transition-colors flex items-center gap-1">
              <LogIn size={20} />
              <span className="hidden md:inline">Login</span>
            </Link>
            <button className="text-gray-700 hover:text-love-500 transition-colors relative">
              <Heart size={20} />
              <span className="absolute -top-2 -right-2 bg-love-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <Link to="/cart" className="text-gray-700 hover:text-love-500 transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-love-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
            <button 
              className="md:hidden text-gray-700 hover:text-love-500 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              to="/"
              className={`block py-2 ${isActive('/') ? 'text-love-500 font-semibold' : 'text-gray-700'} hover:text-love-500`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`block py-2 ${isActive('/shop') ? 'text-love-500 font-semibold' : 'text-gray-700'} hover:text-love-500`}
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/new-arrivals"
              className={`block py-2 ${isActive('/new-arrivals') ? 'text-love-500 font-semibold' : 'text-gray-700'} hover:text-love-500`}
              onClick={() => setIsMenuOpen(false)}
            >
              New Arrivals
            </Link>
            <Link
              to="/about"
              className={`block py-2 ${isActive('/about') ? 'text-love-500 font-semibold' : 'text-gray-700'} hover:text-love-500`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block py-2 ${isActive('/contact') ? 'text-love-500 font-semibold' : 'text-gray-700'} hover:text-love-500`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/login"
              className={`block py-2 ${isActive('/login') ? 'text-love-500 font-semibold' : 'text-gray-700'} hover:text-love-500`}
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
