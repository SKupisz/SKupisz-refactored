import React, {Suspense} from "react";
import { Canvas } from "@react-three/fiber";

import { MainContainer } from "../../styled/main";
import { SomethingWentWrongHeader, SomethingWentWrongDescribe,
    CanvasContainer } from "../../styled/somethingWentWrong.jsx";

import Navbar from "../navbar.jsx";
import HeadTag from "../headTag.jsx";
import Game from "./game_404.jsx";

const SomethingWentWrong = () => {
    return <>
    <HeadTag siteName="Site not found! - Simon G. Kupisz's site"
        description="Something went wrong, nothing to look for here"
        robotsTags="noindex, nofollow"/>
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
                <Suspense fallback={<></>}>
                    <Game/>
                </Suspense>

            </Canvas>
        </CanvasContainer>
    </MainContainer>
    </>
};

export default SomethingWentWrong;