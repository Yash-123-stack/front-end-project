import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import EndingPage from'./EndingPage';
import DescriptionPage from './DescriptionPage';
import ProductsPage from './ProductsPage';
import PlatformPage from './PlatformPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element= {<HomePage />} />
        <Route path = "/ending" element= {<EndingPage />} />
        <Route path = "/Description" element= {<DescriptionPage />} />
        <Route path = "/Products" element= {<ProductsPage />} />
        <Route path = "/Platform" element= {<PlatformPage />} />
      </Routes>
    </Router>
  );
};

export default App;

