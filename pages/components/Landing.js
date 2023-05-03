import Header from "./Header";
import AboutSection from "./AboutSection";
import Footer from "./Footer";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-cover bg-center h-3/5" style={{ backgroundImage: "url('shark_background.jpg')" }}>
        <div className="bg-black bg-opacity-60 h-full">
          <Header />
        </div>
      </div>
      <div className="container mx-auto px-4 flex-grow">
        <div className="text-center my-10">
          <p className="text-xl mb-5">We're building a community-driven no-catch shark photo database for shark conservation research.</p>
          <p className="text-lg mb-10">Share your shark photos to contribute to our mission and explore our shark photo database.</p>
        </div>
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
}