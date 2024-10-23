

// import { Link } from "react-router-dom";
// import "./Navbar.css"; // Assuming you have some CSS for styling

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h1>CampusConnect</h1>
//       <ul>
       
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//         <li>
//           <Link to="/register">Register</Link>
//         </li>
      
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css"; 
import logo from "./logo.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuth } = useSelector((state) => state.user); // Accessing the auth state from Redux store

  return (
    <>
      <nav className={show ? "navbar show_navbar" : "navbar"}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to={"/"} onClick={() => setShow(false)}>
                HOME
              </Link>
            </li>
            {isAuth ? (
              <>
                <li>
                  <Link to={"/posts"} onClick={() => setShow(false)}>
                    POSTS
                  </Link>
                </li>
                <li>
                  <Link to={"/questions"} onClick={() => setShow(false)}>
                    QUESTIONS
                  </Link>
                </li>
                <li>
                  <Link to={"/logout"} onClick={() => setShow(false)}>
                    LOGOUT
                  </Link>
                </li>
                <li>
                  <Link to={"/addpost"} onClick={() => setShow(false)}>
                  NEW POST
                  </Link>
                </li>
                <li>
                  <Link to={"/profile"} onClick={() => setShow(false)}>
                  Profile
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={"/register"} onClick={() => setShow(false)}>
                    REGISTER
                  </Link>
                </li>
                <li>
                  <Link to={"/login"} onClick={() => setShow(false)}>
                    LOGIN
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </nav>
    </>
  );
};

export default Navbar;
