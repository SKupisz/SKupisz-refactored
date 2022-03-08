import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const RedirectElem = ({addr}) => {
    const nav = useNavigate();

    useEffect(() => {
        nav(addr);
    }, [addr, nav])

    return <>
    </>
}

export default RedirectElem;