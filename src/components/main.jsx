import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Welcome from "./subsites/welcome.jsx";
import Contact from "./subsites/contact.jsx";

const Main = () => {
    return <Router>
        <Routes>
            <Route exact path = "/" element = {<Welcome/>}/>
            <Route exact path = "/contact" element={<Contact/>}/>
        </Routes>
    </Router>;
};

export default Main;