import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoBagSharp } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`bg-primary-blue shadow-lg fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex gap-16">
            <div>
              <Link to="/" className="text-white text-2xl font-bold ms-8">
                Hard<span className="text-primary-orange">bay</span>
              </Link>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link
                to="/"
                className="relative group text-white hover:text-primary-orange  px-3 py-2 rounded-md text-md font-medium"
              >
                Home
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary-orange transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
              <Link
                to="/about"
                className="relative group text-white hover:text-primary-orange  px-3 py-2 rounded-md text-md font-medium"
              >
                About Us
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary-orange transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
              {/* <Link
                to="/products"
                className="relative group text-white hover:text-primary-orange  px-3 py-2 rounded-md text-md font-medium"
              >
                Products
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary-orange transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
              </Link> */}

              {/* Services Link with Popover */}
              <div
                className="relative group flex items-center"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <Link
                  to="/service"
                  className="relative mb-1 text-white hover:text-primary-orange px-3 py-2 rounded-none text-md font-medium"
                >
                  Services
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary-orange transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
                {/* Custom Popover Menu */}
                {isOpen && (
                  <div className="absolute left-0 top-10 mt-2 w-[180px] bg-primary-blue text-white z-50 shadow-lg">
                    <Link
                      to="/service/custom-server-build"
                      className="flex items-center px-4 py-2 text-sm font-medium hover:bg-primary-orange w-full transition-all duration-300"
                    >
                      Custom Server Build
                    </Link>
                    <Link
                      to="/service/gpu-rental"
                      className="flex items-center px-4 py-2 text-sm font-medium hover:bg-primary-orange w-full transition-all duration-300"
                    >
                      GPU Rental
                    </Link>
                    <Link
                      to="/service/enterprise-storage"
                      className="flex items-center px-4 py-2 text-sm font-medium hover:bg-primary-orange w-full transition-all duration-300"
                    >
                      Enterprise Storage
                    </Link>
                    <Link
                      to="/service/it-hardware-consult"
                      className="flex items-center px-4 py-2 text-sm font-medium hover:bg-primary-orange w-full transition-all duration-300"
                    >
                      IT Hardware Consult
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/blog"
                className="relative group text-white hover:text-primary-orange  px-3 py-2 rounded-md text-md font-medium"
              >
                Blog
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary-orange transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
              <Link
                to="/case-studies"
                className="relative group text-white hover:text-primary-orange  px-3 py-2 rounded-md text-md font-medium"
              >
                Case Studies
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary-orange transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
              <Link
                to="/partners"
                className="relative group text-white hover:text-primary-orange  px-3 py-2 rounded-md text-md font-medium"
              >
                Partners
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary-orange transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
              <Link
                to="/contact"
                className="relative group text-white hover:text-primary-orange  px-3 py-2 rounded-md text-md font-medium"
              >
                Contact Us
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary-orange transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}

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
          <div className="hidden md:flex items-center me-10 gap-3">
            <div className="relative flex items-center">
              {/* Search Trigger */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: isSearchOpen ? -155 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="z-10"
              >
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                >
                  <IoSearchSharp className="text-2xl text-primary-orange hover:text-primary-bg" />
                </button>
              </motion.div>

              {/* Search Input */}
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.input
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "200px", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    type="text"
                    placeholder="Search products"
                    className="absolute -left-38 bg-white text-black px-10 py-2 rounded-md outline-none shadow-lg"
                    style={{ zIndex: 0 }}
                  />
                )}
              </AnimatePresence>
            </div>

            <button className="relative group text-white hover:text-primary-orange  px-3 py-2 rounded-md text-sm font-medium">
              <FaHeart className="text-2xl text-primary-orange hover:text-primary-bg" />
            </button>
            <Link
              to="/cart"
              className="relative group text-white hover:text-primary-orange  px-3 py-2 rounded-md text-sm font-medium"
            >
              <IoBagSharp className="text-2xl text-primary-orange hover:text-primary-bg" />
            </Link>
            <button className="relative group text-white hover:text-primary-orange  px-3 py-2 rounded-md text-sm font-medium">
              <IoPersonOutline className="text-2xl text-primary-orange hover:text-primary-bg" />
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
              to="/service"
              className="text-white block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="text-white block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Blog
            </Link>
            <Link
              to="/case-studies"
              className="text-white block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Case Studies
            </Link>
            <Link
              to="/partners"
              className="text-white block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Partners
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
