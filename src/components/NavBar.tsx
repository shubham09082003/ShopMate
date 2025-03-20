import { useEffect, useState } from "react";
import purchase from "../assets/purchase.png";

function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  },[])

  const handleAuth = () => {
    if(isAuthenticated) {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
    }
    else{
      window.location.href = "/login";
    }
  }
  return (
    <nav>
      <div className=" shadow-md rounded-md p-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={purchase} width={30} height={30}/>
          <a href="/" className="font-bold text-xl">E-Commerce</a>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li className="italic"><a href="/">Home</a></li>
            <li className="italic"><a href="/orders">Orders</a></li>
            <li className="italic"><a href="/cart">Cart</a></li>
          </ul>
        </div>
        <div className="flex space-x-4">
          <div className="bg-blue-500 p-2 rounded-md text-white w-20 text-center hover:bg-blue-600 cursor-pointer">
            <button className="cursor-pointer" onClick={handleAuth}>{isAuthenticated ? "LogOut" : "LogIn"}</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
