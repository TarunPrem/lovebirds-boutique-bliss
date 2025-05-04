
import { BadgeCheck, Heart, StarHalf, Gift } from "lucide-react";

const TrustBadges = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-love-50 flex items-center justify-center mb-4">
              <Heart size={24} className="text-love-500" />
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Handcrafted</h3>
            <p className="text-sm text-gray-600">Each piece is carefully crafted with attention to detail.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-love-50 flex items-center justify-center mb-4">
              <BadgeCheck size={24} className="text-love-500" />
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Quality Guaranteed</h3>
            <p className="text-sm text-gray-600">We only use the finest materials for our jewelry.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-love-50 flex items-center justify-center mb-4">
              <Gift size={24} className="text-love-500" />
            </div>
            <h3 className="font-medium text-gray-800 mb-2">Elegant Packaging</h3>
            <p className="text-sm text-gray-600">Perfect for gifting to your loved ones.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-love-50 flex items-center justify-center mb-4">
              <StarHalf size={24} className="text-love-500" />
            </div>
            <h3 className="font-medium text-gray-800 mb-2">5-Star Service</h3>
            <p className="text-sm text-gray-600">Dedicated support to ensure your satisfaction.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
