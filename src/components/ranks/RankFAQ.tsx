
import { HelpCircle } from 'lucide-react';

const RankFAQ = () => {
  return (
    <div className="container mx-auto max-w-4xl relative z-10">
      <div className="text-center mb-12">
        <h2 className="arcade-text text-3xl text-turtle-blue mb-4">FREQUENTLY ASKED QUESTIONS</h2>
        <p className="text-blue-300 max-w-2xl mx-auto clean-text">
          Find answers to common questions about our ranks
        </p>
      </div>
      
      <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-8">
        <div className="space-y-6">
          <div className="pb-6 border-b border-white/10">
            <div className="flex items-start">
              <HelpCircle className="w-6 h-6 text-turtle-blue mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-turtle-blue mb-2 clean-text">How do I purchase a rank?</h3>
                <p className="text-blue-300 clean-text">
                  You can purchase ranks through our website store or by using the /buy command in-game. We accept PayPal, credit cards, and various other payment methods.
                </p>
              </div>
            </div>
          </div>
          
          <div className="py-6 border-b border-white/10">
            <div className="flex items-start">
              <HelpCircle className="w-6 h-6 text-turtle-blue mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-turtle-blue mb-2 clean-text">How long do ranks last?</h3>
                <p className="text-blue-300 clean-text">
                  All ranks are permanent and do not expire. Once purchased, you'll have the rank forever on our server.
                </p>
              </div>
            </div>
          </div>
          
          <div className="py-6 border-b border-white/10">
            <div className="flex items-start">
              <HelpCircle className="w-6 h-6 text-turtle-blue mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-turtle-blue mb-2 clean-text">Can I upgrade my rank later?</h3>
                <p className="text-blue-300 clean-text">
                  Yes! If you purchase the Bubble rank and later want to upgrade to Turtle, you'll only need to pay the difference in price.
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-6">
            <div className="flex items-start">
              <HelpCircle className="w-6 h-6 text-turtle-blue mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-turtle-blue mb-2 clean-text">Do ranks give gameplay advantages?</h3>
                <p className="text-blue-300 clean-text">
                  No, our ranks are designed to be cosmetic and provide quality-of-life features without offering unfair advantages in PVP combat. We maintain a balanced playing field for all players.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankFAQ;
