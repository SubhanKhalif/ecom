import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import PhoneInfoPage from "./pages/PhoneInfoPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile/:phoneSlug" element={<PhoneInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
