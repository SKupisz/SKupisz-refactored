import styled from "styled-components";

export const SomethingWentWrongHeader = styled.h1`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.9em;
    letter-spacing: 0.07em;
    color: rgba(240,240,240,.8);
    font-family: "Mohave", sans-serif;
    position: relative;
    top: 1vh;
    margin-bottom: 4vh;
    text-shadow: 3px 3px 4px rgba(0,0,0,.7);

    @media screen and (min-width: 425px){
        font-size: 2.3em;
    }

    @media screen and (min-width: 1024px){
        width: calc(90% - 20px);
    }
`;

export const SomethingWentWrongDescribe = styled.h2`
    width: calc(90% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.3em;
    font-family: "Mohave", sans-serif;
    color: rgba(240,240,240,.7);
    letter-spacing: 0.06em;
    line-height: 1.1em;
    text-shadow: 3px 3px 4px rgba(0,0,0,.5);
    margin-bottom: 5vh;

    @media screen and (min-width: 425px){
        font-size: 1.6em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 10px);
    }
`;