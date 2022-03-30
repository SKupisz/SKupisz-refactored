import React, {useState, useEffect, Suspense} from "react";

import { MainContainer } from "../../styled/main";
import { ContactHeader, ContactList,
    ContactWayContainer } from "../../styled/contact";
    
import data from "../../data/general.js";

import Navbar from "../navbar";
import HeadTag from "../headTag";

const Contact = () => {

    const [currentLeftPos, setCurrentLeftPos] = useState(100);

    useEffect(() => {
        setTimeout(() => setCurrentLeftPos(0), 200);
    });

    return <>
        <HeadTag siteName="Simon G. Kupisz - contact"
            description="Contact ways to Simon G. Kupisz"
            keywords="Simon G. Kupisz contact, contact, Szymon Kupisz kontakt"/>
        <Navbar/>
        <MainContainer className="block-center" iswithmainmenu="true">
        <ContactHeader className="block-center"
        left = {String(currentLeftPos)+"%"}>
            Contact
        </ContactHeader>
        <ContactList className="block-center"
        left = {String(currentLeftPos)+"%"}>
            {data["contactWays"].map((elem, ind) => elem["address"] === null ? <ContactWayContainer key={"contact-way-"+ind} className="block-center">
                {elem["icon"]}
            </ContactWayContainer> : <a href = {elem["address"]} key = {"contact-way-"+ind} target="blank">
            <Suspense fallback={<></>}>
                <ContactWayContainer key={"contact-way-"+ind} className="block-center" islink="">
                    {elem["icon"]}
                </ContactWayContainer>
            </Suspense>
            </a>)}
        </ContactList>
    </MainContainer></>
};

export default Contact;