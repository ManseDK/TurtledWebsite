
import RankCard from '@/components/RankCard';

interface RanksListProps {
  bubbleFeatures: string[];
  turtleFeatures: string[];
}

const RanksList = ({ bubbleFeatures, turtleFeatures }: RanksListProps) => {
  return (
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
  );
};

export default RanksList;
