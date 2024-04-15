import React from "react";
import { NavLink } from "react-router-dom";
import { Box, NavBar, MenuItemContainer } from "./Style.style";
// layout test
const navArr = [
  { label: "React-Basics", path: "/users" },
  { label: "Html-Css", path: "/html-css" },
  { label: "ES6-Basics", path: "/es6-basics" },
];

const NavigationBar = () => {
  const handleLogout = () => localStorage.removeItem("accessToken");
  return (
    <NavBar>
      <MenuItemContainer>
        {navArr?.map((item, idx) => {
          return (
            <NavLink
              key={idx}
              to={item?.path}
              className={({ isActive }) =>
                isActive ? "menuItem active" : "menuItem"
              }
            >
              {item?.label}
            </NavLink>
          );
        })}
        <NavLink to={"/"} className='menuItem' onClick={handleLogout}>
          Logout
        </NavLink>
      </MenuItemContainer>
    </NavBar>
  );
};

const Layout = (props) => {
  return (
    <Box>
      <NavigationBar />
      <div className='elementContainer'>
        <props.element />
      </div>
    </Box>
  );
};

export default Layout;
