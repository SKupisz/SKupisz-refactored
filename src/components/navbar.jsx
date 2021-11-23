import React, {useState} from "react";
import { Link } from "react-router-dom"; 
import MenuIcon from '@mui/icons-material/Menu';

import { GeneralNavbar, GeneralNavbarElem, GeneralNavbarIcon } from "../styled/main.jsx";

import data from "../data/general.js";

const Navbar = () => {

    const [isOpened, toggleIsOpened] = useState(false);

    return <GeneralNavbar className="block-center"
        opened={isOpened.toString()}>
        <GeneralNavbarIcon>
            <MenuIcon style={{fontSize: "5em"}} onClick={() => toggleIsOpened(!isOpened)}/>
        </GeneralNavbarIcon>
        {data["mainNavbar"].map((elem, ind) => <Link to = {elem["address"]} key={"main-navbar-elem-"+ind}>
            <GeneralNavbarElem ind={String(ind)}>
                {elem["content"]}
            </GeneralNavbarElem>
        </Link>)}
    </GeneralNavbar>
};

export default Navbar;