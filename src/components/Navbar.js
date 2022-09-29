import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpeg";

export default function Navbar() {
  return (
    <div className=" bg-white flex justify-between items-center">
      <div className="flex items-center space-x-1">
        <h4 className="text-2xl font-bold uppercase ">Ipswich</h4>
        <img className="w-[40px]" src={logo} alt="logo" />
      </div>
      <ul className="flex space-x-4 uppercase">
        <li className="active">
          <Link to="/">Home</Link> </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
