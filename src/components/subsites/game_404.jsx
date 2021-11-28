import React, {useRef} from "react";
import {useFrame, useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";

import Mars from "../../assets/pluton.jpg";

const Game = (props) => {

    const [marsMap] = useLoader(TextureLoader, [Mars]);

    const boxRef = useRef();

    useFrame(({clock}) => {
        const elapsedTime = clock.getElapsedTime();
        boxRef.current.rotation.y += 0.04*(1+Math.abs(Math.sin(2*Math.PI*(elapsedTime/5))));
        boxRef.current.position.x = 2*Math.sin(2*Math.PI*(elapsedTime/5));
    })

    return <>
        <pointLight color="#fff" position={[2,0,2]} intensity={0.4}/>
        <mesh ref = {boxRef}>
            <sphereGeometry args={[1,40,40]}/>
            <meshPhongMaterial map={marsMap} opacity={0.9}/>
        </mesh>
    </>
};

export default Game;