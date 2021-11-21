import styled from "styled-components";
import {animated as a } from "react-spring";

export const WelcomeSection = styled(a.section)`
    width: ${(props) => 
        props.left ? `100%` : props.right ? "0%" : "50%"};
    padding: 0px;
    height: 100vh;
    display: inline-block;
    vertical-align: top;
    font-family: "Mohave", sans-serif;
    overflow-x: hidden;
    overflow-y: auto;
    transition: width 0.4s;

    ::-webkit-scrollbar{
        width: 7px;
        background: rgba(0,0,0,.5);
    }

    ::-webkit-scrollbar-thumb{
        width: 5px;
        background: rgba(240,240,240,.5);
        border-radius: 5px;
        transition: background 0.4s;
        cursor: pointer;
    }
    ::-webkit-scrollbar-thumb:hover{
        background: rgba(240,240,240,.3);
    }
    background: ${(props) => 
        props.background ? `url("${props.background}")` : "none"};
    background-size: cover;

    @media screen and (min-width: 768px){
        width: ${(props) => 
            props.width ? `${props.width}%` : "50%"};
    }

`;

export const WelcomeSectionFilter = styled.div`
    width: inherit;
    height: inherit;
    position: absolute;
    top: 0px;
    background: rgba(0,0,0,.5);
    box-shadow: inset 10px 0px 10px #111;
`;

export const WelcomeSectionHeader = styled.h1`
    width: calc(90% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 2.1em;
    color: rgba(240,240,240,.9);
    letter-spacing: 0.09em;
    text-shadow: 3px 3px 4px #000;
    position: relative;
    top: 4vh;
    margin-bottom: 14vh;

    @media screen and (min-width: 375px){
        width: calc(80% - 20px);
        font-size: 2.5em;
        margin-bottom: 17vh;
    }
`;

export const GlitchHeader = styled.header`
    text-align: center;
    margin: 0;
    line-height: 0;
`;

export const DescribeContainer = styled.article`
    width: calc(95% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.2em;
    line-height: 1.4em;
    letter-spacing: 0.07em;
    color: rgba(240,240,240,.9);
    text-shadow: 3px 3px 4px #000;
    margin-bottom: 9vh;

    @media screen and (min-width: 1024px){
        width: calc(90% - 20px);
        font-size: 1.4em;
    }

    @media screen and (min-width: 1440px){
        line-height: 1.6em;
        font-size: 1.6em;
    }
`;

export const WelcomeMenu = styled(a.nav)`
    width: 95%;
    height: 20vh;
    height: fit-content;
    border-radius: 10px;
    box-shadow: 3px 3px 4px #000;
    text-align: center;
    opacity: ${(props) => 
        props.opacity ? props.opacity : "1"};
    transition: opacity 0.4s;
    margin-bottom: 4vh;

    @media screen and (min-width: 768px){
        width: 90%;
        height: 10vh;
        margin-bottom: 0vh;
    }

    @media screen and (min-width: 1440px){
        width: 80%;
    }
`;

export const WelcomeMenuItem = styled.div`
    width: calc(50% - 30px);
    height: calc(45% - 10px);
    line-height: calc(10vh - 10px);
    padding: 5px;
    display: inline-block;
    vertical-align: top;
    margin: 0px 10px 10px;
    color: rgba(240,240,240,.9);
    font-size: 1.1em;
    letter-spacing: 0.06em;
    text-shadow: 3px 3px 4px #000;
    transition: filter 0.4s;
    cursor: pointer;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        font-size: 1.3em;
    }

    @media screen and (min-width: 768px){
        width: calc(25% - 30px);
        height: calc(100% - 10px);
        margin: 0px 10px;
    }
    
    @media screen and (min-width: 1440px){
        font-size: 1.6em;
    }
`;