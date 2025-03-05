
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
      className={`relative rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
        isPremium 
          ? 'bg-gradient-to-br from-blue-400 to-blue-600 shadow-xl' 
          : 'bg-gradient-to-br from-gray-900 to-gray-800 shadow-md'
      }`}
    >
      {/* Rank badge */}
      <div className={`absolute top-0 right-0 ${isPremium ? 'bg-blue-300' : 'bg-turtle-blue'} text-black px-4 py-1 text-sm font-bold arcade-text`}>
        {isPremium ? 'PREMIUM' : 'BASIC'}
      </div>
      
      <div className="p-8">
        <div className="flex flex-col items-center text-center mb-6">
          <img 
            src={icon} 
            alt={title} 
            className="w-24 h-24 mb-4 turtle-pixel object-contain" 
          />
          <h3 className={`text-2xl font-bold mb-2 arcade-text ${isPremium ? 'text-white' : 'text-turtle-blue'}`}>{title}</h3>
          <div className={`text-3xl font-bold mb-2 text-white`}>{price}</div>
        </div>
        
        <div className={`space-y-3 mb-6 ${isPremium ? 'text-white' : 'text-gray-300'}`}>
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <ArrowRight className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
              <span className="clean-text">{feature}</span>
            </div>
          ))}
        </div>
        
        <button 
          className={`w-full py-3 rounded-lg font-bold transition-all duration-300 clean-text
          ${isPremium 
            ? 'bg-white text-blue-600 hover:bg-blue-100' 
            : 'bg-turtle-blue text-black hover:brightness-110'
          }`}
        >
          Get Rank
        </button>
      </div>
    </div>
  );
};

export default RankCard;
