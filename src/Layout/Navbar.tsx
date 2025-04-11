import UserAvatar from "@/ui/UserAvatar";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary-blue shadow-lg">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-2xl font-bold">
              HardBay
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="relative group text-white hover:text-primary-orange  px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary-orange transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
            <Link
              to="/about"
              className="relative group text-white hover:text-primary-orange  px-3 py-2 rounded-md text-sm font-medium"
            >
              About
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary-orange transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
            <Link
              to="/products"
              className="relative group text-white hover:text-primary-orange  px-3 py-2 rounded-md text-sm font-medium"
            >
              Products
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary-orange transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
            </Link>

            {/* Services Link with Popover */}
            <div className="relative group flex items-center">
              <Link
                to="/services"
                className="relative mb-1 text-white hover:text-primary-orange px-3 py-2 rounded-none text-sm font-medium"
              >
                Services
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary-orange transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
              {/* Custom Popover Menu */}
              <div className="absolute left-0 top-10 mt-2 w-[160px] bg-primary-blue text-white rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  to="/custom-server-build"
                  className="flex items-center px-4 py-2 text-sm font-medium hover:bg-primary-orange w-full transition-all duration-300"
                >
                  Custom Server Build
                </Link>
                <Link
                  to="/gpu-rental"
                  className="flex items-center px-4 py-2 text-sm font-medium hover:bg-primary-orange w-full transition-all duration-300"
                >
                  GPU Rental
                </Link>
                <Link
                  to="/enterprise-storage"
                  className="flex items-center px-4 py-2 text-sm font-medium hover:bg-primary-orange w-full transition-all duration-300"
                >
                  Enterprise Storage
                </Link>
                <Link
                  to="/it-hardware-consult"
                  className="flex items-center px-4 py-2 text-sm font-medium hover:bg-primary-orange w-full transition-all duration-300"
                >
                  IT Hardware Consult
                </Link>
              </div>
            </div>

            {/* Navigation service end  */}
            <Link
              to="/contact"
              className="relative group text-white hover:text-primary-orange  px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary-orange transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
            </Link>

            <Popover>
              <PopoverTrigger>
                <UserAvatar userName="Mahim" />
              </PopoverTrigger>
              <PopoverContent className="mr-3 bg-website-color-darkGray border-none text-white">
                Place content for the popover here.
              </PopoverContent>
            </Popover>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-white block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-white block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
