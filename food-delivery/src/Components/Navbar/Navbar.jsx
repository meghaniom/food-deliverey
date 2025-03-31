import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
const Navbar = () => {

  const [menu, setmenu] = useState("home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" />
      <ul className="navbar-menu">
        <li onclick ={()=> setmenu("home")}   className={menu ==="home" ? "active": " "}>home</li>
        <li onclick ={()=>setmenu("menu")} className={menu === "menu"? "active" : " "}>menu</li>
        <li onclick ={()=> setmenu("mobile-app")} className={menu === "mobile-app"? "active": " "}>mobile-app</li>
        <li onclick ={()=> setmenu ("contact us")} className={menu === "contact us "? "active": " "}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button> Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
