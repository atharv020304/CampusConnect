import NavBar from "./NavBar.js";
import SideBar from "./SideBar.js";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <NavBar />
      <SideBar />

      <div className="outlet container">
        <Outlet />
      </div>
    </div>
  );
}
