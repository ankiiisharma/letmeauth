import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="mt-20 sm:mt-25">
      <div className="container mx-auto flex justify-center items-center">
        <Link
          to={"/"}
          className="text-white text-lg font-semibold hover:underline hover:text-yellow-400 hover:underline-yellow-400 mx-4"
        >
          Home
        </Link>
        <Link
          to={"/login"}
          className="text-white text-lg font-semibold hover:underline hover:text-yellow-400 hover:underline-yellow-400 mx-4"
        >
          Login
        </Link>
        <Link
          to={"/register"}
          className="text-white text-lg font-semibold hover:underline hover:text-yellow-400 hover:underline-yellow-400 mx-4"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
