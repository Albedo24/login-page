import { React, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// import * as MaIcons from '@mui/icons-material'
import {
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { SidebarData } from "./SidebarData";
import "./Navbar.css";

// export default function Navbar() {
//     const [state, setState] = useState({left: false});

//     const toggleDrawer = (anchor, open) => {
//         setState({...state, [anchor]: open})
//     };

//     const anchor = 'left';

//     return (
//         <Box sx={{ flexGrow: 10 }}>
//             <AppBar position="static">
//             <Toolbar>
//                 <IconButton >
//                     <MenuIcon />
//                 </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
//             News
//           </Typography>
//           {/* <Button color="inherit">Login</Button> */}
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

// import React from 'react'
import { Link } from "react-router-dom";

function Navbar(props) {
	const [sidebar, setSidebar] = useState(false);
  console.log(props);
	const showSidebar = () => setSidebar(!sidebar);
	return (
		<>
			<div className='navbar'>
				<Link
					to='#'
					className='menu-bars'
				>
					<IconButton onClick={showSidebar}>
						<MenuIcon />
					</IconButton>
				</Link>
			</div>
			<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
				<ul className='nav-menu-items' onClick={showSidebar}>
					<li className='navbar-toggle'>
						<Link
							to='#'
							className='menu-bars'
						>
							<IconButton>
								<CloseIcon />
							</IconButton>
						</Link>
					</li>
					{SidebarData.map((item, index) => {
						return (
							<li
								key={index}
								className={item.cName}
							>
								<Link to={item.path}>
									<IconButton>{item.icon}
                  </IconButton>
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
