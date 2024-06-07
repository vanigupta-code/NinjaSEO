import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ninjaseo from "./ninjaseo.png";
import Icons from "../Icons";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-600 mb-3 ">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between m-5">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="flex justify-center items-center gap-2 text-white">
            <img
              src={ninjaseo}
              className="lg:w-16 lg:h-16 w-14 h-14"
              alt=""
            ></img>
            <div className="flex justify-center items-left flex-col">
              <h1 className="text-2xl md:text-4xl underline font-semibold">
                Ninja SEO
              </h1>
              <p>Your Go-To SEO Agency</p>
            </div>
          </div>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Icons name="cg-menu-grid-0" />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col mt-4 justify-end items-center lg:flex-row list-none w-full text-white gap-5 hover:[&>*]:text-lime-400">
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/Blogs">Blogs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Testimonials">Testimonials</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Services">Services</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
