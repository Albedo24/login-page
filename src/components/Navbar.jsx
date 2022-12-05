import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { React, useState } from "react";
// import * as MaIcons from '@mui/icons-material'
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import "./Navbar.css";

// export default function Navbar() {
const arr = [0, 1];
function Navbar({ role, options }) {
  const [sidebar, setSidebar] = useState(false);
  console.log("inside navbar", role, options);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="navbar">
        <a href="#" className="menu-bars">
          <IconButton onClick={showSidebar}>
            <MenuIcon />
          </IconButton>
        </a>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <a to="#" className="menu-bars">
              <IconButton>
                <CloseIcon />
              </IconButton>
            </a>
          </li>
          {options.map((item, index) => {
            return (
              <li key={index} className="nav-text">
                <Button sx={{ color: "blue", fontWeight: "600" }}>
                  {" "}
                  {item}
                </Button>
              </li>
            );
          })}
          <li>42</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
