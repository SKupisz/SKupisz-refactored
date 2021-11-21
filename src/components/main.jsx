import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Welcome from "./subsites/welcome.jsx";

const Main = () => {
    return <Router>
        <Routes>
            <Route exact path = "/" element = {<Welcome/>}/>
        </Routes>
    </Router>;
};

export default Main;