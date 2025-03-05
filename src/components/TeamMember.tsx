
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
  color = "bg-turtle-lime" 
}) => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div 
      className={`transition-all duration-300 h-full ${isActive ? 'scale-105' : ''}`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {isActive ? (
        <div className="bg-black/90 rounded-xl p-6 shadow-md h-full flex flex-col">
          <div className="flex items-start mb-4">
            <div className="mr-4 flex-shrink-0">
              <div className="w-16 h-16 relative overflow-hidden rounded-md">
                <img 
                  src={image} 
                  alt={`${name} character`} 
                  className="turtle-pixel w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="arcade-text text-lg mb-1 text-turtle-lime">{name}</h3>
              <div className={`text-xs inline-block px-2 py-1 rounded-full text-black ${color} clean-text font-semibold`}>
                {role}
              </div>
            </div>
          </div>
          <p className="clean-text text-sm text-turtle-sand flex-grow overflow-y-auto max-h-32 md:max-h-none">{description}</p>
        </div>
      ) : (
        <div className="bg-black/80 rounded-xl p-6 shadow-md text-center h-full flex flex-col items-center justify-center">
          <div className="w-14 h-14 mb-3">
            <img 
              src={avatarImage} 
              alt={`${name} avatar`} 
              className="turtle-pixel w-full h-full object-contain"
            />
          </div>
          <h3 className="arcade-text text-base text-turtle-lime mb-1">{name}</h3>
          <div className={`text-xs inline-block px-2 py-1 rounded-full text-black ${color} clean-text font-semibold`}>
            {role}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMember;
