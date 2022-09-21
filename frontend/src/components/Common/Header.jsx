import React from "react";
import logo from "../../assets/img/image/TASTY-TATERS--logo.svg";
import Mainbanner from '../../assets/img/image/main-bkg.png';


const Header = () => {
  return (
    <>
      <header>
        <img src={Mainbanner} alt="" />
        
      </header>
      <section className="logo">
        <img src={logo} alt="" />
      </section>
      <section className="text">
        <p>
        To eat is a necessity, <br /> <span>BUT TO EAT</span>  <br />
        intelligently is an art.
        </p>
      </section>
      </>
  );
};

export default Header;
