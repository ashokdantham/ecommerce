import React from "react";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const menu = useRef(null);
  const router = useLocation();
  const toogleMenu = () => {
    if (menu.current) {
      menu.current.classList.toggle("hidden");
    }
  };

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <span className="self-center text-xl font-bold whitespace-nowrap tracking-wider">
            Amazon
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            onClick={toogleMenu}
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            <GiHamburgerMenu />
          </button>
        </div>
        <div
          ref={menu}
          className={`items-center transition-all  hidden justify-between w-full md:flex md:w-auto md:order-1 `}
          id="navbar-search"
        >
          <ul className="flex flex-col p-4 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-bold md:border-0 md:bg-white">
            <li>
              <Link
                to="/"
                className={`block py-2 pl-3 pr-4 ${
                  router.pathname == "/"
                    ? "bg-yellow-600 text-white md:text-yellow-600"
                    : "text-gray-700 bg-white"
                } rounded md:bg-transparent md:p-0`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className={`block py-2 pl-3 pr-4 ${
                  router.pathname == "/cart"
                    ? "bg-yellow-600 text-white md:text-yellow-600"
                    : "text-gray-700 bg-white"
                } rounded md:bg-transparent md:p-0`}
                aria-current="page"
              >
                Cart
              </Link>
            </li>
       
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;