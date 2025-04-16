import HeroSection from "@/components/homePage/HeroSection";
import ServicesSection from "@/components/homePage/ServicesSection";
import Specialise from "@/components/homePage/Specialise";
import SuccessStoryBanner from "@/components/homePage/SuccessStoryBanner";

const Home = () => {
  return (
    <div className=" bg-primary-bg flex flex-col gap-4">
      <HeroSection />
      <ServicesSection />
      <SuccessStoryBanner />
      <Specialise />
    </div>
  );
};

export default Home;
