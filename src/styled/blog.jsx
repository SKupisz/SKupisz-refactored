import styled from "styled-components";
import {animated as a} from "react-spring";

export const BlogMainContainer = styled(a.section)`
    width: calc(95% - 10px);
    height: fit-content;
    padding: 0px 5px;
    transition: height 0.9s;
    font-family: "Mohave", sans-serif;
    text-shadow: 3px 3px 4px rgba(0,0,0,.4);

    a{
        text-decoration: none;
    }
`;

export const BlogMainHeader = styled.header`
    width: calc(90% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 2.7em;
    letter-spacing: 0.07em;
    color: rgba(240,240,240,.9);
    margin-bottom: 6vh;
    position: relative;
    top: 1vh;
    text-shadow: 3px 3px 4px rgba(0,0,0,.9);
`;

export const BlogLinkContainer = styled(a.div)`
    width: calc(95% - 20px);
    height: ${(props) => 
        props.height ? props.height: "40vh"};
    overflow-y: hidden;
    padding: 0px 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 4px #000;
    margin-bottom: 30px;
    background: ${(props) => 
        props.backgroundsrc ? `url(${props.backgroundsrc})` : "#000"};
    background-size: cover;
    color: rgba(240,240,240,.9);
    transition: all 0.4s;
    cursor: pointer;
    color: rgba(240,240,240,.9);

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        width: calc(90% - 20px);
    }
    
    @media screen and (min-width: 768px){
        width: calc(70% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(60% - 20px);
    }
`;

export const BlogLinkHeader = styled.h2`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    position: relative;
    top: 1vh;
    font-size: 1.3em;
    letter-spacing: 0.10em;
    margin-bottom: 4vh;

    @media screen and (min-width: 425px){
        margin-bottom: 6vh;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.7em;
    }

    @media screen and (min-width: 1440px){
        width: calc(90% - 10px);
        font-size: 2.2em;
        margin-bottom: 6vh;
    }
`;

export const BlogLinkDesc = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.1em;
    letter-spacing: 0.07em;
    line-height: 1.2em;

    @media screen and (min-width: 425px){
        width: calc(90% - 20px);
    }

    @media screen and (min-width: 1024px){
        line-height: 1.2em;
        font-size: 1.3em;
    }

    @media screen and (min-width: 1440px){
        width: calc(80% - 20px);
        font-size: 1.5em;
    }
`;