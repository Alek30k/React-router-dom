import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/">Home</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
