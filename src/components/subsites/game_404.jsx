import React, {useRef, useState} from "react";
import {useFrame, useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";

import Mars from "../../assets/pluton.jpg";

const Game = (props) => {

    const [marsMap] = useLoader(TextureLoader, [Mars]);
    const [rgb, setRgb] = useState([255,255,255]);
    const [adders, setAdders] = useState([2,3,5]);

    const boxRef = useRef();
    const colorRef = useRef();

    useFrame(({clock}) => {
        const elapsedTime = clock.getElapsedTime();
        boxRef.current.rotation.y += 0.04;
        boxRef.current.position.x = 3*Math.sin(2*Math.PI*(elapsedTime/5));
        boxRef.current.position.y = 1*Math.cos(2*Math.PI*(elapsedTime/5));
        let operand = [...rgb], addOperand = [...adders];
        for(let i = 0 ; i < operand.length; i++){
            operand[i] += addOperand[i];
            if(operand[i] >= 255 || operand[i] < 100 ){
                addOperand[i]*=(-1);
                operand[i]+=addOperand[i];
            }

        }
        setRgb(operand);
        setAdders(addOperand);
    })

    return <>
        <pointLight color={`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`} position={[0,0,2]} 
        intensity={5} ref = {colorRef}/>
        <mesh ref = {boxRef}>
            <sphereGeometry args={[1,40,40]}/>
            <meshPhongMaterial map={marsMap} opacity={0.9}/>
        </mesh>
    </>
};

export default Game;