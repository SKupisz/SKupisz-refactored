import React, {useState, useEffect} from "react";

import { MainContainer } from "../../styled/main.jsx";
import { ContactHeader, ContactList,
    ContactWayContainer } from "../../styled/contact.jsx";

import data from "../../data/general.js";

const Contact = () => {

    const [currentLeftPos, setCurrentLeftPos] = useState(100);

    useEffect(() => {
        setTimeout(() => setCurrentLeftPos(0), 200);
    });

    return <MainContainer className="block-center">
        <ContactHeader className="block-center"
        left = {String(currentLeftPos)+"%"}>
            Contact
        </ContactHeader>
        <ContactList className="block-center"
        left = {String(currentLeftPos)+"%"}>
            {data["contactWays"].map((elem, ind) => elem["address"] === null ? <ContactWayContainer key={"contact-way-"+ind} className="block-center">
                {elem["icon"]}
            </ContactWayContainer> : <a href = {elem["address"]} key = {"contact-way-"+ind} target="blank">
            <ContactWayContainer key={"contact-way-"+ind} className="block-center" islink>
                {elem["icon"]}
            </ContactWayContainer>
            </a>)}
        </ContactList>
    </MainContainer>
};

export default Contact;