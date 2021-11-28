import React, {Suspense} from "react";
import { Canvas } from "@react-three/fiber";

import { MainContainer } from "../../styled/main.jsx";
import { SomethingWentWrongHeader, SomethingWentWrongDescribe,
    CanvasContainer } from "../../styled/somethingWentWrong.jsx";

import Navbar from "../navbar.jsx";
import Game from "./game_404.jsx";

const SomethingWentWrong = () => {
    return <>
    <Navbar/>
    <MainContainer className="block-center" iswithmainmenu="true">
        <SomethingWentWrongHeader className="block-center">
            Oops!...
        </SomethingWentWrongHeader>
        <SomethingWentWrongDescribe className="block-center">
            This page does not exist. Try to go somewhere else
        </SomethingWentWrongDescribe>
        <CanvasContainer className="block-center">
            <Canvas>
                <Suspense fallback={null}>
                    <Game/>
                </Suspense>
            </Canvas>
        </CanvasContainer>
    </MainContainer>
    </>
};

export default SomethingWentWrong;