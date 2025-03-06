
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Bubbles from '@/components/Bubbles';
import { useEffect, useState } from 'react';

// Import refactored components
import RanksList from '@/components/ranks/RanksList';
import RankBenefits from '@/components/ranks/RankBenefits';
import RankFAQ from '@/components/ranks/RankFAQ';
import RankCTA from '@/components/ranks/RankCTA';
import UsernameInput from '@/components/ranks/UsernameInput';

const Ranks = () => {
  const [username, setUsername] = useState<string | null>(null);
  
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
    // Check for saved username
    const savedUsername = localStorage.getItem('minecraft-username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white page-transition">
      <Bubbles count={25} />
      <NavBar />
      
      <PageHeader 
        title="SERVER RANKS" 
        description="Support the server and get awesome perks with our premium ranks"
      />
      
      <section className="py-8 px-4 bg-black bg-opacity-90 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/70 pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center">
          {/* Username input component */}
          <UsernameInput onUsernameSet={(newUsername) => setUsername(newUsername)} />
          
          <RanksList 
            bubbleFeatures={bubbleFeatures}
            turtleFeatures={turtleFeatures}
          />
        </div>
      </section>
      
      <section className="py-12 px-4 bg-black bg-opacity-90 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black/80 pointer-events-none"></div>
        <RankBenefits />
      </section>
      
      <section className="py-16 px-4 bg-black bg-opacity-90 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black/80 pointer-events-none"></div>
        <RankFAQ />
      </section>
      
      <section className="py-16 px-4 bg-black">
        <RankCTA onScrollToTop={scrollToTop} />
      </section>
      
      <Footer />
    </div>
  );
};

export default Ranks;
