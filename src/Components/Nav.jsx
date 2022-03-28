import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Styles/Nav.css";

// PRODUCTS SECTIONS NAVIGATION Ex.: Home > Vestuário > Regata Dry-Fit Feminina
function Nav({ navItems }) {
  return (
    <nav className="nav">
      {/* NAVIGATION ITEMS  */}
      {navItems.map((item, index) => (
        <div key={index} className="nav__content">
          <Link to={item.link}>{item.nome}</Link>

          {/* ADD ARROW '>' BETWEEN LINKS */}
          {navItems.length !== index + 1 && (
            <i className="fal fa-angle-right navArrow"></i>
          )}
        </div>
      ))}
    </nav>
  );
}

export default Nav;
