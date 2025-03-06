import RankCard from '@/components/RankCard';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { CheckCircle, HelpCircle } from 'lucide-react';
import Bubbles from '@/components/Bubbles';
import { useEffect } from 'react';

const Ranks = () => {
  const bubbleFeatures = [
    "Custom name color in chat",
    "Access to /nick command",
    "5 player warps",
    "Priority queue access",
    "Exclusive bubble particle effects"
  ];
  
  const turtleFeatures = [
    "All Bubble rank features",
    "Premium name color in chat",
    "Access to all cosmetic features",
    "10 player warps",
    "VIP queue priority",
    "Exclusive turtle shell cosmetics",
    "Monthly special rewards"
  ];
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const teamMembers = [
    { 
      name: "CaptainTurtle", 
      role: "SERVER OWNER",
      img: "/lovable-uploads/9b3f16eb-c248-4c9b-b031-4a95f443a9ea.png"
    },
    { 
      name: "CodeShell", 
      role: "LEAD DEVELOPER",
      img: "/lovable-uploads/dadb5e36-7bbe-4e4e-9616-2cd2a3785348.png"
    },
    { 
      name: "BubbleGamer", 
      role: "COMMUNITY MANAGER",
      img: "/lovable-uploads/1a88a472-f859-4237-bdac-00adc5406218.png"
    },
    { 
      name: "OceanBreeze", 
      role: "BUILDER", 
      img: "/lovable-uploads/dadb5e36-7bbe-4e4e-9616-2cd2a3785348.png"
    },
    { 
      name: "ShellShock", 
      role: "MODERATOR",
      img: "/lovable-uploads/0cf3a893-5179-4515-9e9b-f76846a0672d.png"
    },
    { 
      name: "TurtleTech", 
      role: "SYSADMIN",
      img: "/lovable-uploads/1a88a472-f859-4237-bdac-00adc5406218.png"
    }
  ];
  
  return (
    <div className="min-h-screen bg-black text-white page-transition">
      <Bubbles count={25} />
      <NavBar />
      
      <PageHeader 
        title="SERVER RANKS" 
        description="Support the server and get awesome perks with our premium ranks"
      />
      
      <section className="py-12 px-4 bg-black bg-opacity-90 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/70 pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <RankCard
              title="BUBBLE RANK"
              icon="/lovable-uploads/1a88a472-f859-4237-bdac-00adc5406218.png"
              price="$4.99"
              features={bubbleFeatures}
              isPremium={false}
              tebexId="9156455" // Example Tebex ID - replace with actual ID
            />
            
            <RankCard
              title="TURTLE RANK"
              icon="/lovable-uploads/0cf3a893-5179-4515-9e9b-f76846a0672d.png"
              price="$9.99"
              features={turtleFeatures}
              isPremium={true}
              tebexId="9156456" // Example Tebex ID - replace with actual ID
            />
          </div>
        </div>
      </section>
      
      <section className="py-12 px-4 bg-black bg-opacity-90 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black/80 pointer-events-none"></div>
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
      </section>
      
      <section className="py-16 px-4 bg-black bg-opacity-90 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black/80 pointer-events-none"></div>
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
      </section>
      
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="arcade-text text-3xl text-white mb-6">READY TO RANK UP?</h2>
          <p className="text-lg text-blue-300 mb-8 max-w-2xl mx-auto clean-text font-medium">
            Join the elite turtle warriors and enjoy exclusive perks on the server!
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-turtle-green-light text-black clean-text font-bold py-3 px-6 rounded-lg
              transition-all duration-300 hover:brightness-110 hover:scale-105
              active:scale-95 focus:outline-none focus:ring-2 focus:ring-turtle-green-light/50">
            Purchase Rank Now
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Ranks;
