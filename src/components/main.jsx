import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Welcome from "./subsites/welcome.jsx";
import Blog from "./subsites/blog.jsx";
import Portfolio from "./subsites/portfolio.jsx";
import Contact from "./subsites/contact.jsx";

import blogData from "../data/blog.js";

const Main = () => {
    return <Router>
        <Routes>
            <Route exact path = "/" element = {<Welcome/>}/>
            <Route exact path = "/portfolio" element = {<Portfolio/>}/>
            <Route path = "/blog" element = {<Blog/>}>
                {blogData["menuData"].map((elem, ind) => <Route path = {"/blog/"+elem["address"]} element = {<Blog/>} key = {"blog-route-"+ind}/>)}
            </Route>
            <Route exact path = "/contact" element={<Contact/>}/>
        </Routes>
    </Router>;
};

export default Main;