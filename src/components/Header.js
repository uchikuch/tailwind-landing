import React from "react";
import logo from "../assets/images/logo-bookmark.svg";
import { FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      <header>
        <nav className="container flex items-center py-4 mt-4 sm:mt-12">
          <div className="py-1">
            <img src={logo} alt=""></img>
          </div>
          <ul
            className="hidden sm:flex flex-1 justify-end items-center 
          gap-12 text-bookmark-blue uppercase text-xs"
          >
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact</li>
            <button
              type="button"
              className="bg-bookmark-red text-white rounded-md 
              px-7 py-3 uppercase"
            >
              Login
            </button>
          </ul>
          <div className="flex sm:hidden flex-1 justify-end">
            <FaBars className="text-2xl" />
          </div>
        </nav>
      </header>
    </div>
  );
}
