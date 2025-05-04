
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-love-50 py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-4 fade-in">
              Elegance for <span className="text-love-600">Every</span> Occasion
            </h1>
            <p className="text-lg text-gray-700 mb-8 fade-in">
              Discover our curated collection of romantic, elegant jewelry and gifts.
              Handcrafted with love for those special moments in life.
            </p>
            <div className="space-x-4 fade-in">
              <Button className="bg-love-500 hover:bg-love-600 text-white px-6 py-2 rounded-md">
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button variant="outline" className="border-love-300 text-love-700 hover:bg-love-50 px-6 py-2 rounded-md">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1200&q=80" 
                alt="Elegant jewelry collection" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <p className="text-love-600 font-medium">New Collection</p>
              <p className="text-sm text-gray-600">Starting at $49.99</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-love-100/30 to-transparent -z-10"></div>
    </section>
  );
};

export default Hero;
