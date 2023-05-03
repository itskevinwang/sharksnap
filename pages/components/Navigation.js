export default function Navigation() {
    return (
      <nav className="flex justify-center space-x-4 text-lg">
        <a href="/landing" className="hover:text-blue-400">Home</a>
        <a href="/" className="hover:text-blue-400">Database</a>
        <a href="/image-processing" className="hover:text-blue-400">Image Processing</a>
      </nav>
    );
  }