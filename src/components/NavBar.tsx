
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Turtle, Home, BookOpen, Trophy, Menu, X, MessageSquare } from 'lucide-react';

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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-sm py-2' : 'bg-black/80 py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and title */}
        <Link to="/" className="flex items-center space-x-2 group relative">
          <div className="relative w-8 h-8 flex items-center justify-center overflow-visible">
            <Turtle className="text-turtle-lime w-8 h-8 absolute" />
          </div>
          <span className="arcade-text text-lg text-turtle-lime animate-pulse-glow">TURTLED</span>
        </Link>
        
        {/* Navigation Links - Center Aligned */}
        <div className="hidden md:flex items-center space-x-2">
          <Link 
            to="/" 
            className={`rounded-md px-6 py-2 clean-text font-bold transition-colors ${
              isActive('/') 
                ? 'bg-turtle-lime text-black shadow-glow-lime' 
                : 'text-turtle-sand hover:bg-turtle-lime/80 hover:text-black'
            }`}
          >
            HOME
          </Link>
          
          <Link 
            to="/guide" 
            className={`rounded-md px-6 py-2 clean-text font-bold transition-colors ${
              isActive('/guide') 
                ? 'bg-turtle-lime text-black shadow-glow-lime' 
                : 'text-turtle-sand hover:bg-turtle-lime/80 hover:text-black'
            }`}
          >
            GUIDE
          </Link>
          
          <Link 
            to="/ranks" 
            className={`rounded-md px-6 py-2 clean-text font-bold transition-colors ${
              isActive('/ranks') 
                ? 'bg-turtle-lime text-black shadow-glow-lime' 
                : 'text-turtle-sand hover:bg-turtle-lime/80 hover:text-black'
            }`}
          >
            RANKS
          </Link>
        </div>
        
        {/* Right side - Discord button and IP */}
        <div className="hidden md:flex items-center space-x-3">
          <a 
            href="https://discord.gg/turtled" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#5865F2] text-white p-2 rounded-md transition-all hover:bg-[#4752c4]"
            aria-label="Join our Discord"
          >
            <MessageSquare className="w-6 h-6" />
          </a>
          
          <div className="bg-turtle-lime text-black clean-text font-bold px-4 py-2 rounded-md flex items-center shadow-glow-lime">
            EU.TURTLED.NET
          </div>
        </div>
        
        {/* Mobile menu toggle */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-turtle-sand hover:text-turtle-lime transition-colors"
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
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 shadow-lg rounded-b-lg animate-fade-in">
          <div className="container mx-auto p-4 flex flex-col space-y-3">
            <Link 
              to="/" 
              className={`px-4 py-2 clean-text font-bold rounded-md ${
                isActive('/') ? 'bg-turtle-lime text-black shadow-glow-lime' : 'text-turtle-sand'
              }`}
            >
              HOME
            </Link>
            
            <Link 
              to="/guide" 
              className={`px-4 py-2 clean-text font-bold rounded-md ${
                isActive('/guide') ? 'bg-turtle-lime text-black shadow-glow-lime' : 'text-turtle-sand'
              }`}
            >
              GUIDE
            </Link>
            
            <Link 
              to="/ranks" 
              className={`px-4 py-2 clean-text font-bold rounded-md ${
                isActive('/ranks') ? 'bg-turtle-lime text-black shadow-glow-lime' : 'text-turtle-sand'
              }`}
            >
              RANKS
            </Link>
            
            <div className="flex flex-col space-y-3 pt-2 border-t border-white/10">
              <a 
                href="https://discord.gg/Z7gbhxmB" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#5865F2] hover:bg-[#4752c4] text-white px-4 py-2 rounded-md"
              >
                <span className="flex items-center justify-center clean-text font-bold">
                  <MessageSquare className="w-4 h-4 mr-2" /> JOIN DISCORD
                </span>
              </a>
              
              <div className="bg-turtle-lime text-black px-4 py-2 rounded-md clean-text font-bold text-center shadow-glow-lime">
                EU.TURTLED.NET
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
