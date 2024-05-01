import { Link, NavLink, useLocation } from "react-router-dom";
import ScrollToHashElement from "./ScrollToHashElement";
import { NavHashLink } from "react-router-hash-link";

import CartIcon from "./CartIcon";
import React from "react";
export default function Header(props) {
  let [hashes, setHashes] = React.useState({
    home: "work",
    about: "not-work",
    collections: "not-work",
    contact: "not-work",
  });
  function makeActive(section) {
    if (section === "home") {
      setHashes({
        home: "work",
        about: "not-work",
        collections: "not-work",
        contact: "not-work",
      });
    } else if (section === "about") {
      setHashes({
        home: "not-work",
        about: "work",
        collections: "not-work",
        contact: "not-work",
      });
    } else if (section === "collections") {
      setHashes({
        home: "not-work",
        about: "not-work",
        collections: "work",
        contact: "not-work",
      });
    } else if (section === "contact") {
      setHashes({
        home: "not-work",
        about: "not-work",
        collections: "not-work",
        contact: "work",
      });
    }
  }
  return (
    <header>
      <div className="container">
        <ScrollToHashElement />
        <Link to="/" className="logo">
          Cera
        </Link>
        <nav>
          <NavLink
            className={hashes.home}
            onClick={() => makeActive("home")}
            to="/"
            end
          >
            Home
          </NavLink>

          <NavLink
            className={hashes.about}
            onClick={() => makeActive("about")}
            to="#about"
            end
          >
            About
          </NavLink>

          <NavLink
            className={hashes.collections}
            onClick={() => makeActive("collections")}
            to="#collections"
            reloadDocument
          >
            Collections
          </NavLink>

          <NavLink
            className={hashes.contact}
            onClick={() => makeActive("contact")}
            to="#contact-us"
          >
            Contact Us
          </NavLink>
        </nav>
        <CartIcon {...props} />
      </div>
    </header>
  );
}
