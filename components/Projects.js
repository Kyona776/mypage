import dynamic from "next/dynamic";
import { useMemo } from "react";

import { Box, Heading, Grid, GridItem, Text, Flex} from "@chakra-ui/react";
import { pagetext } from "./webcontents";
import NeonBorder from "./NeonBorder";
import NeonText from "./NeonBorder";
import Project from "../components/Project";

// const NeonText = dynamic(() => import("../components/NeonText"));
// const NeonBorder = dynamic(() => import("../components/NeonBorder"));
// const Project = dynamic(() => import("../components/Project"));

/*
 title: "Simple WYSIWYG Note application",
            url:"",
            status : "Ongoing",
            tags
            techs: ['Node.js', 'Python', 'React', 'flask'],
            text : `React based simple note application.`,
            img: ""
*/

export default function Projects(props) {
    let l = props.projs.map((text) => {
        <Project {...text} ></Project>
    })
    let proj = [];
    for (var i = 0; i < props.projs.length; i++) {
        proj.push(<GridItem key={i}><Project key={i} {...props.projs[i]}></Project></GridItem>)
    }
    console.log(props.projs)
	return (<Box as='div' w="100%" data-aos="fade"
			data-aos-anchor-placement="top-center"
			className="aos-init aos-animate proj" id='proj'>
			    <Heading
			    	as="h2"
			    	size="2xl"
			    	space={8}
			    	display="flex"
			    	alignItems="center"
			    	justifyContent="center"
			    	flexDirection="column">
                    <Text variant='purpleneon' 
			    		data-aos="fade" animation='blink'
			    		data-aos-anchor-placement="top-center"
			    		className="aos-init aos-animate"> 
                        Project
                        <NeonBorder color="yellow.100"
			    	    shadowColor="yellow" second={0} 
                        border="2px" />
                    </Text>
			    </Heading>
                <Grid gridColumn={1} gridAutoFlow='dense'
                    alignItems='center' justifyItems='center'
                    gridTemplateColumns={
                        ['repeat(1,1fr)', 'repeat(2,1fr)',
                        'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(3,1fr)']}>
                    {proj}
                </Grid>
			    <br />
		    </Box>);
}