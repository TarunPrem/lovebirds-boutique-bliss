
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-love-50 to-gray-50 py-16 md:py-24">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=80')] bg-cover opacity-5"></div>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 z-10">
            <span className="inline-block bg-love-100 text-love-700 px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fadeIn">Handcrafted with Love</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6 fade-in">
              Express Your <span className="text-love-600 italic">Love</span> With Silver
            </h1>
            <p className="text-lg text-gray-700 mb-8 fade-in leading-relaxed">
              Discover our curated collection of romantic, elegant jewelry in stunning red and silver designs.
              Each piece is <span className="font-medium text-love-700">handcrafted with love</span> for those special moments in life.
            </p>
            <div className="space-x-4 fade-in">
              <Button className="bg-love-600 hover:bg-love-700 text-white px-8 py-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
                <Link to="/shop" className="flex items-center">
                  <span className="mr-2">Shop Now</span>
                  <Heart size={16} className="animate-pulse" />
                </Link>
              </Button>
              <Button variant="outline" className="border-love-300 text-love-700 hover:bg-love-50 px-8 py-6 rounded-md shadow-sm hover:shadow-md transition-all">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1200&q=80" 
                alt="Elegant silver and red jewelry collection" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white p-5 rounded-lg shadow-xl hidden md:block animate-fadeIn">
              <p className="text-love-600 font-medium">New Love Collection</p>
              <p className="text-sm text-gray-600">Starting at $49.99</p>
            </div>
            <div className="absolute -top-5 -right-5 bg-love-50 p-4 rounded-full shadow-lg hidden md:block animate-fadeIn">
              <Heart size={24} className="text-love-500 fill-love-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
