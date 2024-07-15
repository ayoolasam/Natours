import React from "react";
import "./header.scss";
import logo from "../../img/logo-white.png";

const Header = () => {
  return (
    <div>
      <header class="header">
        <div class=" header__logo-box">
          <img src={logo} alt="logo" class="header__logo" />
        </div>
        <div class="header__text-box">
          <h1 class="heading-primary">
            <span class="heading-primary-main">Outdoors</span>
            <span class="heading-primary-sub">is where life happens</span>
          </h1>
          <a href="#" class="btn btn-white btn-animated">
            Discover our Tours
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
