import React from "react";
import { Link } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <nav>
      <Link to="/">Home</Link> {" | "}
      <Link to="/products">Products</Link> {" | "}
      <Link to="/about">About</Link> {" | "}
      <Link to="/contact">Contact</Link> {" | "}
      <Link to="/users/123">User Profile</Link>
    </nav>
  );
};

export default NavigationMenu;
