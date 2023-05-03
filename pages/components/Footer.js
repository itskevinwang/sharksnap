export default function Footer() {
    return (
      <footer className="text-center mt-10 mb-4">
        <p className="mb-4">&copy; {new Date().getFullYear()} <a href="https://sharkstewards.org/"><b>Shark Stewards</b></a>. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com/YOUR_FACEBOOK_PAGE" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-square text-2xl"></i>
          </a>
          <a href="https://twitter.com/YOUR_TWITTER_HANDLE" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter-square text-2xl"></i>
          </a>
          <a href="https://instagram.com/YOUR_INSTAGRAM_HANDLE" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>
      </footer>
    );
  }