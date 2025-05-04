
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import NewArrivals from "@/components/NewArrivals";
import AboutPreview from "@/components/AboutPreview";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
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
