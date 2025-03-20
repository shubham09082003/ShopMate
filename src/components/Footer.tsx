import {FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-2xl font-bold">ShopMate</h2>
            <p className="text-gray-400 mt-2">Your one-stop shop for the best deals.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-1 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/shop" className="hover:text-white">Order</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://github.com/shubham09082003" className="text-gray-400 hover:text-white text-xl">
                <FaGithub />
              </a>
              <a href="www.linkedin.com/in/shubham-bhatt-904395222" className="text-gray-400 hover:text-white text-xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} ShopMate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
