import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
export default function NavBar(){
   
   
  const [isOpen, setIsOpen] = useState(false);

    return(
        <>
           <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          

            
          <img src="../../src/assets/main_logo.png" alt="error" className="h-30"/>
          

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>

            {/* Auth Buttons */}
            <a href="#" className="text-gray-600 hover:text-blue-600">Login</a>
            <a
              href="#"
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
          <a href="#" className="block text-gray-600 hover:text-blue-600">Home</a>
          <a href="#" className="block text-gray-600 hover:text-blue-600">Services</a>
          <a href="#" className="block text-gray-600 hover:text-blue-600">About</a>
          <a href="#" className="block text-gray-600 hover:text-blue-600">Contact</a>
          <a href="#" className="block text-gray-600 hover:text-blue-600">Login</a>
          <a
            href="#"
            className="block text-center bg-blue-600 text-white py-1 rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
        </>
    )
}