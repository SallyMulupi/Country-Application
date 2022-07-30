import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

 
import NavBar from './components/navigation/NavBar'
import Country from './components/pages/Country'
import Header from './components/navigation/Header'
import './index.css'
import Filter from './components/navigation/Filter';
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
    
    <Route exact path="/Filter/:name" children={<Filter />}></Route>
    
    <Route exact path="/Navbar/:name" children={<NavBar />}></Route>
  </>
  </Router>
)
  
 }
export default App
