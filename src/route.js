import React from "react";
import Login from "./components/Login.js";
import Basics from "./components/Basics.js";
import Layout from "./components/Layout.js";
import HtmlCSS from "./components/HtmlCSS.js";
import Users from "./components/Users.js";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ token }) => {
  if (token) {
    return <Outlet />;
  } else return <Navigate to={"/"} />;
};

const Routers = () => {
  const token = localStorage.getItem("accessToken");
  console.log("token = ", token);
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route element={<PrivateRoute token={token} />}>
        <Route path='/users' element={<Layout element={Users} />} />
        <Route path='/html-css' element={<Layout element={HtmlCSS} />} />
        <Route path='/es6-basics' element={<Layout element={Basics} />} />
      </Route>
    </Routes>
  );
};

export default Routers;
