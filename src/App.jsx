import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../ecom_app/src/pages/home";
import PhoneInfoPage from "../../ecom_app/src/pages/PhoneInfoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile/:phoneSlug" element={<PhoneInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
