
import React, { useState } from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image: string;
  avatarImage: string;
  color?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  role, 
  description, 
  image, 
  avatarImage,
  color = "bg-turtle-blue" 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="h-full">
      <div 
        className="bg-black/90 rounded-xl p-6 shadow-md h-full transition-all duration-300 hover:scale-105 border-0"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-col h-full">
          {/* Header with avatar and name */}
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 relative overflow-hidden rounded-md mr-4">
              <img 
                src={image} 
                alt={`${name} character`} 
                className="turtle-pixel w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="arcade-text text-lg mb-1 text-turtle-blue">{name}</h3>
              <div className={`text-xs inline-block px-2 py-1 rounded-full text-black ${color} clean-text font-semibold`}>
                {role}
              </div>
            </div>
          </div>
          
          {/* Description - collapsible on mobile, always visible on desktop */}
          <div className={`clean-text text-sm text-turtle-sand overflow-y-auto pr-1 custom-scrollbar 
            ${isExpanded ? 'max-h-40' : 'max-h-0 md:max-h-40'} 
            transition-all duration-300 ease-in-out`}>
            {description}
          </div>
          
          {/* Mobile expand button */}
          <div className="mt-2 text-center md:hidden">
            <button 
              className="text-xs text-turtle-blue clean-text"
              aria-label={isExpanded ? "Show less" : "Show more"}
            >
              {isExpanded ? "↑ Show less" : "↓ Show more"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
