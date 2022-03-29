import React, {useState, useEffect, useRef} from "react";
import {css} from "glamor";
import { Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';

import { MainContainer } from "../../styled/main";
import { PortfolioHeader, PortfolioHider,
    PortfolioWrapper, PortfolioContent, PortfolioContentBlock,
    PortfolioInputContainer, PortfolioInput } from "../../styled/portfolio";

import data from "../../data/general.js";

import Navbar from "../navbar.jsx";
import HeadTag from "../headTag.jsx";


const Portfolio = () => {

    const [hiderController, setHiderController] = useState(100);
    const [consoleLeftPos, setConsoleLeftPos] = useState(100);
    const [currentInput, setCurrentInput] = useState("");
    const [currentSizeMode, setCurrentSizeMode] = useState(0);
    const [currentColor, setCurrentColor] = useState("green");
    
    let dynamicConsoleStyle = css({
        fontSize: currentSizeMode === 0 ? "0.7em" : currentSizeMode === 1 ? "1em" : "0.5em",
        color: currentColor
    });

    const [currentConsoleList, setCurrentConsoleList] = useState([
        "> Portfolio console...",
        "> Use the command input to know more about me...",
        "> For more informations type help..."
    ])

    const contentRef = useRef();

    const additionalFlagError = (commandName, list) => list.push(`Error: the '${commandName}' command requires additional flag to be executed`)

    const handleTheConsoleInput = (keyCode) => {
        if(keyCode === 13) { // enter key
            let commandOperand = currentInput.trim();
            let listOperand = [...currentConsoleList];
            listOperand.push("> "+currentInput);
            switch(commandOperand){
                case "help": 
                    data["console"]["helpCommands"].map((elem) => listOperand.push(elem[0]+": "+elem[1]));
                    break;
                case "clear":
                    listOperand = [];
                    break;
                case "exit":
                    listOperand = listOperand.concat(["Exit options: ", 
                    <Link to = "/">- Main</Link>, <Link to = "/blog">- Blog</Link>, 
                    <Link to = "/contact">- Contact</Link>]);
                    break;
                default:
                    const commandSplitted = commandOperand.split(" ");
                    switch(commandSplitted[0]){
                        case "show":
                            if(commandSplitted.length < 2) additionalFlagError("show", listOperand);
                            else{
                                if(commandSplitted[1] === "--projects"){
                                    data["console"]["projects"].map((elem) => {
                                        listOperand.push(elem["name"]);
                                        listOperand.push(elem["beginning"]+"-"+elem["ending"]);
                                        listOperand.push("Role: "+elem["role"]);
                                        if(elem["websiteActive"]) listOperand.push(ReactHtmlParser(`Website: <a href='${elem["website"]}'>${elem["website"]}</a>`));
                                        listOperand.push("");
                                        return null;
                                    });
                                } 
                                else if(commandSplitted[1] === "--skills"){
                                    data["console"]["skills"].map((elem, ind) => {
                                        listOperand.push(`${ind+1}) ${elem["name"]}`);
                                        elem["techs"].map(tech => listOperand.push(`- ${tech}`));
                                        listOperand.push("");
                                        return null;
                                    })
                                }
                                else listOperand.push("Error: unknown flag");
                            }
                            break;
                        case "chfz":
                            if(commandSplitted.length < 2) additionalFlagError("chfz", listOperand);
                            else{
                                if(commandSplitted[1] === "-b") setCurrentSizeMode(1);
                                else if(commandSplitted[1] === "-n" || commandSplitted[1] === "--reset") setCurrentSizeMode(0);
                                else if(commandSplitted[1] === "-s") setCurrentSizeMode(-1);
                                else listOperand.push("Error: unknown flag");
                            }
                            break;
                        case "chcc":
                            if(commandSplitted.length < 2) additionalFlagError("chcc", listOperand);
                            else{
                                if(commandSplitted[1] === "--reset"){
                                    setCurrentColor("green");
                                }
                                else if(commandSplitted[1] === "--list"){
                                    listOperand.push("Allowed formats: ");
                                    data["console"]["allowedColorFormats"].map((elem) => 
                                        listOperand.push(`- ${elem}`)
                                    )
                                }
                                else{
                                    setCurrentColor(commandSplitted[1]); // TODO: tutaj trzeba regexa walnąć, coby sprawdzał czy to kolor jest
                                }
                            }
                            break;
                        default:
                            listOperand.push("Error. Command unknown");
                            break;
                    }
                    break;
            }
            setCurrentConsoleList(listOperand);
            setCurrentInput("");
        }
    };

    useEffect(() => {
        setTimeout(() => setHiderController(0), 200);
        setTimeout(() => setConsoleLeftPos(0), 400);
    });

    useEffect(() => {
        contentRef.current.scrollTop = contentRef.current.scrollHeight;
    },[currentConsoleList]);

    return <>
    <HeadTag siteName="Simon G. Kupisz - portfolio site"
        description="Short list of skills and projects completed by Simon G. Kupisz"
        keywords="portfolio, Simon G. Kupisz portfolio, Szymon Kupisz portfolio"/>
    <Navbar/>
    <MainContainer className="block-center" iswithmainmenu="true">
        <PortfolioHeader className="block-center">
            Welcome to the story of my career...
            <PortfolioHider height={String(hiderController)+"%"}
            top = {String(-hiderController)+"%"}/>
        </PortfolioHeader>
        <PortfolioWrapper className="block-center" left={String(consoleLeftPos)+"%"}>
            <PortfolioContent className="block-center" ref = {contentRef} {...dynamicConsoleStyle}>
                {currentConsoleList.map((elem, ind) => <PortfolioContentBlock className="block-center"
                key={"current-console-block"+ind}>{elem}</PortfolioContentBlock>)}
            </PortfolioContent>
            <PortfolioInputContainer className="block-center">
                <PortfolioInput type="text" placeholder="Command..." value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)} onKeyUp = {(e) => handleTheConsoleInput(e.keyCode)}/>
            </PortfolioInputContainer>
        </PortfolioWrapper>
    </MainContainer>
    </>
};

export default Portfolio;