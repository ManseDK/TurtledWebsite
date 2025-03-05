
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Swords, Target, Users, Copy, CheckCircle } from 'lucide-react';
import TurtleAnimation from '@/components/TurtleAnimation';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import VideoBackground from '@/components/VideoBackground';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsStatsVisible(true);
      }
    }, { threshold: 0.3 });

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

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <VideoBackground videoId="RnnctM5Rf9I" />
      
      <div className="relative z-10">
        <NavBar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 min-h-screen flex flex-col justify-center relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
                <h1 className="arcade-text text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight">
                  WELCOME TO <span className="text-turtle-lime">TURTLED</span>
                </h1>
                <p className="text-lg md:text-xl text-turtle-sand mb-8">
                  Join the ultimate Minecraft PVP server with tropical vibes, competitive gamemodes, and an awesome community
                </p>
                
                {/* Server IP Copy Button */}
                <div className="flex justify-center mb-8">
                  <button 
                    onClick={handleCopyIP}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg py-3 px-6 text-white hover:bg-white/20 transition-colors"
                    aria-label="Copy server IP"
                  >
                    <span className="arcade-text">eu.turtled.net</span>
                    {copied ? (
                      <CheckCircle className="w-5 h-5 text-turtle-lime" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
              
              <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/guide" className="btn-primary w-full sm:w-auto">
                    Get Started
                  </Link>
                  <Link to="/ranks" className="btn-secondary w-full sm:w-auto">
                    View Ranks
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Turtles - all hidden */}
          <TurtleAnimation size="sm" hidden={true} />
          <TurtleAnimation size="md" hidden={true} />
          <TurtleAnimation size="sm" hidden={true} />
          
          {/* Pixel art box - hidden */}
          <div className="hidden">
            <img 
              src="/lovable-uploads/0cf3a893-5179-4515-9e9b-f76846a0672d.png" 
              alt="Turtle Box" 
              className="w-40 h-40 object-contain turtle-pixel animate-float"
            />
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4 bg-turtle-green text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="arcade-text text-3xl md:text-4xl mb-4">GAME MODES</h2>
              <p className="text-turtle-sand max-w-2xl mx-auto">
                Choose your battleground and prove your skills across multiple challenging arenas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:transform hover:scale-105">
                <Swords className="w-12 h-12 mb-4 text-turtle-lime" />
                <h3 className="text-xl font-bold mb-2">Duels</h3>
                <p className="text-turtle-sand">
                  Face off against opponents in 1v1 combat with various kits and arenas
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:transform hover:scale-105">
                <Users className="w-12 h-12 mb-4 text-turtle-lime" />
                <h3 className="text-xl font-bold mb-2">FFA</h3>
                <p className="text-turtle-sand">
                  Free-for-all mayhem where only the strongest turtle survives
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:transform hover:scale-105">
                <Target className="w-12 h-12 mb-4 text-turtle-lime" />
                <h3 className="text-xl font-bold mb-2">Sandbox</h3>
                <p className="text-turtle-sand">
                  Practice your skills and experiment with custom builds and strategies
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section 
          ref={statsRef}
          className="py-16 px-4 bg-white/90"
        >
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="arcade-text text-3xl text-turtle-green mb-4">SERVER STATS</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join our growing community of tropical warriors
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className={`bg-white rounded-xl p-6 shadow-md text-center transition-all duration-500 ${isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0ms' }}>
                <span className="block text-4xl font-bold text-turtle-lime mb-2">1000+</span>
                <span className="text-turtle-green">Active Players</span>
              </div>
              
              <div className={`bg-white rounded-xl p-6 shadow-md text-center transition-all duration-500 ${isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '150ms' }}>
                <span className="block text-4xl font-bold text-turtle-lime mb-2">50+</span>
                <span className="text-turtle-green">Custom Maps</span>
              </div>
              
              <div className={`bg-white rounded-xl p-6 shadow-md text-center transition-all duration-500 ${isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
                <span className="block text-4xl font-bold text-turtle-lime mb-2">24/7</span>
                <span className="text-turtle-green">Server Uptime</span>
              </div>
              
              <div className={`bg-white rounded-xl p-6 shadow-md text-center transition-all duration-500 ${isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '450ms' }}>
                <span className="block text-4xl font-bold text-turtle-lime mb-2">10+</span>
                <span className="text-turtle-green">Events Monthly</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-turtle-lime/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="arcade-text text-3xl text-turtle-green mb-6">READY TO DIVE IN?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Join the Turtled Server today and experience the most exciting Minecraft PVP gameplay with tropical vibes!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={handleCopyIP} 
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>Join Server Now</span>
                {copied ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
              <Link to="/guide" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
