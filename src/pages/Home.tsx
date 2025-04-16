import Enterprise from "@/components/homePage/Enterprise";
import Experts from "@/components/homePage/Experts";
import HeroSection from "@/components/homePage/HeroSection";
import HomePartners from "@/components/homePage/HomePartners";
import ServicesSection from "@/components/homePage/ServicesSection";
import Specialise from "@/components/homePage/Specialise";
import SuccessStoryBanner from "@/components/homePage/SuccessStoryBanner";
import Testimonials from "@/components/homePage/Testimonials";

const Home = () => {
  return (
    <div className=" bg-primary-bg flex flex-col gap-4">
      <HeroSection />
      <ServicesSection />
      <SuccessStoryBanner />
      <Specialise />
      <Enterprise/>
      <Testimonials/>
      <Experts/>
      <HomePartners/>
    </div>
  );
};

export default Home;
