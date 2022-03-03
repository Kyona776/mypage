import { Box } from "@chakra-ui/react"

import { blink, lighton } from './Animation'
import { neonShadows  } from "./NeonShadows";

export default function NeonBorder({children, color, shadowColor, bgcolor, second, border, w, h}) {
    const blinkAnimation = `${blink} linear infinite ${second}s`;
    return (
            <Box w={w? w: '100%'} h={h? h:'100%'} bg={bgcolor} border={border} borderRadius='lg' 
                borderColor={color} animation={blinkAnimation} boxShadow={neonShadows[shadowColor]}
            >{children}</Box>
        )
}