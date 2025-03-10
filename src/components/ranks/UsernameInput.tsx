
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface UsernameInputProps {
  onUsernameSet: (username: string) => void;
}

const UsernameInput = ({ onUsernameSet }: UsernameInputProps) => {
  const [username, setUsername] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      toast({
        title: "Username required",
        description: "Please enter your Minecraft username",
        variant: "destructive",
      });
      return;
    }
    
    // Save username to localStorage
    localStorage.setItem('minecraft-username', username);
    onUsernameSet(username);
    setIsOpen(false);
    
    toast({
      title: "Username set!",
      description: `Your purchases will be sent to: ${username}`,
    });
  };

  return (
    <div className="mb-6">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black border border-turtle-blue text-turtle-blue px-4 py-2 rounded-md 
                    hover:bg-gray-900 transition-colors duration-200 clean-text"
        >
          {localStorage.getItem('minecraft-username') 
            ? `Username: ${localStorage.getItem('minecraft-username')}` 
            : "Set Minecraft Username"}
        </button>
      ) : (
        <div className="bg-black border border-gray-800 p-4 rounded-md max-w-md mx-auto">
          <h3 className="text-lg text-white mb-2 arcade-text">Enter Your Username</h3>
          <p className="text-gray-400 text-sm mb-4 clean-text">
            We need your Minecraft username to deliver your purchased ranks.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your Minecraft username"
              className="bg-gray-900 border border-gray-700 text-white p-2 rounded-md 
                        focus:border-turtle-blue focus:outline-none"
            />
            
            <div className="flex space-x-2">
              <button
                type="submit"
                className="bg-turtle-green-light text-black py-2 px-4 rounded-md 
                          hover:brightness-110 transition-all duration-200 clean-text font-bold flex-1"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="bg-gray-800 text-white py-2 px-4 rounded-md 
                          hover:bg-gray-700 transition-colors duration-200 clean-text flex-1"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UsernameInput;
