import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import PhoneInfoPage from "./pages/PhoneInfoPage";
import "./index.css";

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
