import React from 'react';
import Navbar from "../../../ecom_app/src/components/homecomponents/Navbar";
import Hero from "../../../ecom_app/src/components/homecomponents/Hero";
import LatestPhones from "../../../ecom_app/src/components/homecomponents/LatestPhones";
import BestMobilesSection from "../../../ecom_app/src/components/homecomponents/BestMobilesSection";
import PopularPhones from "../../../ecom_app/src/components/homecomponents/PopularPhones";
import PopularComparisons from "../../../ecom_app/src/components/homecomponents/PopularComparisons";
import PopularBrands from "../../../ecom_app/src/components/homecomponents/PopularBrands";
import Footer from "../../../ecom_app/src/components/homecomponents/Footer";
import ExploreByPrice from "../../../ecom_app/src/components/homecomponents/ExploreByPrice";
import ExploreByFeature from "../../../ecom_app/src/components/homecomponents/ExploreByFeature";

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
