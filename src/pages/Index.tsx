import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swords, Target, Users, Copy, CheckCircle, Instagram, Twitter, Youtube, MessageSquare } from 'lucide-react';
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
  const [basketResult, setBasketResult] = useState<string>('');
  const [isBasketLoading, setIsBasketLoading] = useState<boolean>(false);

  const teamMembers = [
    {
      name: "Manse",
      role: "SERVER OWNER",
      description: "I founded Turtled back in 2020 with the vision of creating the best PVP experience in Minecraft. I manage the server infrastructure and development team to ensure everything runs smoothly!",
      image: "/lovable-uploads/c3e2c66e-9fcc-4433-8e86-63e1d1a45d2e.png",
      avatarImage: "/lovable-uploads/c3e2c66e-9fcc-4433-8e86-63e1d1a45d2e.png",
      color: "bg-purple-600"
    },
    {
      name: "Manere",
      role: "SERVER OWNER",
      description: "I've been with Turtled since the beginning, helping to shape our server into what it is today. I focus on strategic decisions and ensuring our community thrives with new and exciting content!",
      image: "/lovable-uploads/9b3f16eb-c248-4c9b-b031-4a95f443a9ea.png",
      avatarImage: "/lovable-uploads/0cf3a893-5179-4515-9e9b-f76846a0672d.png",
      color: "bg-purple-600"
    },
    {
      name: "Auto",
      role: "SERVER OWNER",
      description: "I help oversee the technical aspects of Turtled, making sure our infrastructure is solid and reliable. I work closely with our development team to implement new features and improvements.",
      image: "/lovable-uploads/9b3f16eb-c248-4c9b-b031-4a95f443a9ea.png",
      avatarImage: "/lovable-uploads/1a88a472-f859-4237-bdac-00adc5406218.png",
      color: "bg-purple-600"
    },
    {
      name: "Daniel",
      role: "DEVELOPER",
      description: "I develop custom plugins and features for Turtled. With extensive experience in Minecraft server development, I create unique gameplay mechanics that make our server stand out from the rest.",
      image: "/lovable-uploads/9b3f16eb-c248-4c9b-b031-4a95f443a9ea.png",
      avatarImage: "/lovable-uploads/dadb5e36-7bbe-4e4e-9616-2cd2a3785348.png",
      color: "bg-blue-600"
    },
    {
      name: "Mini",
      role: "BUILDER",
      description: "I create the beautiful maps and structures you see on Turtled. My focus is on designing immersive environments that enhance gameplay while maintaining our distinctive tropical aesthetic.",
      image: "/lovable-uploads/9b3f16eb-c248-4c9b-b031-4a95f443a9ea.png",
      avatarImage: "/lovable-uploads/0cf3a893-5179-4515-9e9b-f76846a0672d.png",
      color: "bg-green-600"
    },
    {
      name: "Myron",
      role: "BUILDER/MANAGER",
      description: "I split my time between creating stunning builds and helping manage our team of builders. I ensure our server's visual style remains consistent while coordinating projects across the server.",
      image: "/lovable-uploads/9b3f16eb-c248-4c9b-b031-4a95f443a9ea.png",
      avatarImage: "/lovable-uploads/dadb5e36-7bbe-4e4e-9616-2cd2a3785348.png",
      color: "bg-yellow-500"
    }
  ];

  const socialLinks = [
    { name: "Discord", icon: <MessageSquare className="w-8 h-8" />, color: "bg-[#5865F2]" },
    { name: "Instagram", icon: <Instagram className="w-8 h-8" />, color: "bg-[#E1306C]" },
    { name: "YouTube", icon: <Youtube className="w-8 h-8" />, color: "bg-[#FF0000]" },
    { name: "Twitter", icon: <Twitter className="w-8 h-8" />, color: "bg-[#1DA1F2]" }
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
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

  const createBasket = async () => {
    setIsBasketLoading(true);
    setBasketResult('Creating basket...');

    try {
      // For local testing: http://localhost:3001/api/create-basket
      // For production: https://turtled.net/api/create-basket (update after deploying backend)
      const response = await fetch('http://localhost:3001/api/create-basket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) throw new Error('Backend request failed');
      const data = await response.json();

      const checkoutUrl = data.data.links.checkout;
      setBasketResult(`Basket created! <a href="${checkoutUrl}" class="text-turtle-blue underline" target="_blank">Click here to checkout</a>`);
    } catch (error) {
      console.error('Error creating basket:', error);
      setBasketResult('Failed to create basket. Please try again.');
    } finally {
      setIsBasketLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden page-transition">
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
                  <button
                    onClick={handleCopyIP}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg py-3 px-6 text-white hover:bg-white/20 transition-colors"
                    aria-label="Copy server IP"
                  >
                    <span className="arcade-text text-base">eu.turtled.net</span>
                    {copied ? <CheckCircle className="w-5 h-5 text-turtle-blue" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              
              <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/guide" className="btn-primary w-full sm:w-auto clean-text font-bold">
                    <span className="text-white">Get Started</span>
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
        <section className="py-16 px-4 bg-gradient-to-b from-black to-black/90">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="arcade-text text-3xl md:text-4xl mb-4">GAME MODES</h2>
              <p className="text-white max-w-2xl mx-auto clean-text">
                Choose your battleground and prove your skills across multiple challenging arenas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/90 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:transform hover:scale-105 border border-white/10">
                <Swords className="w-12 h-12 mb-4 text-turtle-blue" />
                <h3 className="text-xl font-bold mb-2 arcade-text text-white">Duels</h3>
                <p className="text-blue-300 clean-text">
                  Face off against opponents in 1v1 combat with various kits and arenas
                </p>
              </div>
              
              <div className="bg-black/90 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:transform hover:scale-105 border border-white/10">
                <Users className="w-12 h-12 mb-4 text-turtle-blue" />
                <h3 className="text-xl font-bold mb-2 arcade-text text-white">FFA</h3>
                <p className="text-blue-300 clean-text">
                  Free-for-all mayhem where only the strongest turtle survives
                </p>
              </div>
              
              <div className="bg-black/90 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:transform hover:scale-105 border border-white/10">
                <Target className="w-12 h-12 mb-4 text-turtle-blue" />
                <h3 className="text-xl font-bold mb-2 arcade-text text-white">Sandbox</h3>
                <p className="text-blue-300 clean-text">
                  Practice your skills and experiment with custom builds and strategies
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section ref={statsRef} className="py-16 px-4 bg-gradient-to-b from-black to-black/95">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="arcade-text text-3xl text-white mb-4">SERVER STATS</h2>
              <p className="text-blue-300 max-w-2xl mx-auto clean-text">
                Join our growing community of tropical warriors
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div
                className={`bg-black/80 rounded-xl p-6 shadow-md text-center transition-all duration-500 border border-white/10 ${
                  isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '0ms' }}
              >
                <span className="block text-4xl font-bold text-white mb-2 arcade-text">1000+</span>
                <span className="text-blue-300 clean-text">Unique Daily Players</span>
              </div>
              
              <div
                className={`bg-black/80 rounded-xl p-6 shadow-md text-center transition-all duration-500 border border-white/10 ${
                  isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '150ms' }}
              >
                <span className="block text-4xl font-bold text-white mb-2 arcade-text">50+</span>
                <span className="text-blue-300 clean-text">Custom Maps</span>
              </div>
              
              <div
                className={`bg-black/80 rounded-xl p-6 shadow-md text-center transition-all duration-500 border border-white/10 ${
                  isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <span className="block text-4xl font-bold text-white mb-2 arcade-text">24/7</span>
                <span className="text-blue-300 clean-text">Server Uptime</span>
              </div>
              
              <div
                className={`bg-black/80 rounded-xl p-6 shadow-md text-center transition-all duration-500 border border-white/10 ${
                  isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '450ms' }}
              >
                <span className="block text-4xl font-bold text-white mb-2 arcade-text">10+</span>
                <span className="text-blue-300 clean-text">Events Monthly</span>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-12 px-4 bg-black relative">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <h2 className="arcade-text text-3xl text-turtle-blue mb-4">MEET THE TEAM</h2>
              <p className="text-blue-300 max-w-2xl mx-auto clean-text">
                Learn about the people who make Turtled amazing!
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
        
        {/* Let's Be Social Section */}
        <section className="py-16 px-4 bg-black relative rounded-t-3xl mt-12">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <img
                  alt="Discord logo"
                  className="w-full max-w-md mx-auto rounded-2xl"
                  src="https://cdn.discordapp.com/attachments/1290024968922595368/1346880588061081600/orbit-discord.png?ex=67ca748c&is=67c9230c&hm=a451a6349fb7611c65e0c236ba65f933bde331e611a6d2fd7f6bc4ebcf445fa1&"
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
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-black">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="arcade-text text-3xl text-white mb-6">READY TO DIVE IN?</h2>
            <p className="text-lg text-blue-300 mb-8 max-w-2xl mx-auto clean-text">
              Join the Turtled Server today and experience the most exciting Minecraft PVP gameplay with tropical vibes!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleCopyIP}
                className="btn-primary flex items-center justify-center space-x-2 clean-text font-bold"
              >
                <span>Join Server Now</span>
                {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
              <Link to="/guide" className="btn-secondary clean-text font-bold">
                Learn More
              </Link>
              <button
                onClick={createBasket}
                className="btn-primary flex items-center justify-center space-x-2 clean-text font-bold"
                disabled={isBasketLoading}
              >
                <span>{isBasketLoading ? 'Creating...' : 'Get Ranks'}</span>
              </button>
            </div>
            {basketResult && (
              <p
                className={`mt-4 text-lg clean-text ${
                  basketResult.includes('Failed') ? 'text-red-400' : 'text-turtle-blue'
                }`}
                dangerouslySetInnerHTML={{ __html: basketResult }}
              />
            )}
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;