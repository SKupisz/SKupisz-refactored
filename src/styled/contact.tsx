import styled from "styled-components";
import {animated as a } from "react-spring";

interface PositionInterface{
    left?: string
}

export const ContactHeader = styled(a.div)<PositionInterface>`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 2.5em;
    letter-spacing: 0.07em;
    font-family: "Mohave", sans-serif;
    color: rgba(240,240,240,.9);
    text-shadow: 3px 3px 4px #000;
    position: relative;
    top: 4vh;
    left: ${(props) => 
        props.left !== undefined ? props.left : "0%"};
    margin-bottom: 11vh;
    text-transform: uppercase;
    transition: left 0.4s;

    @media screen and (min-width: 375px){
        width: calc(80% - 20px);
        font-size: 3.1em;
    }
`;

export const ContactList = styled(a.main)<PositionInterface>`
    width: calc(100% - 20px);
    height: fit-content;
    padding: 10px;
    border-radius: 10px;
    position: relative;
    left: ${(props) => 
        props.left !== undefined ? props.left: "0%"};
    transition: left 0.8s;
    font-family: "Mohave", sans-serif;

    a{
        text-decoration: none;
        color: rgba(240,240,240,.9);
    }

    @media screen and (min-width: 375px){
        width: calc(90% - 20px);
    }

    @media screen and (min-width: 768px){
        width: calc(70% - 20px);
    }
`;

export const ContactWayContainer = styled.div`
   width: calc(100% - 40px);
   padding: 10px;
   margin: 20px 10px;
   display: inline-block;
   vertical-align: top;
   color: rgba(240,240,240,.9);

   @media screen and (min-width: 320px){
       width: calc(80% - 40px);
   }

   @media screen and (min-width: 425px){
       width: calc(50% - 40px);
   }

   @media screen and (min-width: 768px){
       width: calc(25% - 40px);
   }
`;