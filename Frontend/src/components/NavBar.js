import { Link } from "react-router-dom";
import "./_components.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/">
          <h1 className="navbar-title">Campus Connect</h1>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
