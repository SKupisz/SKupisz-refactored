import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const RedirectElem = ({addr}) => {
    const nav = useNavigate();

    useEffect(() => {
        nav(addr);
    }, [])

    return <>
    </>
}

export default RedirectElem;