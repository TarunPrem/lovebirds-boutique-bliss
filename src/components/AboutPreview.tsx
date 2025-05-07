
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutPreview = () => {
  return (
    <section className="py-16 bg-love-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80"
              alt="Lovebirds workshop"
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 fade-in">Our Love Story</h2>
            <div className="w-20 h-1 bg-love-500 mb-6"></div>
            <p className="text-gray-700 mb-4 fade-in">
              At Lovebirds, we believe that every piece of jewelry tells a story. Our carefully curated
              collections are designed to celebrate love, beauty, and the special moments in life.
            </p>
            <p className="text-gray-700 mb-6 fade-in">
              Founded by Tarun and Srivatsan with a passion for creating elegant and meaningful pieces, we handcraft each 
              item with attention to detail and quality. From romantic necklaces to enchanting gift sets,
              our products are made to be treasured for years to come.
            </p>
            <Button className="bg-love-500 hover:bg-love-600 text-white px-6 py-2 rounded-md">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
