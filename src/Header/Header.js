import React from "react";
import "./Header.css";
const Header = (props) => {
  return (
    <header className="banner col-xl col-md col-xm">
      <img
        src="https://getwallpapers.com/wallpaper/full/a/a/e/949784-new-santiago-bernabeu-wallpapers-2000x1333.jpg"
        alt=""
      />
      <section className="banner-details">{props.children}</section>
    </header>
  );
};

export default Header;
