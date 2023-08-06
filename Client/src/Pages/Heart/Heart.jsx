import { BrowserRouter } from "react-router-dom";

import {Hero, Navbar, Overview, HeartCanvas,Heartform, Result} from "../../components";
import { heartSystem, heartOverview,heart_navLinks} from "../../constants";
import { useRef } from "react";

const Heart = () => {

  return (
    // <BrowserRouter>
      <>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar system={heartSystem} navLinks={heart_navLinks}/>
          <Hero system={heartSystem} model={HeartCanvas}/>
        </div>
        <Overview system={heartSystem} overview={heartOverview}/>

        <Heartform/>
        <Result/>
      
      </div>
      </>
    // </BrowserRouter>
  );
}

export default Heart;
