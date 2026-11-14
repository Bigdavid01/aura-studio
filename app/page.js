import React from 'react';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';
import Footer from './component/Footer';



const page = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default page;
