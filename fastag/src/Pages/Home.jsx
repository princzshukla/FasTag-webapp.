import HeroSection from "../components/home/Herosection.jsx";
import Banner from "../components/home/banner.jsx";
//import RechargeForm from "../components/home/RechargeForm.jsx";
import FastagProviders from "../components/home/Fasttagsproviders.jsx";
import AboutUs from "../components/home/Aboutus.jsx";
import FAQSection from "../components/home/FAQsection.jsx";
import bottomBanner from "../components/home/bottombanner.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Banner />
      
      <FastagProviders />
      <AboutUs />
      <FAQSection />
      <bottomBanner/>
    </>
  );
}
