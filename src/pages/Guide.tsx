import { Swords, Target, Users, Info } from 'lucide-react';
import GameModeCard from '@/components/GameModeCard';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Bubbles from '@/components/Bubbles';

const Guide = () => {
  return (
    <div className="min-h-screen bg-black text-white page-transition">
      <Bubbles count={15} />
      
      <NavBar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-4 relative bg-black">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="arcade-text text-4xl md:text-5xl text-white mb-6">GAME GUIDE</h1>
          <p className="text-lg text-white max-w-2xl mx-auto clean-text">
            Learn how to play each gamemode and master the art of turtle combat
          </p>
        </div>
      </section>
      
      {/* Game Modes Section */}
      <section className="py-12 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <div className="inline-block bg-turtle-blue/20 px-3 py-1 rounded-full mb-2">
              <span className="text-sm font-semibold text-turtle-blue clean-text">Game Modes</span>
            </div>
            <h2 className="text-3xl font-bold text-turtle-blue mb-4 arcade-text">How to Play</h2>
            <p className="text-white max-w-2xl clean-text">
              Our server features multiple exciting game modes. Each offers a unique experience and requires different strategies to master.
            </p>
          </div>
          
          <div className="space-y-6">
            <GameModeCard
              title="Duels"
              icon={<Swords className="w-6 h-6 text-turtle-blue" />}
              description="One-on-one combat with multiple kit options"
              details="In Duels, you'll face off against a single opponent in an arena. Choose from various kits including Classic, OP, Archer, and more. Each kit has unique weapons, armor, and abilities. To win, you must defeat your opponent before they defeat you. Use strategy, skill, and quick reflexes to outplay your opponent. You can challenge specific players or join the queue to be matched with random opponents. Winners earn ranking points and special rewards!"
            />
            
            <GameModeCard
              title="Free For All (FFA)"
              icon={<Users className="w-6 h-6 text-turtle-blue" />}
              description="Battle royale where everyone fights against each other"
              details="FFA is chaos at its finest! Join an arena with multiple players where it's every turtle for themselves. Collect power-ups and weapons scattered throughout the map to gain advantages. The last player standing wins the round. Be cautious of forming temporary alliances as betrayal is common. Different maps offer various terrain advantages and hiding spots. Special events include limited-time power-ups and environmental hazards. Top performers on the leaderboard receive weekly rewards!"
            />
            
            <GameModeCard
              title="Sandbox"
              icon={<Target className="w-6 h-6 text-turtle-blue" />}
              description="Practice your skills and test new strategies"
              details="Sandbox mode is perfect for practicing and honing your skills without the pressure of competition. Experiment with different weapons, armor combinations, and fighting techniques. Use training dummies to practice combos and timing. Invite friends to spar and test strategies together. Access command blocks to customize your experience. The practice arena includes sections for parkour, archery, and PVP mechanics. This is the ideal place to improve before entering competitive modes!"
            />
          </div>
        </div>
      </section>
      
      {/* Tips Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-black to-black/90 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="arcade-text text-3xl mb-4 text-turtle-blue">PRO TIPS</h2>
            <p className="text-white max-w-2xl mx-auto clean-text">
              Master these techniques to dominate the competition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-6">
              <div className="flex items-start mb-4">
                <div className="bg-turtle-blue/30 p-2 rounded-lg mr-4">
                  <Info className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold arcade-text text-turtle-blue">Combat Basics</h3>
              </div>
              <ul className="space-y-3 text-white clean-text">
                <li>• Master the click timing for maximum damage</li>
                <li>• Use strafing (moving side to side) to avoid hits</li>
                <li>• Watch your opponent's patterns to predict their moves</li>
                <li>• Jump during attacks for critical hits</li>
              </ul>
            </div>
            
            <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-6">
              <div className="flex items-start mb-4">
                <div className="bg-turtle-blue/30 p-2 rounded-lg mr-4">
                  <Info className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold arcade-text text-turtle-blue">Advanced Techniques</h3>
              </div>
              <ul className="space-y-3 text-white clean-text">
                <li>• Use "W-tapping" to reset sprint and increase knockback</li>
                <li>• Practice "block-hitting" to reduce damage taken</li>
                <li>• Master projectile timing for long-range fights</li>
                <li>• Use the terrain to your advantage</li>
              </ul>
            </div>
            
            <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-6">
              <div className="flex items-start mb-4">
                <div className="bg-turtle-blue/30 p-2 rounded-lg mr-4">
                  <Info className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold arcade-text text-turtle-blue">Duels Strategy</h3>
              </div>
              <ul className="space-y-3 text-white clean-text">
                <li>• Choose kits that match your playstyle</li>
                <li>• Study your opponent's previous matches</li>
                <li>• Conserve resources for crucial moments</li>
                <li>• Practice combos in Sandbox mode before competing</li>
              </ul>
            </div>
            
            <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-6">
              <div className="flex items-start mb-4">
                <div className="bg-turtle-blue/30 p-2 rounded-lg mr-4">
                  <Info className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold arcade-text text-turtle-blue">FFA Tactics</h3>
              </div>
              <ul className="space-y-3 text-white clean-text">
                <li>• Avoid engaging multiple players at once</li>
                <li>• Target weakened opponents for easy eliminations</li>
                <li>• Know when to retreat and heal</li>
                <li>• Use the chaos to your advantage and third-party fights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Server Rules */}
      <section className="py-12 px-4 bg-gradient-to-b from-black/90 to-black">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="arcade-text text-3xl text-turtle-blue mb-4">SERVER RULES</h2>
            <p className="text-white max-w-2xl mx-auto clean-text">
              Please follow these rules to ensure a fun and fair experience for everyone
            </p>
          </div>
          
          <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-8">
            <div className="space-y-4">
              <div className="pb-4 border-b border-white/10">
                <h3 className="text-xl font-bold text-turtle-blue mb-2 clean-text">1. No Cheating or Hacking</h3>
                <p className="text-white clean-text">
                  Using mods, hacks, or any unauthorized tools to gain an unfair advantage is strictly prohibited.
                </p>
              </div>
              
              <div className="py-4 border-b border-white/10">
                <h3 className="text-xl font-bold text-turtle-blue mb-2 clean-text">2. Respect All Players</h3>
                <p className="text-white clean-text">
                  Treat all players with respect. Harassment, bullying, or excessive toxicity will result in bans.
                </p>
              </div>
              
              <div className="py-4 border-b border-white/10">
                <h3 className="text-xl font-bold text-turtle-blue mb-2 clean-text">3. No Spamming</h3>
                <p className="text-white clean-text">
                  Avoid spamming chat with repeated messages, excessive emotes, or advertisements.
                </p>
              </div>
              
              <div className="py-4">
                <h3 className="text-xl font-bold text-turtle-blue mb-2 clean-text">4. Follow Staff Instructions</h3>
                <p className="text-white clean-text">
                  Server moderators and administrators have the final say. Follow their instructions when given.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Guide;
