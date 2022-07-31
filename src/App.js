import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import AllCountries from "./components/pages/AllCountries";
import CountryInfo from "./components/CountryInfo/CountryInfo";

import "./app.css";

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
