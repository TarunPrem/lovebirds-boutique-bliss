
import { Link } from "react-router-dom";
import { Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-serif text-love-600">Lovebirds</h2>
            </Link>
            <p className="text-gray-600 mb-4">
              Curated, elegant, and romantic jewelry and gifts for every special moment.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/store_lovebirds/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-love-500" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-love-500" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-love-500" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-love-500">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/shop?category=necklaces" className="text-gray-600 hover:text-love-500">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=earrings" className="text-gray-600 hover:text-love-500">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=gifts" className="text-gray-600 hover:text-love-500">
                  Gift Sets
                </Link>
              </li>
              <li>
                <Link to="/shop?category=accessories" className="text-gray-600 hover:text-love-500">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-love-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-love-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-love-500">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-love-500">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-love-500">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-love-300"
              />
              <button className="bg-love-500 text-white px-4 rounded-r-md hover:bg-love-600 transition-colors">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Lovebirds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
