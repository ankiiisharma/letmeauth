import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to={"/"}> home</Link>
      <Link to={"/login"}> Login </Link>
      <Link to={"/register"}> Register</Link>
    </>
  );
}

export default Navbar;
