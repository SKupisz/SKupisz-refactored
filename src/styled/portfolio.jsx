import styled from "styled-components";
import {animated as a} from "react-spring";

export const PortfolioHeader = styled(a.header)`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.5em;
    letter-spacing: 0.07em;
    color: rgba(240,240,240,.9);
    font-faimly: "Mohave", sans-serif;
    margin-bottom: 2vh;
    text-shadow: 3px 3px 4px #000;

    @media screen and (min-width: 320px){
        width: calc(90% - 20px);
    }

    @media screen and (min-width: 768px){
        font-size: 1.7em;
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
        font-size: 2.1em;
    }
`;

export const PortfolioHider = styled(a.div)`
    height: ${(props) => 
        props.height ? props.height: "0%"};
    width: 100%;
    position: relative;
    top: ${(props) => 
        props.top ? props.top: "0%"};
    background: #111;
    transition: all 0.4s;
`;

export const PortfolioWrapper = styled(a.section)`
    width: calc(95% - 22px);
    height: calc(44vh - 22px);
    padding: 10px;
    border: 1px solid #444;
    border-radius: 10px;
    box-shadow: 3px 3px 4px #000;
    position: relative;
    left: ${(props) => 
        props.left ? props.left: "0%"};
    transition: left 0.4s;
    background: rgba(10,10,10,1);
    top: 5vh;

    @media screen and (min-width: 425px){
        width: calc(90% - 22px);
        height: calc(54vh - 22px);
        top: 0vh;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 22px);
        height: calc(64vh - 22px);
    }

    @media screen and (min-width: 1024px){
        width: calc(70% - 22px);
    }

    @media screen and (min-width: 1440px){
        width: calc(60% - 22px);
    }
`;

export const PortfolioContent = styled.div`
    width: calc(95% - 10px);
    height: calc(25vh - 10px);
    padding: 5px;
    position: relative;
    top: 1vh;
    font-family: "Mohave", sans-serif;
    color: green;
    overflow-x: hidden;
    overflow-y: auto;
    margin-bottom: 3vh;
    font-size: 0.7em;

    a{
        color: inherit;
    }

    
    ::-webkit-scrollbar{
        width: 7px;
        background: rgba(0,0,0,.5);
    }

    ::-webkit-scrollbar-thumb{
        width: 5px;
        background: green;
        border-radius: 5px;
        transition: background 0.4s;
        cursor: pointer;
    }
    ::-webkit-scrollbar-thumb:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        height: calc(35vh - 10px);
    }

    @media screen and (min-width: 768px){
        height: calc(45vh - 10px);
    }
`;

export const PortfolioContentBlock = styled.div`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: left;
    font-size: 1em;
    letter-spacing: 0.07em;
    margin-bottom: 0.1vh;
    text-shadow: 3px 3px 4px rgba(40,200,40,.2);
    line-height: 1.3em;

    @media screen and (min-width: 375px){
        font-size: 1.2em;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.4em;
    }
`;

export const PortfolioInputContainer = styled.div`
    width: calc(100% - 10px);
    min-height: calc(9vh - 10px);
    height: fit-content;
    padding: 10px;
    text-align: center;
    position: relative;
    top: 2vh;
`;

export const PortfolioInput = styled.input`
    width: calc(100% - 22px);
    height: calc(100% - 22px);
    padding: 10px;
    font-family: "Mohave", sans-serif;
    font-size: 1.2em;
    border: 1px solid #444;
    border-radius: 10px;
    display: inline-block;
    vertical-align: top;
    text-indent: 1em;
    background: #222;
    color: green;
    letter-spacing: 0.07em;
    cursor: pointer;
    transition: filter 0.4s;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        font-size: 1.5em;
    }

    @media screen and (min-width: 768px){
        width: calc(90% - 22px);
    }
`;