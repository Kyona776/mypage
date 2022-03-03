import React, { useRef, useEffect, useState, useCallback } from "react";
import { Box } from '@chakra-ui/react';
import mojs from "@mojs/core";


function MotionDiagram(props) {
    const moDiagram = useRef();
    const animDom = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnmating] = useState(false);

    useEffect(() => {
        if (moDiagram.current) return;

        moDiagram.current = new mojs.Shape({
            parent: animDom.current,
            shape: 'circle',
            fill: {"#FC46AD": "#F64040" },
            radisu: {50: 200},
            duration : 2000,
            isShowStart: true,
            easing: "elastic.inout",
            onstart() {

            }
        })
    })

    useEffect(() => {
        if (!moDiagram.current) return;

        moDiagram.current.tune({duration: duration});
        isOpen ? moDiagram.current.replayBackward()
                : moDiagram.current.play();

        const clickHander = useCallback(() => {
            
        })
    })
        
    return(
    <Box ref={animDom}>

    </Box>)
}