import React from 'react';
import '../index.css'
import {
                                                                                                                  
    Routes,
    Route,
} from 'react-router-dom'
import AllCountries from './pages/AllCountries.js'
import CountryInfo from './pages/CountryInfo';



 function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <h5>Where in the world</h5>
        </div>
      </div>
      <div className="container">
        
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/country/:countryName" element={<CountryInfo />} />
        </Routes>
      
      </div>
    </>
  );
}

export default App;
