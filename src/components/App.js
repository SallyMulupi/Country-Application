import React from 'react';
import './index.css';
import {
    BrowserRouter,                                                                                                              
    Routes,
    Route,
} from 'react-router-dom'
import AllCountries from './pages/AllCountries.js'
import CountryInfo from "./components/pages/CountryInfo";



function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <h5>Where in the world</h5>
        </div>
      </div>
      <div className="container">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/country/:countryName" element={<CountryInfo />} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
