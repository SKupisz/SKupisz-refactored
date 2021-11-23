import React, {useState, useEffect} from "react";

import { MainContainer } from "../../styled/main.jsx";
import { PortfolioHeader, PortfolioHider,
    PortfolioWrapper, PortfolioContent, PortfolioContentBlock,
    PortfolioInputContainer, PortfolioInput } from "../../styled/portfolio.jsx";
import data from "../../data/general.js";

import Navbar from "../navbar.jsx";

// install glamor for the css changes

const Portfolio = () => {

    const [hiderController, setHiderController] = useState(100);
    const [consoleLeftPos, setConsoleLeftPos] = useState(100);
    const [currentInput, setCurrentInput] = useState("");

    const [currentConsoleList, setCurrentConsoleList] = useState([
        "Portfolio console...",
        "Use the command input to know more about me...",
        "For more informations type help..."
    ])

    const handleTheConsoleInput = (keyCode) => {
        if(keyCode === 13) { // enter key
            let commandOperand = currentInput;
            let listOperand = [...currentConsoleList];
            listOperand.push(commandOperand);
            setCurrentConsoleList(listOperand);
            setCurrentInput("");
        }
    };

    useEffect(() => {
        setTimeout(() => setHiderController(0), 200);
        setTimeout(() => setConsoleLeftPos(0), 500);
    });

    return <>
    <Navbar/>
    <MainContainer className="block-center" iswithmainmenu="true">
        <PortfolioHeader className="block-center">
            Welcome to the story of my career...
            <PortfolioHider height={String(hiderController)+"%"}
            top = {String(-hiderController)+"%"}/>
        </PortfolioHeader>
        <PortfolioWrapper className="block-center" left={String(consoleLeftPos)+"%"}>
            <PortfolioContent className="block-center">
                {currentConsoleList.map((elem, ind) => <PortfolioContentBlock className="block-center"
                key={"current-console-block"+ind}>{"> "+elem}</PortfolioContentBlock>)}
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