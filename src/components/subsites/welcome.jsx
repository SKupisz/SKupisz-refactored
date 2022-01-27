import React, {useState, useEffect, useLayoutEffect} from "react";
import {Link} from "react-router-dom";

import { MainContainer } from "../../styled/main.jsx";
import { WelcomeSection, WelcomeSectionFilter, WelcomeSectionHeader,
    GlitchHeader, DescribeContainer, WelcomeMenu,
    WelcomeMenuItem } from "../../styled/welcome.jsx";

import Saturn from "../../assets/saturn.jpg";

import data from "../../data/general.js";

import HeadTag from "../headTag.jsx";

const useWindowSize = () => {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}
const Welcome = () => {

    const headerContent = "Who am I?";
    const MenuItems = data["mainNavbar"]

    const [currentDescWidth, setCurrentDescWidth] = useState(0);
    const [currentMenuOpacity, setCurrentMenuOpacity] = useState(0);
    const width = useWindowSize();

    useEffect(() => {
        setTimeout(() => setCurrentDescWidth(60), 200);
        setTimeout(() => setCurrentMenuOpacity(1), 700);
    });

    useLayoutEffect(() => {
        if(width < 1024){
            setTimeout(() => setCurrentDescWidth(80), 200);
        }
        else setTimeout(() => setCurrentDescWidth(60), 200);
    }, [width]);

    return <>
    <HeadTag siteName="Simon G. Kupisz - landing page" keywords="Kupisz, IT, programming, Szymon Kupisz"/>
    <MainContainer className="block-center">
        <WelcomeSection width={String(currentDescWidth)} left="true">
            <WelcomeSectionHeader className="block-center">
                <GlitchHeader>{headerContent}</GlitchHeader>
                <GlitchHeader className="glitch-1">{headerContent}</GlitchHeader>
                <GlitchHeader className="glitch-2">{headerContent}</GlitchHeader>
                <GlitchHeader className="glitch-3">{headerContent}</GlitchHeader>
            </WelcomeSectionHeader>
            <DescribeContainer className="block-center">
                I am a 18-years-old passionate of programming. My journey with it started when I was 9 years old. Currently, I am a student of
                Faculty of Mathematics and Information Science of the Warsaw University of Technology. I'm interested in broadening my knowledge about IT and programming 
                as much as possible.
            </DescribeContainer>
            <WelcomeMenu className="block-center" opacity={String(currentMenuOpacity)}>
                {MenuItems.map((elem, ind) => <Link key={"nav-elem-"+ind} to = {elem["address"]}>
                    <WelcomeMenuItem>
                        {elem["content"]}
                    </WelcomeMenuItem>
                </Link>)}
            </WelcomeMenu>
        </WelcomeSection>
        <WelcomeSection background={Saturn} width={String(100-currentDescWidth)} right="true">
            <WelcomeSectionFilter/>
        </WelcomeSection>
    </MainContainer></>
};

export default Welcome;