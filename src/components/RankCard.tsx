
import { ArrowRight } from 'lucide-react';

interface RankCardProps {
  title: string;
  icon: string;
  price: string;
  features: string[];
  isPremium?: boolean;
}

const RankCard = ({ title, icon, price, features, isPremium = false }: RankCardProps) => {
  return (
    <div 
      className={`relative rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-105 ${
        isPremium 
          ? 'bg-gradient-to-br from-turtle-lime/80 to-turtle-green/80 shadow-xl' 
          : 'bg-white shadow-md'
      }`}
    >
      {/* Rank badge */}
      <div className={`absolute top-0 right-0 ${isPremium ? 'bg-turtle-lime' : 'bg-turtle-sand'} text-turtle-green px-4 py-1 text-sm font-bold arcade-text`}>
        {isPremium ? 'PREMIUM' : 'BASIC'}
      </div>
      
      <div className="p-8">
        <div className="flex flex-col items-center text-center mb-6">
          <img 
            src={icon} 
            alt={title} 
            className="w-24 h-24 mb-4 turtle-pixel object-contain animate-pulse-glow" 
          />
          <h3 className={`text-2xl font-bold mb-2 arcade-text ${isPremium ? 'text-turtle-sand' : 'text-turtle-green'}`}>{title}</h3>
          <div className={`text-3xl font-bold mb-2 ${isPremium ? 'text-white' : 'text-turtle-lime'}`}>{price}</div>
        </div>
        
        <div className={`space-y-3 mb-6 ${isPremium ? 'text-white' : 'text-gray-700'}`}>
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <ArrowRight className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <button 
          className={`w-full py-3 rounded-lg font-bold transition-all duration-300 
          ${isPremium 
            ? 'bg-white text-turtle-green hover:bg-turtle-sand' 
            : 'bg-turtle-lime text-turtle-green hover:brightness-110'
          }`}
        >
          Get Rank
        </button>
      </div>
    </div>
  );
};

export default RankCard;
