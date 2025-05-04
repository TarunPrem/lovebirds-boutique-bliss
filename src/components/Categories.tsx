
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Necklaces",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=500&q=80",
    link: "/shop/necklaces",
  },
  {
    id: 2,
    name: "Earrings",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=500&q=80",
    link: "/shop/earrings",
  },
  {
    id: 3,
    name: "Bracelets",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=500&q=80",
    link: "/shop/bracelets",
  },
  {
    id: 4,
    name: "Gift Sets",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=500&q=80",
    link: "/shop/gift-sets",
  },
];

const Categories = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 fade-in">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto fade-in">
            Browse our beautiful collections organized by category
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group relative overflow-hidden rounded-lg shadow-md h-72"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl font-serif mb-1">{category.name}</h3>
                <p className="text-white/90 text-sm group-hover:text-love-200 transition-colors">
                  Shop Now
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
