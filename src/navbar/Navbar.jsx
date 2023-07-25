import React, { useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

import { Book, GraduationCap } from "phosphor-react";

const Navbar = () => {
  useEffect(() => {
    let navs = document.querySelectorAll(".navLinks");

    navs.forEach((nav) => {
      nav.addEventListener("click", (e) => {
        let cur = e.currentTarget;

        navs.forEach((na) => {
          na.classList.remove("active");
        });

        cur.classList.add("active");
      });
    });
  });
  return (
    <div className="navbar">
      <div className="leftTop">
        <h3>
          Rehmi's Educational Center
          <span>
            <GraduationCap size={22} />
          </span>
        </h3>
      </div>
      <div className="rightTop">
        <ul>
          <li>
            <Link className="navLinks active" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="navLinks" to={"/programs"}>
              Programs
            </Link>
          </li>
          <li>
            <Link className="navLinks" to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className="navLinks" to={"/contacts"}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
