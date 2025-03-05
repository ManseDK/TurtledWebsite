import RankCard from '@/components/RankCard';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { CheckCircle, HelpCircle, MessageSquare, Instagram, Twitter, Youtube } from 'lucide-react';
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
  
  const socialLinks = [
    {
      name: "Discord",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "bg-[#5865F2]"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-8 h-8" />,
      color: "bg-[#E1306C]"
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-8 h-8" />,
      color: "bg-[#FF0000]"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-8 h-8" />,
      color: "bg-[#1DA1F2]"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white page-transition">
      <Bubbles count={25} />
      <NavBar />
      
      <PageHeader 
        title="SERVER RANKS" 
        description="Support the server and get awesome perks with our premium ranks"
        glowColor="white"
      />
      
      {/* Ranks Section */}
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
            />
            
            <RankCard
              title="TURTLE RANK"
              icon="/lovable-uploads/0cf3a893-5179-4515-9e9b-f76846a0672d.png"
              price="$9.99"
              features={turtleFeatures}
              isPremium={true}
            />
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-12 px-4 bg-black bg-opacity-90 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black/80 pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="arcade-text text-3xl mb-4 text-turtle-blue">RANK BENEFITS</h2>
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
      
      {/* FAQ Section */}
      <section className="py-12 px-4 bg-black bg-opacity-90 relative">
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
      
      {/* Let's Be Social Section */}
      <section className="py-16 px-4 bg-black relative rounded-t-3xl mt-12">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/d16d93fc-5c37-43d1-abc3-505c6ec3e471.png" 
                alt="Discord mascot" 
                className="w-full max-w-md turtle-pixel mx-auto" 
              />
            </div>
            <div className="md:w-1/2 text-left">
              <h2 className="arcade-text text-3xl text-white mb-4">Let's Be Social!</h2>
              <p className="text-blue-300 clean-text mb-6">
                Here on Turtled we think communication is the key to an amazing community. Because of that, we heavily value our Discord and the way it allows us to connect with our favourite people ever - you! Come join us, and let's create our server - together!
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className={`${link.color} hover:opacity-90 p-4 rounded-lg flex items-center justify-center transition-transform hover:scale-105`}
                  >
                    <div className="flex flex-col items-center">
                      {link.icon}
                      <span className="mt-2 font-bold clean-text text-white">{link.name}</span>
                    </div>
                  </a>
                ))}
              </div>
              
              <a 
                href="https://discord.gg/turtled" 
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-block bg-[#5865F2] hover:bg-[#4752c4] text-white py-3 px-10 rounded-lg font-bold transition-all duration-300 clean-text"
              >
                JOIN OUR DISCORD
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="arcade-text text-3xl text-[#D6FF42] mb-6 shadow-glow-lime">READY TO RANK UP?</h2>
          <p className="text-lg text-blue-300 mb-8 max-w-2xl mx-auto clean-text font-medium">
            Join the elite turtle warriors and enjoy exclusive perks on the server!
          </p>
          <button className="bg-turtle-blue text-black clean-text font-bold py-3 px-6 rounded-lg
            transition-all duration-300 hover:brightness-110 hover:scale-105
            active:scale-95 focus:outline-none focus:ring-2 focus:ring-turtle-blue/50">
            Purchase Rank Now
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Ranks;
