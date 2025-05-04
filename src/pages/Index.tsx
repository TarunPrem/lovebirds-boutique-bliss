
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import NewArrivals from "@/components/NewArrivals";
import AboutPreview from "@/components/AboutPreview";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <Categories />
        <FeaturedProducts />
        <AboutPreview />
        <NewArrivals />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Index;
