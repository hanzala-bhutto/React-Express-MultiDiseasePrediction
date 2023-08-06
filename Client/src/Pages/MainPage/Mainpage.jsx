import React from "react";
// import { BrowserRouter } from "react-router-dom";

import {Hero, Navbar, Overview, Model, DiabetesCanvas, HeartCanvas} from "../../components";
import {mainOverview, mainSystem, main_navLinks} from "../../constants";

const Mainpage = () => {
  return (
    // <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar system={mainSystem} navLinks={main_navLinks}/>
          <Hero system={mainSystem} model={HeartCanvas}/>
        </div>
        <Overview overview={mainOverview}/>
        <Model />
      </div>
    // </BrowserRouter>
  );
}

export default Mainpage;
