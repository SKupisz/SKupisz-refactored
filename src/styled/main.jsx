import styled from "styled-components";
import {animated as a} from "react-spring";

export const MainContainer = styled.main`
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
    height: fit-content;
    min-height: 70vh;
    overflow-x: hidden;
    ${(props) => 
        props.iswithmainmenu==="true" ? `
        position: relative;
        top: 19vh;
        `: ""}
`;

export const GeneralNavbar = styled(a.nav)`
    width: calc(100% - 10px);
    padding: 0px 5px;
    height: ${(props) => 
        props.opened === "true" ? "100vh" : "14vh"};
    margin-bottom: 10vh;
    position: relative;
    top: 1vh;
    text-align: center;
    background: #111;
    z-index: 4;
    overflow-y: hidden;
    transition: height 0.4s;
    position: fixed;
    top: 0px;


    a{
        text-decoration: none;
        color: rgba(240,240,240,.9);
    }

    @media screen and (min-width: 768px){
        height: 13vh;
    }

    @media screen and (min-width: 1024px){
        widt: calc(90% - 10px);
    }
`;

export const GeneralNavbarElem = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    margin: 10px auto;
    height: 10vh;
    line-height: 10vh;
    text-align: center;
    font-size: 1.5em;
    font-family: "Mohave", sans-serif;
    letter-spacing: 0.07em;
    text-shadow: 3px 3px 4px #000;
    border-radius: 5px;
    transition: filter 0.4s;
    cursor: pointer;
    box-shadow: 3px 3px 4px rgba(0,0,0,.5);
    display: block;

    ${(props) => 
        props.ind === "0" ? `margin-left: 10px;
        width: calc(50% - 20px);` : ""}

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 320px){
        width: calc(90% - 20px);
        font-size: 1.7em;
        ${(props) => 
            props.ind === "0" ? `margin-left: 10px;
            width: calc(60% - 20px);` : ""}
    }

    @media screen and (min-width: 375px){
        ${(props) => 
            props.ind === "0" ? `margin-left: 10px;
            width: calc(70% - 20px);` : ""}
    }

    @media screen and (min-width: 425px){
        font-size: 1.7em;
        width: calc(80% - 20px);

        ${(props) => 
            props.ind === "0" ? `margin-left: 10px;
            width: calc(70% - 20px);` : ""}
    }

    @media screen and (min-width: 768px){
        width: calc(25% - 40px);
        margin: 0px 10px;
        display: inline-block;
        vertical-align: top;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.9em;
    }
`;

export const GeneralNavbarIcon = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    text-align: center;
    color: rgba(240,240,240,.9);

    @media screen and (min-width: 768px){
        display: none;
    }
`;