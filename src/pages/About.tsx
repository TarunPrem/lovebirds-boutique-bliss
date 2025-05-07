import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-love-50 py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif mb-6 fade-in">Our Story</h1>
              <p className="text-lg text-gray-700 fade-in">
                Crafting love into every piece since 2018
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-serif mb-6 fade-in">A Love for Beautiful Things</h2>
                <div className="space-y-4 text-gray-700">
                  <p className="fade-in">
                    At Lovebirds, our journey began with a deep-seated passion for crafting pieces that celebrate love and connection. 
                    What started as a modest collection of handcrafted jewelry has blossomed into a curated boutique offering elegant 
                    accessories and thoughtful gifts.
                  </p>
                  <p className="fade-in">
                    Our founder, Tarun, has always believed that jewelry should not only captivate with its beauty but also narrate a story. 
                    Each piece in our collection is meticulously selected to embody the delicate balance of romance, elegance, and contemporary style.
                  </p>
                  <p className="fade-in">
                    We collaborate with talented artisans who share our vision and commitment to quality craftsmanship. 
                    From delicate necklaces to statement pieces, every Lovebirds item is created with meticulous attention to detail, 
                    designed to be cherished for years to come.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80" 
                  alt="Lovebirds workshop" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-love-50">
          <div className="container-custom">
            <h2 className="text-3xl font-serif text-center mb-12 fade-in">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-love-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-love-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">Crafted with Love</h3>
                <p className="text-gray-600">
                  Every piece in our collection is selected with care and attention to detail, 
                  ensuring quality and beauty in everything we offer.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-love-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-love-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">Sustainable Sourcing</h3>
                <p className="text-gray-600">
                  We are committed to ethical practices and sustainability, carefully 
                  choosing partners who share our values and respect for the environment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-love-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-love-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-3">Meaningful Gifting</h3>
                <p className="text-gray-600">
                  We believe in the power of thoughtful gifts to express love and create 
                  lasting memories, which is why every purchase includes elegant packaging.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-serif text-center mb-12 fade-in">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80" 
                    alt="Emily Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif mb-1">Emily Johnson</h3>
                <p className="text-love-600 mb-3">Founder & Creative Director</p>
                <p className="text-gray-600">
                  Emily's passion for beautiful jewelry and meaningful connections led her to 
                  create Lovebirds in 2018.
                </p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" 
                    alt="Michael Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif mb-1">Michael Chen</h3>
                <p className="text-love-600 mb-3">Product Curator</p>
                <p className="text-gray-600">
                  With a keen eye for design and quality, Michael selects each piece in our collection 
                  to ensure it meets our high standards.
                </p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=300&q=80" 
                    alt="Sophia Rodriguez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif mb-1">Sophia Rodriguez</h3>
                <p className="text-love-600 mb-3">Customer Experience</p>
                <p className="text-gray-600">
                  Sophia ensures that every customer interaction with Lovebirds is as exceptional 
                  as the products we offer.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default About;
