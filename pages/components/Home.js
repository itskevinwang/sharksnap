import Header from "./Header";
import AirtableForm from "./AirtableForm";
import AirtableGallery from "./AirtableGallery";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 flex-grow">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <AirtableForm />
          <AirtableGallery />
        </div>
      </div>
      <Footer />
    </div>
  );
}