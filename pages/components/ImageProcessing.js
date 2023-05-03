import Header from "./Header";
import Footer from "./Footer";

export default function ImageProcessing() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 flex-grow">
        <Header />
        <div className="my-10">
          <h2 className="text-2xl font-bold mb-5">AI-Powered Shark Image Upscaling</h2>
          <p className="mb-5">Use our AI-powered image upscaling tool to enhance your shark photos.</p>
          <a
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            href="https://colab.research.google.com/drive/1LqaVGSUZ025g3Yk63BmgWtYtUZEeqF-S?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Image Upscaling Notebook
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}