
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Turtle, Home, BookOpen, Trophy, Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and title */}
        <Link to="/" className="flex items-center space-x-2 group">
          <Turtle className="text-turtle-green w-8 h-8 group-hover:animate-swim" />
          <span className="arcade-text text-lg text-turtle-green">TURTLE PVP</span>
        </Link>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            <span className="flex items-center">
              <Home className="w-4 h-4 mr-1" /> Home
            </span>
          </Link>
          <Link 
            to="/guide" 
            className={`nav-link ${isActive('/guide') ? 'active' : ''}`}
          >
            <span className="flex items-center">
              <BookOpen className="w-4 h-4 mr-1" /> Guide
            </span>
          </Link>
          <Link 
            to="/ranks" 
            className={`nav-link ${isActive('/ranks') ? 'active' : ''}`}
          >
            <span className="flex items-center">
              <Trophy className="w-4 h-4 mr-1" /> Ranks
            </span>
          </Link>
        </div>
        
        {/* Mobile menu toggle */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-turtle-green hover:text-turtle-lime transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg animate-fade-in">
          <div className="container mx-auto p-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`nav-link text-center ${isActive('/') ? 'active' : ''}`}
            >
              <span className="flex items-center justify-center">
                <Home className="w-4 h-4 mr-2" /> Home
              </span>
            </Link>
            <Link 
              to="/guide" 
              className={`nav-link text-center ${isActive('/guide') ? 'active' : ''}`}
            >
              <span className="flex items-center justify-center">
                <BookOpen className="w-4 h-4 mr-2" /> Guide
              </span>
            </Link>
            <Link 
              to="/ranks" 
              className={`nav-link text-center ${isActive('/ranks') ? 'active' : ''}`}
            >
              <span className="flex items-center justify-center">
                <Trophy className="w-4 h-4 mr-2" /> Ranks
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
