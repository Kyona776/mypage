import { mojs } from "@mojs/core";
import { Triangle } from "./diagrams";

/* ADD CUSTOM SHAPES */

  
// mojs.addShape( 'bubble', Bubble ); // passing name and Bubble class

//mojs.addShape( 'bubble-flip', BubbleFlip ); // passing name and BubbleFlip class

// mojs.addShape( 'check', Check ); // passing name and Check class


const COLORS = {
  purple: '#8A5CE6',
  blue:   '#42AFE3',
  yellow: '#FADD4A',
  red:    '#FF6680'
}
  
const duration  = 350,
      delayStep = duration/3,
      yShift    = 50,
      endAngle  = 30;

let delay = 0;

// Common options for a bubble
const OPTS = {
  // shape:   'bubble',
  scale:   { 0 : 1 },
  // angle:   { 0 : 10, easing: 'cubic.out'  },
  rotate: {0:-10},
  y:       { 0: -yShift },
  opacity: {0.2:1},
  easing:  'sin.out',
  radius:  43, 
  duration 
}
  
window.THEN_OPTS = {
  angle: { to: -360},
  rotate: {'-10': 360},
  duration : 300
}
window.END_OPTS = {
  y:        yShift,
  // angle:    { to: -10, easing: 'cubic.in' },
  
  scale:    { to: 0, easing: 'quad.in' },
  easing:   'sin.in',
  duration
}

// blue logo then options
const LOGO_THEN_OPTS = {
  scale: 0,
  delay: 1000
}

window.moRect_Init = {
    ...OPTS,
    shape: 'rect',
    fill: COLORS.red,
    origin: '0% 0%',
}

window.moTri_int ={
    ...OPTS,
    shape:'triangle',
    origin: '0% 0%',
}

window.moCross_init = {
    ...OPTS,
    shape:'cross',
    stroke: '#FC46AD',
    strokeWidth : 5,
}
  
window.moCheck_init = {
    ...OPTS,
    shape:    'check',
    stroke:   COLORS.blue,
    fill:     'none',
    radius:   18,
    strokeWidth: 15,
    x: 1, y: 2,
    strokeLinecap: 'round',
    strokeDasharray: '100%',
    strokeDashoffset: { '100%': 0 },
}
const blueCircle = new mojs.Shape({
  shape:    'circle',
  fill:     COLORS.blue,
  radius:   10,
  scale:    { 0 : 1 },
  x:        { [-25]: -55 },
  y:        { 0: -70 },
  delay:    duration/2 + 50,
  duration: 1*duration,
  easing:   'quad.out'
}).then({
  x:       -20,
  y:       0,
  delay:   50,
  scale:   { to: .65, easing: 'quad.in' },
  duration: duration/1.75,
  easing:  'cubic.in',
  isShowEnd: false
});
  
const check = new mojs.Shape({
    shape:    'check',
    stroke:   COLORS.blue,
    fill:     'none',
    radius:   18,
    strokeWidth: 15,
    x: 1, y: 2,
    strokeLinecap: 'round',
    strokeDasharray: '100%',
    strokeDashoffset: { '100%': 0 },
    delay: 2.5*duration - 50,
    duration: 1.25*duration,
    easing: 'quad.out'
}).then({
    scale: 0,
    duration: 1.35*duration,
    delay: 450,
    angle: 360,
    easing: 'cubic.in'
});

const smallRect = new mojs.ShapeSwirl({
  fill: COLORS.blue,
  shape:    'rect',
  radius:   10,
  rx:       4,
  scale:    { 0: 1 },
  duration: 1000,
  easing:   'elastic.out',
  opacity: { 1 : 0, easing: 'cubic.out' }
});
  
import React, { useRef, useEffect, useState, useCallback } from "react";
import { Box } from '@chakra-ui/react';



function JumpDiag(props) {
    const moDiagram = useRef();
    const animDom = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnmating] = useState(false);

    useEffect(() => {
        if (moDiagram.current) return;
        mojs.addShape( 'trianble', Triangle);

        var BlueRect = new mojs.Shape({
            parent: animDom.current,
            fill: COLORS.blue,
            ...moRect_Init,
            onStart() {
                setIsAnimating(true);
              }
        }).then({...THEN_OPTS}).then({...END_OPTS});
        
        var YellTriagle = new mojs.Shape({
            parent: animDom.current,
            fill : COLORS.yellow,
            ...moTri_int,
        }).then({...THEN_OPTS}).then({...END_OPTS})

        var RedCross = new mojs.Shape({
            parent : animDom.current,
            fill : COLORS.red,
            ...moCross_init
        }).then({...THEN_OPTS}).then({...END_OPTS,
            onComplete() {
              setIsAnimating(false);
            }})
        
        var timeline = new mojs.Timeline({ delay: 0 });
        moDiagram.current = timeline.add(
            BlueRect,
            YellTriagle,
            RedCross
        );
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
    <Box  bg='white' boxSize={10} ref={animDom}>
        <script>

        </script>
        <Button onClick={clickHander}>
            {isAnimating && isOpen ? "Animating" : isOpen ? "Close" : "Open"}
        </Button>

    </Box>)
}

export { JumpDiag as default};