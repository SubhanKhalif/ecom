import React from 'react';
import Navbar from "../components/homecomponents/Navbar";
import Hero from "../components/homecomponents/Hero";
import LatestPhones from "../components/homecomponents/LatestPhones";
import BestMobilesSection from "../components/homecomponents/BestMobilesSection";
import PopularPhones from "../components/homecomponents/PopularPhones";
import PopularComparisons from "../components/homecomponents/PopularComparisons";
import PopularBrands from "../components/homecomponents/PopularBrands";
import Footer from "../components/homecomponents/Footer";
import ExploreByPrice from "../components/homecomponents/ExploreByPrice";
import ExploreByFeature from "../components/homecomponents/ExploreByFeature";

const Home = () => {
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
};

export default Home;
