import Navbar from "../components/homecomponents/Navbar.jsx";
import Hero from "../components/homecomponents/Hero.jsx";
import LatestPhones from "../components/homecomponents/LatestPhones.jsx";
import BestMobilesSection from "../components/homecomponents/BestMobilesSection.jsx";
import PopularPhones from "../components/homecomponents/PopularPhones.jsx";
import PopularComparisons from "../components/homecomponents/PopularComparisons.jsx";
import PopularBrands from "../components/homecomponents/PopularBrands.jsx";
import Footer from "../components/homecomponents/Footer.jsx";
import ExploreByPrice from "../components/homecomponents/ExploreByPrice.jsx";
import ExploreByFeature from "../components/homecomponents/ExploreByFeature.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LatestPhones />
      <BestMobilesSection title="Best Mobiles Under ₹10,000" />
      <ExploreByPrice />
      <BestMobilesSection title="Best Mobiles Under ₹15,000" />
      <BestMobilesSection title="5G Mobiles in India" />
      <ExploreByFeature />
      <BestMobilesSection title="Best Camera Phones" />
      <PopularPhones />
      <PopularComparisons />
      <PopularBrands />
      <Footer />
    </div>
  );
}
