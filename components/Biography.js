import dynamic from "next/dynamic";

import { Box, Heading, Tab} from "@chakra-ui/react";
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
  } from '@chakra-ui/react'
  

// const { Box, Heading, _ } = dynamic(() => import("@chakra-ui/react"), {})
// import NeonBorder from "./NeonBorder";
// import NeonText from "./NeonBorder";

import NeonText from "../components/NeonText";
// const NeonText = dynamic(() => import("../components/NeonText"), {ssr: false,});
import NeonBorder from "../components/NeonBorder";
// const NeonBorder = dynamic(() => import("../components/NeonBorder"), {ssr: false,});

export default function Biography(props) {
	return (<Box as='div' w="100%" data-aos="fade"
			data-aos-anchor-placement="top-center"
			className="aos-init aos-animate bio"
			Id='bio' 
			pt={'10vh'}
			>
			    {/*<NeonBorder
			    	color="yellow.100" blink={true}
				shadowColor="yellow" second={3} border="2px" />*/}
			    <Heading
			    	as="h2"
			    	size="2xl"
			    	space={8}
			    	display="flex"
			    	alignItems="center"
			    	justifyContent="center"
			    	flexDirection="column">
			    	<NeonText
			    		color="purple.100"
			    		shadowColor="purple"
			    		second={4}
			    		data-aos="fade"
			    		data-aos-anchor-placement="top-center"
			    		className="aos-init aos-animate">
			    		Biography
					<NeonBorder color="yellow.100"
			    		shadowColor="yellow" second={0} border="2px" />
			    	</NeonText>
					
			    </Heading>
				
			    <br />
			    <NeonText color="purple.100" shadowColor="purple"
			    	second={4} data-aos="fade"
			    	data-aos-anchor-placement="top-center"
			    	className="aos-init aos-animate">
			    	{props.children}
			    </NeonText>
			    <br />
		    </Box>);
}
