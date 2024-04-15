import React from "react";
import { NavLink } from "react-router-dom";
import { Box, NavBar, MenuItemContainer } from "./Style.style";

const navArr = [
  { label: "React-Basics", path: "/users" },
  { label: "Html-Css", path: "/html-css" },
  { label: "ES-Basics", path: "/es6-basics" },
];

const NavigationBar = () => {
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
