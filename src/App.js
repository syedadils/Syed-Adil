import logo from './logo.svg';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Brands from './Pages/Portfolio Components/Brands';
import PortfolioArea from './Pages/PortfolioArea';
import "./Pages/Mycss/Mycss.css"
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

  
function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  
  return (
    <>
    <Routes >
      <Route path='/' Component={Home}/>
      <Route  path="/brands" Component={Brands}/>
      <Route  path="/portfolioarea" Component={PortfolioArea}/>

    </Routes>
    </>
  );
}

export default App;
