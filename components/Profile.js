import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image';
import NeonBorder from './NeonBorder';
import NeonText from "../components/NeonText";


function Profile(props) {
    return(
        <Box w='100%' data-aos="fade" data-aos-anchor-placement="top-center" 
        className="aos-init aos-animate prof" pt={'10vh'} Id='prof'>
        <Heading
            as="h2" size="2xl" 
	    	space={8} display="flex"
	    	alignItems="center"
	    	justifyContent="center"
	    	flexDirection="column">
        <Text variant='yellowneon' data-aos="fade" data-aos-anchor-placement="top-center" 
              className="aos-init aos-animate">
            Profile
        <NeonBorder
            h={0}
            color="yellow.100"
            animation={false}
            shadowColor="yellow"
            border="2px"
            overflow="hidden" />
        </Text>   
        </Heading>
        <NeonText
            p='10'
            fontSize='xl'
			color="yellow.100"
			shadowColor="yellow"
			second={4}
			data-aos="fade"
			data-aos-anchor-placement="top-center"
			className="aos-init aos-animate">
			{props.children}
		</NeonText>
    </Box>
    )
}

export { Profile as default };