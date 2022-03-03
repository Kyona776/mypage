import { Box } from "@chakra-ui/react";

import Footer from './Footer';
import Navbar from './Navbar';

const Layout = (props) => {
    return ( // #000d1c
        <Box id='background' w='100%' 
            bgGradient='linear(red.600 0%, gray.600 21%, gray.600 50%, gray.700 60%, #000d1c 90%, teal.600 100%)'>
            <Navbar />
                {props.children}
            <Footer />
        </Box>
    )
}
export { Layout as  default };