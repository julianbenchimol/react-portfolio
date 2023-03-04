import React from 'react'
import { useState } from 'react'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Projects from './components/Projects'

import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderComp = function(){
    switch(currentPage){
      case "Projects":
        <Projects/>
        break;
      case "AboutMe":
        <AboutMe/>
        break;
      case "Contact":
        <Contact/>
        break;
      default:
        <Projects/>
    }
  }

  const changePages = function(activePage){
    setCurrentPage(activePage);
  }

  return(
    <div>
      <Header currentPage = {currentPage} changePages = {changePages}/>
      {renderComp()}
      <Footer/>
    </div>
  )
}