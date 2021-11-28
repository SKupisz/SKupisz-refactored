import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Welcome from "./subsites/welcome.jsx";
import Blog from "./subsites/blog.jsx";
import Portfolio from "./subsites/portfolio.jsx";
import Contact from "./subsites/contact.jsx";
import SomethingWentWrong from "./subsites/somethingWentWrong.jsx";

import blogData from "../data/blog.js";

const Main = () => {
    return <Router>
        <Routes>
            <Route exact path = "/" element = {<Welcome/>}/>
            <Route exact path = "/portfolio" element = {<Portfolio/>}/>
            <Route exact path = "/blog" element = {<Blog/>}/>
            {blogData["menuData"].map((elem, ind) => <Route exact path = {"/blog/"+elem["address"]} element = {<Blog/>} key = {"blog-route-"+ind}/>)}
            <Route exact path = "/contact" element={<Contact/>}/>
            <Route path = "*" element={<SomethingWentWrong/>}/>
        </Routes>
    </Router>;
};

export default Main;