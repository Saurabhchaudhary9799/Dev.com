import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <section className="header   mx-16">
      <div className="container flex justify-between py-3">
        <div className="flex  gap-x-10 items-center">
          <h1 className="text-3xl  font-bold">Dev.com</h1>
          <ul className="flex gap-x-5 font-regular text-lg">
            <li>
              <Link
                to={"/"}
                style={{
                  color: isActive("/") ? "blue" : "black",
                  textDecoration: "none",
                  padding: "10px",
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link to={"/pricing"}  style={{
              color: isActive('/pricing') ? 'blue' : 'black',
              textDecoration: 'none',
              padding: '10px',
            }}>Pricing</Link>
            </li>
            <li>
              <Link to={"/about"}  style={{
              color: isActive('/about') ? 'blue' : 'black',
              textDecoration: 'none',
              padding: '10px',
            }}>About us</Link>
            </li>
            <li>
              <Link to={"/contact"}  style={{
              color: isActive('/contact') ? 'blue' : 'black',
              textDecoration: 'none',
              padding: '10px',
            }}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex  gap-x-5 px-10 font-regular text-lg">
          <div className="flex justify-center items-center ">Log in</div>
          <div className="bg-[#3164f4] p-3 text-white rounded-xl">Sign up</div>
        </div>
      </div>
    </section>
  );
};

export default Header;
