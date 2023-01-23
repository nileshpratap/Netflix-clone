import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav_black"}`}>
      {/* <nav className="nav"> */}
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg "
        alt="Logo.png"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="profile-pic"
        className="nav_avatar"
      />
    </nav>
  );
}

export default Navbar;
