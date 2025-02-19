import BriefSection from "@/components/common/home/BriefSection";
import FeaturesSection from "@/components/common/home/FeaturesSection";
import HeroSection from "@/components/common/home/HeroSection";
import SocialMediaSection from "@/components/common/home/SocialMediaSection";
import StatsSection from "@/components/common/home/StatsSection";
import TeamSection from "@/components/common/home/TeamSection";

const Home = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BriefSection />
      <StatsSection />
      <FeaturesSection />
      <TeamSection />
      <SocialMediaSection />
    </main>
  );
};

export default Home;
