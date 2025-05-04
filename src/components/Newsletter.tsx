
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you'd call an API to subscribe the user
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive our latest updates and exclusive offers.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-love-600">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 fade-in">
            Join Our Love Story
          </h2>
          <p className="text-white/80 mb-8 fade-in">
            Subscribe to our newsletter and be the first to hear about new collections,
            exclusive offers, and romantic gift ideas.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-love-300"
              required
            />
            <button
              type="submit"
              className="bg-white text-love-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-white/60 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
