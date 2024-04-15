import React from "react";
import Login from "./components/Login.js";
import Users from "./components/Users.js";
import Layout from "./components/Layout.js";
import HtmlCSS from "./components/HtmlCSS.js";
import ES6Basics from "./components/ES6Basics.js";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    return <Outlet />;
  } else return <Navigate to={"/"} />;
};

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path='/users' element={<Layout element={Users} />} />
        <Route path='/html-css' element={<Layout element={HtmlCSS} />} />
        <Route path='/es6-basics' element={<Layout element={ES6Basics} />} />
      </Route>
    </Routes>
  );
};

export default Routers;
