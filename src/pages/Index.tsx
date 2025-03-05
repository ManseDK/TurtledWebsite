
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Swords, Target, Users, Copy, CheckCircle } from 'lucide-react';
import TurtleAnimation from '@/components/TurtleAnimation';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import VideoBackground from '@/components/VideoBackground';
import TeamMember from '@/components/TeamMember';
import Bubbles from '@/components/Bubbles';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTeamMember, setActiveTeamMember] = useState(0);
  
  const teamMembers = [
    {
      name: "TurtleKing",
      role: "SERVER OWNER",
      description: "I founded Turtled back in 2020 with the vision of creating the best PVP experience in Minecraft. I manage the server infrastructure and development team to ensure everything runs smoothly!",
      image: "/lovable-uploads/9b3f16eb-c248-4c9b-b031-4a95f443a9ea.png",
      avatarImage: "/lovable-uploads/0cf3a893-5179-4515-9e9b-f76846a0672d.png",
      color: "bg-purple-600"
    },
    {
      name: "ShellMaster",
      role: "LEAD DEVELOPER",
      description: "I've been coding plugins for Minecraft servers for over 5 years. At Turtled, I create custom game modes and ensure all our systems work perfectly together. I love building new features for our players!",
      image: "/lovable-uploads/9b3f16eb-c248-4c9b-b031-4a95f443a9ea.png",
      avatarImage: "/lovable-uploads/0cf3a893-5179-4515-9e9b-f76846a0672d.png",
      color: "bg-blue-600"
    },
    {
      name: "BubbleMaster",
      role: "COMMUNITY MANAGER",
      description: "I'm responsible for making sure everyone has a great time on our server! I organize events, manage our Discord, and work with our staff team to maintain a friendly community where everyone feels welcome.",
      image: "/lovable-uploads/9b3f16eb-c248-4c9b-b031-4a95f443a9ea.png",
      avatarImage: "/lovable-uploads/1a88a472-f859-4237-bdac-00adc5406218.png",
      color: "bg-red-500"
    },
    {
      name: "PixelTurtle",
      role: "MAP DESIGNER",
      description: "I design all the beautiful maps you play on! From tropical islands to ancient ruins, I love creating immersive environments for epic battles. Each map is carefully designed for balanced and exciting gameplay.",
      image: "/lovable-uploads/9b3f16eb-c248-4c9b-b031-4a95f443a9ea.png",
      avatarImage: "/lovable-uploads/dadb5e36-7bbe-4e4e-9616-2cd2a3785348.png",
      color: "bg-green-600"
    }
  ];

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsStatsVisible(true);
      }
    }, {
      threshold: 0.3
    });
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const handleCopyIP = () => {
    navigator.clipboard.writeText('eu.turtled.net').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return <div className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <VideoBackground videoId="RnnctM5Rf9I" />
      
      {/* Bubbles */}
      <Bubbles count={25} />
      
      <div className="relative z-10">
        <NavBar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 min-h-screen flex flex-col justify-center relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
                <h1 className="arcade-text text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight">
                  WELCOME TO <span className="text-turtle-blue">TURTLED</span>
                </h1>
                <p className="text-lg md:text-xl text-turtle-sand mb-8 clean-text">
                  Join the ultimate Minecraft PVP server with tropical vibes, competitive gamemodes, and an awesome community
                </p>
                
                {/* Server IP Copy Button */}
                <div className="flex justify-center mb-8">
                  <button onClick={handleCopyIP} className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg py-3 px-6 text-white hover:bg-white/20 transition-colors" aria-label="Copy server IP">
                    <span className="arcade-text text-base">eu.turtled.net</span>
                    {copied ? <CheckCircle className="w-5 h-5 text-turtle-blue" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              
              <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/guide" className="btn-primary w-full sm:w-auto clean-text font-bold">
                    Get Started
                  </Link>
                  <Link to="/ranks" className="btn-secondary w-full sm:w-auto clean-text font-bold">
                    View Ranks
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4 bg-black text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="arcade-text text-3xl md:text-4xl mb-4">GAME MODES</h2>
              <p className="text-turtle-sand max-w-2xl mx-auto clean-text">
                Choose your battleground and prove your skills across multiple challenging arenas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/90 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:transform hover:scale-105 border border-white/10">
                <Swords className="w-12 h-12 mb-4 text-turtle-blue" />
                <h3 className="text-xl font-bold mb-2 arcade-text">Duels</h3>
                <p className="text-blue-300 clean-text">
                  Face off against opponents in 1v1 combat with various kits and arenas
                </p>
              </div>
              
              <div className="bg-black/90 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:transform hover:scale-105 border border-white/10">
                <Users className="w-12 h-12 mb-4 text-turtle-blue" />
                <h3 className="text-xl font-bold mb-2 arcade-text">FFA</h3>
                <p className="text-blue-300 clean-text">
                  Free-for-all mayhem where only the strongest turtle survives
                </p>
              </div>
              
              <div className="bg-black/90 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:transform hover:scale-105 border border-white/10">
                <Target className="w-12 h-12 mb-4 text-turtle-blue" />
                <h3 className="text-xl font-bold mb-2 arcade-text">Sandbox</h3>
                <p className="text-blue-300 clean-text">
                  Practice your skills and experiment with custom builds and strategies
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section ref={statsRef} className="py-16 px-4 bg-black">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="arcade-text text-3xl text-turtle-blue mb-4">SERVER STATS</h2>
              <p className="text-blue-300 max-w-2xl mx-auto clean-text">
                Join our growing community of tropical warriors
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className={`bg-black/80 rounded-xl p-6 shadow-md text-center transition-all duration-500 border border-white/10 ${isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
              transitionDelay: '0ms'
            }}>
                <span className="block text-4xl font-bold text-turtle-blue mb-2 arcade-text">1000+</span>
                <span className="text-blue-300 clean-text">Active Players</span>
              </div>
              
              <div className={`bg-black/80 rounded-xl p-6 shadow-md text-center transition-all duration-500 border border-white/10 ${isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
              transitionDelay: '150ms'
            }}>
                <span className="block text-4xl font-bold text-turtle-blue mb-2 arcade-text">50+</span>
                <span className="text-blue-300 clean-text">Custom Maps</span>
              </div>
              
              <div className={`bg-black/80 rounded-xl p-6 shadow-md text-center transition-all duration-500 border border-white/10 ${isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
              transitionDelay: '300ms'
            }}>
                <span className="block text-4xl font-bold text-turtle-blue mb-2 arcade-text">24/7</span>
                <span className="text-blue-300 clean-text">Server Uptime</span>
              </div>
              
              <div className={`bg-black/80 rounded-xl p-6 shadow-md text-center transition-all duration-500 border border-white/10 ${isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
              transitionDelay: '450ms'
            }}>
                <span className="block text-4xl font-bold text-turtle-blue mb-2 arcade-text">10+</span>
                <span className="text-blue-300 clean-text">Events Monthly</span>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-16 px-4 bg-[#E8E0CC] rounded-t-3xl">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="arcade-text text-3xl text-black mb-4">MEET THE TEAM</h2>
              <p className="text-gray-700 max-w-2xl mx-auto clean-text">
                Learn about the people who make Turtled amazing!
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  image={member.image}
                  avatarImage={member.avatarImage}
                  color={member.color}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-black">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="arcade-text text-3xl text-yellow-400 mb-6">READY TO DIVE IN?</h2>
            <p className="text-lg text-blue-300 mb-8 max-w-2xl mx-auto clean-text">
              Join the Turtled Server today and experience the most exciting Minecraft PVP gameplay with tropical vibes!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={handleCopyIP} className="btn-primary flex items-center justify-center space-x-2 clean-text font-bold">
                <span>Join Server Now</span>
                {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
              <Link to="/guide" className="btn-secondary clean-text font-bold">
                Learn More
              </Link>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>;
};
export default Index;
