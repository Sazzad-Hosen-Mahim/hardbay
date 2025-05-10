import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoSearchSharp, IoBagSharp, IoPersonOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import debounce from "lodash.debounce";
import { searchedProduct } from "@/store/Slices/ProductSlice/searchedProductSlice";

// Navigation link interface
interface NavLink {
  to: string;
  text: string;
}

// Services dropdown items
const serviceLinks = [
  { to: "/service/custom-server", text: "Custom Server Build" },
  { to: "/service/gpu-rental", text: "GPU Rental" },
  { to: "/service/enterprise-storage", text: "Enterprise Storage" },
  { to: "/service/it-hardware-consult", text: "IT Hardware Consult" },
];

// Main navigation links
const navLinks: NavLink[] = [
  { to: "/", text: "Home" },
  { to: "/partners", text: "Partners" },
  { to: "/case-studies", text: "Case Studies" },
  { to: "/solutions", text: "Solutions" },
  { to: "/contact", text: "Contact Us" },
];

const Navbar: React.FC = () => {
  // State management
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [query, setQuery] = useState("");
  const [showPopover, setShowPopover] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { searchedResults } = useAppSelector((state) => state.searchedProduct);

  // Debounced search function
  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        if (value) {
          dispatch(searchedProduct(value)).then(() => {
            setShowPopover(true);
          });
        } else {
          setShowPopover(false);
        }
      }, 400),
    [dispatch]
  );

  // Click outside handler for search popover
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowPopover(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll handler for navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY <= lastScrollY || currentScrollY <= 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Search effect
  useEffect(() => {
    debouncedSearch(query);
    return () => debouncedSearch.cancel();
  }, [query, debouncedSearch]);

  // Event handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setShowPopover(!!value);
  };

  const handleInputFocus = () => query && setShowPopover(true);
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleNavigate = (id: string) => {
    navigate(`/service/product-details/${id}`);
    setShowPopover(false);
  };

  // NavLink component for consistent styling
  const NavLinkItem = ({ to, text }: NavLink) => (
    <Link
      to={to}
      className="relative group text-white hover:text-primary-orange px-3 py-2 rounded-md text-md font-medium"
    >
      {text}
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary-orange transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );

  // MobileNavLink component for mobile menu
  const MobileNavLink = ({ to, text }: NavLink) => (
    <Link
      to={to}
      className="text-white block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium"
      onClick={() => setIsOpen(false)}
    >
      {text}
    </Link>
  );

  return (
    <nav
      className={`bg-primary-blue shadow-lg fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex gap-16">
            <Link to="/" className="text-white text-2xl font-bold ms-8">
              Tortuga<span className="text-primary-orange">7</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              {navLinks.map((link) => (
                <NavLinkItem key={link.to} to={link.to} text={link.text} />
              ))}

              {/* Services Dropdown */}
              <div className="relative group">
                <div
                  className="flex items-center"
                  onMouseEnter={() => setShowServices(true)}
                  onMouseLeave={() => {
                    setTimeout(() => {
                      setShowServices(false);
                    }, 300);
                  }}
                >
                  <NavLinkItem to="/service" text="Services" />
                </div>

                {showServices && (
                  <div
                    className="absolute left-0 top-10 mt-2 w-[180px] bg-primary-blue text-white z-50 shadow-lg"
                    onMouseEnter={() => {
                      setTimeout(() => {
                        setShowServices(true);
                      }, 300);
                    }}
                    onMouseLeave={() => setShowServices(false)}
                  >
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="flex items-center px-4 py-2 text-sm font-medium hover:bg-primary-orange w-full transition-all duration-300"
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
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

          {/* Search and User Actions */}
          <div className="hidden md:flex items-center me-10 gap-3">
            <div className="relative flex items-center" ref={searchRef}>
              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products"
                  className="bg-white text-black px-4 py-2 rounded-md outline-none w-48 lg:w-[300px] transition-all duration-300"
                  value={query}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
                <IoSearchSharp className="absolute right-3 top-2.5 text-xl text-primary-orange" />
              </div>

              {/* Search Results Popover */}
              {showPopover && (
                <div className="absolute top-full left-0 w-full bg-white border shadow-lg z-50 mt-1 rounded-md max-h-60 overflow-y-auto">
                  {searchedResults.data.length > 0 ? (
                    searchedResults.data.map((product) => (
                      <div
                        className="flex items-center px-2 py-2 hover:bg-primary-orange"
                        key={product.id}
                      >
                        <div className="">
                          <img
                            src={product.images[0]}
                            alt={product.productName}
                            className="w-10 h-10 rounded-full"
                          />
                        </div>
                        <div
                          onClick={() => handleNavigate(product.id)}
                          className="p-3  hover:text-white cursor-pointer border-b last:border-b-0"
                        >
                          {product.productName}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-3 text-center text-gray-500 h-24 flex items-center justify-center">
                      No products found
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Action Icons */}
            <button className="text-primary-orange hover:text-primary-bg px-3 py-2">
              <FaHeart className="text-2xl" />
            </button>
            <Link
              to="/cart"
              className="text-primary-orange hover:text-primary-bg px-3 py-2"
            >
              <IoBagSharp className="text-2xl" />
            </Link>
            <button className="text-primary-orange hover:text-primary-bg px-3 py-2">
              <IoPersonOutline className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-blue pb-3">
          <div className="px-2 pt-2 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <MobileNavLink key={link.to} to={link.to} text={link.text} />
            ))}
            <MobileNavLink to="/service" text="Services" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
