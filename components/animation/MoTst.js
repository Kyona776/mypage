import Script from "next/script"
import { Box, Button } from "@chakra-ui/react"
import { useState, useRef } from "react";
import { mojs } from "@mojs/core";



export default function MoTst() {
    const animRef = useRef();
    const [playfn, setStripe] = useState(null)
    


    return (
        <Box id='animPare'>

        <Script
          id="mo-js"
          // src="https://unpkg.com/@mojs/core"
          src="https://unpkg.com/@mojs/core@1.3.0/dist/mo.umd.js"
          strategy="afterInteractive"
          onLoad={() => {
            // let ss = document.getElementById('anim');
            // '<path d="M 287.973 198.341 C 289.919 198.017 291.901 198.598 293.381 199.922 C 294.8 201.129 295.655 202.82 296.603 204.399 L 308.518 224.521 C 309.215 225.728 309.859 227.015 310.044 228.423 C 310.37 230.408 309.788 232.436 308.466 233.931 C 307.433 235.031 306.084 235.764 304.611 236.023 C 303.559 236.251 302.469 236.198 301.403 236.198 L 275.322 236.198 C 273.276 236.262 271.289 235.497 269.797 234.065 C 268.753 232.989 268.129 231.557 268.048 230.045 C 267.943 228.302 268.443 226.546 269.338 225.043 C 273.824 217.442 278.323 209.844 282.831 202.255 C 283.918 200.266 285.783 198.84 287.961 198.341 L 287.973 198.341 Z M 288.237 209.2 C 287.646 209.468 287.238 210.003 286.921 210.541 L 278.874 224.482 C 278.518 225.057 278.162 225.687 278.176 226.386 C 278.148 226.962 278.478 227.498 278.939 227.779 C 279.478 228.128 280.122 228.168 280.754 228.181 L 298.127 228.168 C 298.969 228.181 299.982 227.953 300.364 227.095 C 300.72 226.212 300.232 225.312 299.759 224.589 L 290.815 210.283 C 290.302 209.427 289.237 208.744 288.237 209.213 L 288.237 209.2 Z"></path>'
            /*
            class Triangle extends mojs.CustomShape {
                getShape () {return '<path xmlns="http://www.w3.org/2000/svg" d="M15.16 1.77a5 5 0 0 1 4.11 1.18c1.08.9 1.73 2.16 2.45 3.34l9.06 15.01c.53.9 1.02 1.86 1.16 2.91a4.93 4.93 0 0 1-1.2 4.11 5.31 5.31 0 0 1-2.93 1.56c-.8.17-1.63.13-2.44.13H5.54a5.86 5.86 0 0 1-4.2-1.59 4.62 4.62 0 0 1-1.33-3c-.08-1.3.3-2.61.98-3.73a6698.5 6698.5 0 0 1 10.26-17 5.97 5.97 0 0 1 3.9-2.92zm.2 8.1c-.45.2-.76.6-1 1l-6.12 10.4c-.27.43-.54.9-.53 1.42-.02.43.23.83.58 1.04.41.26.9.29 1.38.3l13.21-.01c.64.01 1.41-.16 1.7-.8.27-.66-.1-1.33-.46-1.87l-6.8-10.67c-.39-.64-1.2-1.15-1.96-.8z" />';}
                // 
            } 
            mojs.addShape( 'triangle', Triangle);*/
            let animDom = document.getElementById('animPare');

            var BlueRect = new mojs.Shape({
                parent: animDom,
                fill: window.COLORS.blue,
                ...window.moRect_Init,
            }).then({...window.THEN_OPTS}).then({...window.END_OPTS});
            /*
            var YellTriagle = new mojs.Shape({
                parent: animDom,
                fill : window.COLORS.yellow,
                ...window.moTri_int,
            }).then({...window.THEN_OPTS}).then({...window.END_OPTS})
            */
    
            var RedCross = new mojs.Shape({
                parent : animDom,
                fill : window.COLORS.red,
                ...window.moCross_init
            }).then({...window.THEN_OPTS}).then({...window.END_OPTS,
                onComplete() {
                }})

            var Tria = new mojs.shape({
                top:'20%',
                left: '50%',
                scale:   { 0.5 : 1 },
                // angle:   { 0 : 10, easing: 'cubic.out'  },
                rotate: {0:-10},
                y:       { 0: -yShift },
                opacity: {0.2:1},
                easing:  'sin.out',
                duration: 350,
                shape:'polygon',
                points: 3,
                parent: animDom,
                stroke: window.COLORS.yellow,
                strokeWidth: 5
            }).then({...window.THEN_OPTS}).then({...window.END_OPTS,})
            // ss.play();
            // setStripe( ss);
            var timeline = new mojs.Timeline({ delay: 0, replay:999 });
            timeline.add(
                BlueRect,
                // YellTriagle,
                // Tria,
                RedCross
            );
            timeline.play();
          }}
        />
      </Box>
    )
}
  