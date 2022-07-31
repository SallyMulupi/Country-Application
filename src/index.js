import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    BrowserRouter,                                                                                                              
    Routes,
    Route,
} from 'react-router-dom'
import AllCountries from "./components/AllCountries/AllCountries";
import CountryInfo from "./components/CountryInfo/CountryInfo";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
<Route path="/" element={<AllCountries />} />
 <Route path="/country/:countryName" element={<CountryInfo />} />
</Routes>
    <App />
</BrowserRouter>
 
);

