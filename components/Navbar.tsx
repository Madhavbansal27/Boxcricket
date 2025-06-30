import React from "react";
import { Link, useLocation } from "react-router-dom";
import {  Home } from "lucide-react";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-15">
          <Link to="/" className="flex items-center space-x-2 group">
            
              <img src="/logo.jpeg" className="h-12 w-12 rounded-full" alt="" />
            
            <span className="text-md lg:text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
              NY BOX CRICKET
            </span>
          </Link>
          <div className="flex space-x-1 lg:space-x-8">
            <Link
              to="/"
              className={`flex z-10 items-center space-x-1 px-3 py-2 h-10 my-auto rounded-md text-xs lg:text-sm font-medium transition-all duration-200 ${
                location.pathname === "/"
                  ? "text-green-600 bg-green-50"
                  : "text-gray-700 hover:text-green-600 hover:bg-green-50"
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
