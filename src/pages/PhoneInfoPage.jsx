import Header from "../components/homecomponents/Navbar.jsx";
import PhoneDetails from "../components/infocomponents/PhoneDetails.jsx";
import Specifications from "../components/infocomponents/Specifications.jsx";
import PriceComparison from "../components/infocomponents/PriceComparison.jsx";
import Alternatives from "../components/infocomponents/Alternatives.jsx";
import Competitors from "../components/infocomponents/Competitors.jsx";
import Footer from "../components/homecomponents/Footer.jsx";

export const PhoneInfoPage = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="container mx-auto px-4">
        <PhoneDetails />
        <Specifications />
        <PriceComparison />
        <Alternatives />
        <Competitors />
      </div>
      <Footer />
    </div>
  );
};

export default PhoneInfoPage;
