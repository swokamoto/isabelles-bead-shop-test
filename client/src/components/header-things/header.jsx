// Header should bring in navbar, banner, home banner, shop announcement and arrange

import Announcement from "./Announcement";
import BannerHome from "./BannerHome";
import Navbar from "./Navbar";
import Banner from "./Banner";

import { NavLink, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../utils/ProductsContext";
import CartPreview from "../CartPreview";
import "../../assets/css/header.css";

import Auth from "../../utils/auth";

function Header( ) {
  const { cartCounter, cartItems } = useContext(ShoppingCartContext);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Announcement />
      <Navbar />
      {/* <BannerHome /> */}

      <Banner />





    {/* <div className="sub-banner">
      <span className="bold">NOTICE: &nbsp;</span> This website is currently under construction. DON&apos;T USE IT
    </div>
      <nav>
        {Auth.isLoggedIn() ? (
          Auth.isAdmin() ? (
            <>
              <NavLink
                to={"/admin"}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Admin Panel
              </NavLink>
              <div className="vertical-line"></div>
            </>
          ) : null
        ) : null}
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          shop
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          about
        </NavLink>

        {Auth.isLoggedIn() ? (
          Auth.isClient() ? (
            <NavLink
              to={"/account/userId"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              account
            </NavLink>
          ) : null
        ) : null}

        {Auth.isLoggedIn() ? (
          <button onClick={Auth.logout}>logout</button>
        ) : (
          <NavLink
            to={"/login"}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            login
          </NavLink>
        )}

        <div className="vertical-line"></div>

        <NavLink
          to={"/cart"}
          className={({ isActive }) => `${isActive ? "active-link" : ""} nav-link`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          cart
          <div className="cart-num">{cartCounter}</div>
          {isHovered && <CartPreview items={cartItems} />}
        </NavLink>
      </nav>

      <header>
        <Link to="/">
          <h1>Isabelle’s Bead Shop</h1>
          <img src="/images/icons/zigzag.svg"></img>
        </Link>
      </header> */}
    </>
  );
}

export default Header;
