import { Block } from "@chakra-ui/react";
import { forwardRef } from "react";

const Article = forwardRef((props, ref) => (props, ref) => {

    return (
        <Block ref={ref} minHeight={}>
            {props.children}
        </Block>
    )
});