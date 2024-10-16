import { Link } from "react-router-dom";
import "./_components.css";
import profileImg from "./profile.png";

const SideBar = () => {
  const user = "John Doe";
  return (
    <div className="sidebar">
      <Link
        to="/profile/user"
        style={{ textDecoration: "none" }}
        className="sidebar-user">
        <img src={profileImg} alt="" className="sidebar-user-img"></img>
        <h2>{user}</h2>
      </Link>

      <ul className="sidebar-list">
        <li>
          <Link to="/create" style={{ textDecoration: "none" }}>
            New Post/Question
          </Link>
        </li>
        <li>
          <Link to="/posts" style={{ textDecoration: "none" }}>
            Posts
          </Link>
        </li>
        <li>
          <Link to="/questions" style={{ textDecoration: "none" }}>
            Questions
          </Link>
        </li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default SideBar;
