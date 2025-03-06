
interface RankCTAProps {
  onScrollToTop: () => void;
}

const RankCTA = ({ onScrollToTop }: RankCTAProps) => {
  return (
    <div className="container mx-auto max-w-4xl text-center">
      <h2 className="arcade-text text-3xl text-white mb-6">READY TO RANK UP?</h2>
      <p className="text-lg text-blue-300 mb-8 max-w-2xl mx-auto clean-text font-medium">
        Join the elite turtle warriors and enjoy exclusive perks on the server!
      </p>
      <button 
        onClick={onScrollToTop}
        className="bg-turtle-green-light text-black clean-text font-bold py-3 px-6 rounded-lg
          transition-all duration-300 hover:brightness-110 hover:scale-105
          active:scale-95 focus:outline-none focus:ring-2 focus:ring-turtle-green-light/50">
        Purchase Rank Now
      </button>
    </div>
  );
};

export default RankCTA;
