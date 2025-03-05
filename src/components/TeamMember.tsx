
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
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div 
      className="h-full"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="h-full">
        <div className={`transition-all duration-300 ease-in-out h-full ${isActive ? 'scale-105' : ''}`}>
          <div className="bg-black/90 rounded-xl p-6 shadow-md h-full flex flex-col overflow-hidden border-0">
            <div className="relative h-full flex flex-col">
              {/* Default view (avatar) */}
              <div 
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-300 ease-in-out ${
                  isActive ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <div className="w-14 h-14 mb-3">
                  <img 
                    src={avatarImage} 
                    alt={`${name} avatar`} 
                    className="turtle-pixel w-full h-full object-contain"
                  />
                </div>
                <h3 className="arcade-text text-base text-turtle-blue mb-1">{name}</h3>
                <div className={`text-xs inline-block px-2 py-1 rounded-full text-black ${color} clean-text font-semibold`}>
                  {role}
                </div>
              </div>
              
              {/* Expanded view (details) */}
              <div 
                className={`absolute inset-0 h-full flex flex-col transition-opacity duration-300 ease-in-out ${
                  isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
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
                    <h3 className="arcade-text text-lg mb-1 text-turtle-blue">{name}</h3>
                    <div className={`text-xs inline-block px-2 py-1 rounded-full text-black ${color} clean-text font-semibold`}>
                      {role}
                    </div>
                  </div>
                </div>
                <p className="clean-text text-sm text-turtle-sand flex-grow overflow-y-auto pr-1 max-h-40 custom-scrollbar">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
