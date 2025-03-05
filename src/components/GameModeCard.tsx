
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface GameModeCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string;
}

const GameModeCard = ({ title, icon, description, details }: GameModeCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full bg-black/80 rounded-xl shadow-md overflow-hidden card-hover border border-white/10">
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="bg-turtle-blue/20 p-3 rounded-lg">
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-turtle-blue clean-text">{title}</h3>
              <p className="text-blue-300 clean-text">{description}</p>
            </div>
          </div>
          <button
            className="text-turtle-blue hover:text-turtle-blue/80 transition-colors"
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
          >
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6"
        >
          <div className="pt-4 border-t border-gray-800">
            <p className="text-blue-200 leading-relaxed clean-text">{details}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default GameModeCard;
