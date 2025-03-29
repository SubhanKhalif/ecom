import Navbar from "../../../ecom_app/src/components/homecomponents/Navbar.jsx";
import Hero from "../../../ecom_app/src/components/homecomponents/Hero.jsx";
import LatestPhones from "../../../ecom_app/src/components/homecomponents/LatestPhones.jsx";
import BestMobilesSection from "../../../ecom_app/src/components/homecomponents/BestMobilesSection.jsx";
import PopularPhones from "../../../ecom_app/src/components/homecomponents/PopularPhones.jsx";
import PopularComparisons from "../../../ecom_app/src/components/homecomponents/PopularComparisons.jsx";
import PopularBrands from "../../../ecom_app/src/components/homecomponents/PopularBrands.jsx";
import Footer from "../../../ecom_app/src/components/homecomponents/Footer.jsx";
import ExploreByPrice from "../../../ecom_app/src/components/homecomponents/ExploreByPrice.jsx";
import ExploreByFeature from "../../../ecom_app/src/components/homecomponents/ExploreByFeature.jsx";

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
