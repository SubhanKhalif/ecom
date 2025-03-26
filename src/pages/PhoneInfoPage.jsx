import Header from "../components/homecomponents/Navbar";
import PhoneDetails from "../components/infocomponents/PhoneDetails";
import Specifications from "../components/infocomponents/Specifications";
import PriceComparison from "../components/infocomponents/PriceComparison";
import Alternatives from "../components/infocomponents/Alternatives";
import Competitors from "../components/infocomponents/Competitors";
import Footer from "../components/homecomponents/Footer";

function PhoneInfoPage() {
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
}

export default PhoneInfoPage;
