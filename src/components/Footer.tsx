
import { Turtle, Heart, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-turtle-green py-8 text-turtle-sand">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Turtle className="w-6 h-6 animate-swim" />
            <span className="arcade-text text-sm">TURTLED</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-1 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-turtle-lime animate-pulse-glow" fill="#c5ff00" />
              <span>for Minecraft players</span>
            </div>
            
            <a 
              href="https://discord.gg/turtled" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 bg-[#5865F2] hover:bg-[#4752C4] text-white px-4 py-2 rounded-lg transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="arcade-text text-xs">JOIN DISCORD</span>
            </a>
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
