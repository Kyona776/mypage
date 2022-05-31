import { forwardRef  } from 'react'
import { Text, chakra } from '@chakra-ui/react'
import { blink, lighton } from './Animation'
import { neonShadows } from './NeonShadows'



const neonShadow = `
    0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500, 0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000
`


export default forwardRef((props, ref) => {
    const blinkAnimation = `${blink} linear infinite ${props.second}s`;
    const lightonAnimation = `${lighton} linear infinite ${props.second}s`;
    return (
        <Text color={props.color} p={2} animation={props.animation ? blinkAnimation : ''} 
            textShadow={neonShadows[props.shadowColor]} {...props} ref={ref}
        >{props.children}</Text>
    );
});

/*
function NeonText({children, shadowColor, second, animation}) {
    // const blinkAnimation = `${blink} linear infinite ${second}s`;
    // const lightonAnimation = `${lighton} linear infinite ${second}s`;
    return (
        <p>{children}</p>
    );
}
export default NeonText;
*/

// const NeonText = chakra(NText);
