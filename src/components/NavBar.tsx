import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import purchase from "../assets/purchase.png";

function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleAuth = () => {
    if (isAuthenticated) {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <nav className="bg-white shadow-md p-4 md:p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={purchase} width={35} height={35} alt="Logo" />
          <Link to="/" className="font-bold text-xl text-blue-600">E-Commerce</Link>
        </div>

        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/orders" className="hover:text-blue-500">Orders</Link></li>
          <li><Link to="/cart" className="hover:text-blue-500">Cart</Link></li>
        </ul>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={handleAuth}
        >
          {isAuthenticated ? "LogOut" : "LogIn"}
        </button>

        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 text-center bg-white shadow-lg p-4">
          <Link to="/" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/orders" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Orders</Link>
          <Link to="/cart" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Cart</Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
