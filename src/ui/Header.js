import React from "react";
import logo from "../starter-code/assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const handleClick = () => {
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const nav = document.querySelector(".primary-navigation");
    const visibility = nav.getAttribute("data-visible");

    if (visibility === "false") {
      nav.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
    } else {
      nav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    }
  };

  return (
    <header className="primary-header flex">
      <div>
        <img src={logo} alt="space logo" className="logo" />
      </div>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded="false"
        onClick={handleClick}
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          data-visible="false"
          className="primary-navigation underline-indicators flex"
        >
          <li>
            <NavLink
              className={`ff-sans-cond uppercase text-white letter-spacing-2`}
              to="/"
              exact='true'
            >
              <span aria-hidden="true">00</span>Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`ff-sans-cond uppercase text-white letter-spacing-2`}
              to="/destination"
            >
              <span aria-hidden="true">01</span>Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`ff-sans-cond uppercase text-white letter-spacing-2`}
              to="/crew"
            >
              <span aria-hidden="true">02</span>Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`ff-sans-cond uppercase text-white letter-spacing-2 `}
              to="/technology"
            >
              <span aria-hidden="true">03</span>Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
