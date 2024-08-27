import React from "react";
import './App.css'
import HomePage from "./Pages/homepage/HomePage.jsx";
import EndingPage from "./Pages/ending-page/EndingPage.jsx";
import ProductsPage from "./Pages/products-section/ProductsSection.jsx";
import PlatformPage from "./Pages/platform-benefits/PlatformBenefits.jsx";
import EcosystemSection from "./Pages/ecosystem-section/EcosystemSection.jsx";

function App() {
  return (
    <div className="w-full overflow-y-scroll">
      <HomePage />
      <EcosystemSection />
      <ProductsPage />
      <PlatformPage />
      <EndingPage />
    </div>
  );
}

export default App;
