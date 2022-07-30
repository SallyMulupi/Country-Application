import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
 import Countries from './components/CountryItems/Countries'
 import CountriesContainer from './components/CountryItems/CountriesContainer'

import Country from './components/CountryItems/Country'
import Header from './components/Header'
import SearchBox from './components/Navigation/search';
import Filter from './components/Filter';
function App() {
  
  return (
       <Router>
   <>
     <Header />
   <Route exact path="/">
      <Countries />
    </Route>
    <Route exact path="/countries/:name" children={<Countries />}></Route>
    <Route exact path="/country/:name" children={<Country />}></Route>
    <Route exact path="/SeearchBox/:name" children={<SearchBox />}></Route>
    <Route exact path="/Filter/:name" children={<Filter />}></Route>
    <Route exact path="/countriescontainer/:name" children={<CountriesContainer />}></Route>
  </>
  </Router>
)
  
 }
export default App
