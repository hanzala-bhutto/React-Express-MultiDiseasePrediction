// import { BrowserRouter } from "react-router-dom";

import {Hero, Navbar, Overview, DiabetesCanvas, Diabform, Result} from "../../components";
import {diabetesSystem,diabetesOverview, diabetes_navLinks} from "../../constants";

const Diabetes = () => {
  return (
    // <BrowserRouter>
    <>

      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar system={diabetesSystem} navLinks={diabetes_navLinks}/>
          <Hero system={diabetesSystem} model={DiabetesCanvas}/>
        </div>
        <Overview system={diabetesSystem} overview={diabetesOverview}/>
        <Diabform />
        <Result />
      </div>
    </>
    // </BrowserRouter>
  );
}

export default Diabetes;
