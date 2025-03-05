
import React from 'react';

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
  return (
    <div className="h-full">
      <div 
        className="bg-black/80 rounded-xl p-4 shadow-md h-full transition-all duration-300 hover:scale-105 border border-white/10"
      >
        <div className="flex flex-col h-full">
          {/* Header with avatar and name */}
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 relative overflow-hidden rounded-md mr-3">
              <img 
                src={image} 
                alt={`${name} character`} 
                className="turtle-pixel w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="arcade-text text-base mb-1 text-turtle-blue">{name}</h3>
              <div className={`text-xs inline-block px-2 py-1 rounded-full text-black ${color} clean-text font-semibold`}>
                {role}
              </div>
            </div>
          </div>
          
          {/* Description - always visible with a smooth transition */}
          <div className="clean-text text-xs text-turtle-sand overflow-y-auto pr-1 custom-scrollbar max-h-32 transition-all duration-300 ease-in-out">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
