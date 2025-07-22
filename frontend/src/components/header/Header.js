import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash, faBars, faTimes, faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-yellow-400/20 shadow-2xl shadow-yellow-400/10'
          : 'bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm border-b border-gray-800/30'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Enhanced Brand Logo */}
            <NavLink to="/" className="flex items-center space-x-3 group relative overflow-hidden">
              <div className="relative">
                <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-3 rounded-xl shadow-md group-hover:scale-105 transition-all duration-300">
                  <FontAwesomeIcon icon={faVideoSlash} className="text-black text-lg" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl md:text-2xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:to-yellow-700 transition-all duration-300">
                  Gold
                </span>
                <span className="text-xs text-gray-400 font-medium -mt-1 group-hover:text-yellow-400 transition-colors duration-300">
                  STREAM
                </span>
              </div>
            </NavLink>


            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `relative text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium py-2 px-4 group ${isActive ? 'text-yellow-400' : ''
                  }`
                }
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-300"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></span>
              </NavLink>
              <NavLink
                to="/watchList"
                className={({ isActive }) =>
                  `relative text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium py-2 px-4 group ${isActive ? 'text-yellow-400' : ''
                  }`
                }
              >
                Watch List
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-300"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></span>
              </NavLink>
            </nav>

            {/* Desktop User Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-yellow-400 transition-colors duration-300 group">
                <FontAwesomeIcon icon={faBell} className="text-lg" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span className="absolute inset-0 bg-yellow-400/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </button>

              {/* Profile */}
              <button className="relative p-2 text-gray-400 hover:text-yellow-400 transition-colors duration-300 group">
                <FontAwesomeIcon icon={faUser} className="text-lg" />
                <span className="absolute inset-0 bg-yellow-400/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </button>

              {/* Auth Buttons */}
              <button className="relative px-6 py-2.5 border border-yellow-400/50 text-yellow-400 rounded-xl hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300 font-medium group overflow-hidden">
                <span className="relative z-10">Login</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
              <button className="relative px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-xl hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 font-medium transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-yellow-400/30 group overflow-hidden">
                <span className="relative z-10">Register</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="md:hidden relative p-3 rounded-xl text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 group"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="relative">
                <FontAwesomeIcon
                  icon={isMenuOpen ? faTimes : faBars}
                  className={`text-xl transition-all duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}
                />
              </div>
              <span className="absolute inset-0 bg-yellow-400/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>
          </div>

          {/* Enhanced Mobile Navigation Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen pb-6 opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <div className="pt-6 space-y-4 border-t border-gray-800/50">
              {/* Mobile Navigation Links */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-3 px-4 text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium rounded-xl hover:bg-yellow-400/5 ${isActive ? 'text-yellow-400 bg-yellow-400/10 border-l-4 border-yellow-400' : ''
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center space-x-3">
                  <span>🏠</span>
                  <span>Home</span>
                </span>
              </NavLink>
              <NavLink
                to="/watchList"
                className={({ isActive }) =>
                  `block py-3 px-4 text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium rounded-xl hover:bg-yellow-400/5 ${isActive ? 'text-yellow-400 bg-yellow-400/10 border-l-4 border-yellow-400' : ''
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center space-x-3">
                  <span>📋</span>
                  <span>Watch List</span>
                </span>
              </NavLink>

              {/* Mobile User Actions */}
              <div className="pt-4 px-4 border-t border-gray-800/50">
                <div className="flex items-center justify-between mb-4">
                  <button className="flex items-center space-x-3 text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                    <FontAwesomeIcon icon={faBell} />
                    <span>Notifications</span>
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>
                  <button className="flex items-center space-x-3 text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                    <FontAwesomeIcon icon={faUser} />
                    <span>Profile</span>
                  </button>
                </div>

                <div className="space-y-3">
                  <button className="w-full py-3 border border-yellow-400/50 text-yellow-400 rounded-xl hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300 font-medium">
                    Login
                  </button>
                  <button className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-xl hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 font-medium shadow-lg">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Header;

