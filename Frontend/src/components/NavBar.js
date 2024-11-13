


import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css"; 
import logo from "./logo.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuth, role } = useSelector((state) => state.user); 

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
              
                {role !== "student" && (
                  <li>
                    <Link to={"/addpost"} onClick={() => setShow(false)}>
                      NEW POST
                    </Link>
                  </li>
                )}
                <li>
                  <Link to={"/profile"} onClick={() => setShow(false)}>
                    PROFILE
                  </Link>
                </li>
                <li>
                  <Link to={"/chat"} onClick={() => setShow(false)}>
                    CHAT
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
