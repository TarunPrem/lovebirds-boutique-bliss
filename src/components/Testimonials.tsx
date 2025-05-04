
import { useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Emma Thompson",
    location: "New York, NY",
    rating: 5,
    text: "I ordered the Pearl Pendant Necklace for my anniversary and it exceeded my expectations! The quality is incredible and the packaging was so elegant. My wife absolutely loves it!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "San Francisco, CA",
    rating: 5,
    text: "The Rose Gold Heart Earrings I purchased for my girlfriend were perfect. The delivery was quick and the personalized note was such a thoughtful touch. Will definitely shop here again!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    location: "Miami, FL",
    rating: 5,
    text: "I'm in love with the Crystal Love Bracelet! It's delicate yet sturdy, and looks even more beautiful in person. The customer service was also exceptional when I had questions.",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=150&q=80",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 fade-in">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto fade-in">
            Real stories from our valued customers who found the perfect piece
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex text-amber-400 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
