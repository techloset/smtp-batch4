import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// navbar
import Navbar from "../components/navbar/Navbar";

// pages
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function Routing() {
 const isLoginUser =  useSelector((state)=> state.AuthReducer.isLoginUser)
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute isLoginUser={isLoginUser}>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={ <PublicRoute isLoginUser={isLoginUser}><Login /></PublicRoute> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// store = {
//   a:{
//     email:'sdfasdf'
//   }
//   b: {
//     userName:'sdfa'

//   }
//   c:{
//     id:'wsad',
//     count:234
//   }
// }

// useSelector(store)

// useSelector(store.c)

// useSelector(store.c.count)
