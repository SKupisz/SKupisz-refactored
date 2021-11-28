import React from "react";

import { MainContainer } from "../../styled/main.jsx";
import { SomethingWentWrongHeader, SomethingWentWrongDescribe } from "../../styled/somethingWentWrong.jsx";

import Navbar from "../navbar.jsx";

const SomethingWentWrong = () => {
    return <>
    <Navbar/>
    <MainContainer className="block-center" iswithmainmenu="true">
        <SomethingWentWrongHeader className="block-center">
            Oops!...
        </SomethingWentWrongHeader>
        <SomethingWentWrongDescribe className="block-center">
            This page does not exist. Try to go somewhere else
        </SomethingWentWrongDescribe>
    </MainContainer>
    </>
};

export default SomethingWentWrong;