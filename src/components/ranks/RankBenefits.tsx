
import { CheckCircle } from 'lucide-react';

const RankBenefits = () => {
  return (
    <div className="container mx-auto max-w-4xl relative z-10">
      <div className="text-center mb-12">
        <h2 className="arcade-text text-3xl text-turtle-blue mb-4">RANK BENEFITS</h2>
        <p className="text-blue-300 max-w-2xl mx-auto clean-text">
          Enhance your server experience with these exclusive features
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
          <div className="w-16 h-16 bg-turtle-blue/30 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-turtle-blue" />
          </div>
          <h3 className="text-xl font-bold mb-2 arcade-text">Cosmetics</h3>
          <p className="text-blue-300 clean-text">
            Stand out with exclusive particle effects, name colors, and custom cosmetics
          </p>
        </div>
        
        <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
          <div className="w-16 h-16 bg-turtle-blue/30 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-turtle-blue" />
          </div>
          <h3 className="text-xl font-bold mb-2 arcade-text">Priority Access</h3>
          <p className="text-blue-300 clean-text">
            Skip the queue and get instant access to the server even when it's full
          </p>
        </div>
        
        <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
          <div className="w-16 h-16 bg-turtle-blue/30 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-turtle-blue" />
          </div>
          <h3 className="text-xl font-bold mb-2 arcade-text">Special Commands</h3>
          <p className="text-blue-300 clean-text">
            Use exclusive commands like /nick and player warps for enhanced gameplay
          </p>
        </div>
      </div>
    </div>
  );
};

export default RankBenefits;
