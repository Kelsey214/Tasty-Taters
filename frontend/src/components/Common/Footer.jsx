import React from "react";
import ImgLogo from "../../assets/img/image/TASTY-TATERS--logo.svg";

const Footer = ({ price, showCartList, setShowCartList }) => {
  return (
    <>
      <footer>
        <div class="subtotal">
          <span class="subtotal-test">Subtotal:</span>
          <span class="subtotal-price">${price}</span>
        </div>
        {showCartList ? (
          <button class="link-button" onClick={() => setShowCartList(false)}>
            GO BACK TO HOME
          </button>
        ) : (
          <button onClick={() => setShowCartList(true)}>
            CHECK CART
          </button>
        )}
      </footer>
      <section className="bottom-footer">
        <img src={ImgLogo} alt="logo" />
        <p>Premium Quality food at the best and most affordable price.</p>
        <p>We have a new offer every day for 365 days</p>
        <span className="contact">Contact</span> <br />
        <span className="email">
          E-mail : quickfood@tastytaters.com | Hotline: +1 131 138 138
        </span>
        <div className="copyright">
          <p>DESIGN BY TASTY TATERS - © 2022. ALL RIGHTS RESERVED.</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
