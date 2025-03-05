
import { Turtle, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-turtle-green py-8 text-turtle-sand">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Turtle className="w-6 h-6 animate-swim" />
            <span className="arcade-text text-sm">TURTLED</span>
          </div>
          
          <div className="flex items-center space-x-1 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-turtle-lime animate-pulse-glow" fill="#c5ff00" />
            <span>for Minecraft players</span>
          </div>
          
          <div className="mt-4 md:mt-0 text-sm">
            <span>&copy; {new Date().getFullYear()} Turtled Server</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
