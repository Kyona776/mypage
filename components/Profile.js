import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image';
import NeonBorder from './NeonBorder';


function Profile(props) {
    return(
        <Box w='100%' data-aos="fade" data-aos-anchor-placement="top-center" 
        className="aos-init aos-animate prof">
        <Heading
            as="h2"
			size="2xl"
	    	space={8}
	    	display="flex"
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
        <NeonBorder
            color="yellow.100"
            animation={false}
            shadowColor="yellow"
            border="2px"
            overflow="hidden"
            w="160px"
            h="100px">
            <Image
                src="/images/large-image.jpg"
                alt="profile_pic"
                width="400"
                height="250"
            />{" "}
            {/* z-index */}
        </NeonBorder>
    </Box>
    )
}

export { Profile as default };