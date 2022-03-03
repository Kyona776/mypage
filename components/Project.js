import dynamic from "next/dynamic";
import { useState, useMemo, useRef } from "react";

import { Box, Heading, HStack, Button, 
    Text, useDisclosure} from "@chakra-ui/react";
import {
    Modal, ModalOverlay, ModalContent,
    ModalHeader, ModalFooter, ModalBody, 
    ModalCloseButton,
  } from '@chakra-ui/react'
  
import { tags, cIcon, cTag } from "./webcontents";
// import NeonBorder from "./NeonBorder";
// import NeonText from "./NeonBorder";

// const NeonText = dynamic(() => import("../components/NeonText"));
import NeonText from "../components/NeonText";

// const NeonBorder = dynamic(() => import("../components/NeonBorder"));
import NeonBorder from "../components/NeonBorder";
/*
 title: "Simple WYSIWYG Note application",
            url:"",
            status : "Ongoing",
            techs: ['Node.js', 'Python', 'React', 'flask'],
            text : `React based simple note application.`,
            img: ""
*/

const useFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

    return [ htmlElRef, setFocus ] 
}

function Project(props) {
    let size = 'lg';
    const {isOpen, onOpen, onClose } = useDisclosure();
    const elRef = useRef(null);
    const setFocus = (e) => {
        console.log(elRef.current.focus);
        elRef.current && !isOpen && elRef.current.focus();
    }
    console.log('projct', props);
    let tags = useMemo(() => listBadge(props.tags),[props.tags]);

    function listBadge(badge) {
        let badges = [];
        for (let i =0; i < badge; i++) {
            badges.push(<cTag size={'lg'} text={badge[i]} icon={tags[badge[i]]}></cTag>);
        }
        return badges
    }

	return (<Box as='div' w={['100%', '250px', '300px',]} data-aos="fade" 
            maxW='100%' margin='5%' h={['100%', '250px', '300px',]}
			data-aos-anchor-placement="top-center"
			className="aos-init aos-animate" bg="gray.600"
            justifySelf='Center' zIndex='docked'
            bgImage='/images/Spaceship.svg' bgSize='auto'
            bgPos='Center' cursor='pointer' onClick={onOpen}
            display='flex' flexDirection='row'
            justifyContent='space-between' >
			    <Heading
			    	as="h4"
			    	size="lg"
			    	space={8}
			    	display="flex"
			    	alignItems="center"
			    	justifyContent="center"
			    	flexDirection="column"
                    >
			    	<NeonText
			    		color="purple.100"
			    		shadowColor="purple"
			    		second={4}
			    		data-aos="fade"
			    		data-aos-anchor-placement="top-center"
			    		className="aos-init aos-animate">
			    		{props.title}
			    	</NeonText>
			    </Heading>
                <br />
                <Text variant='purpleneon'>
                    Status: {props.status}
                </Text>
                <HStack spacing={4}>
                    {tags}
                    {console.log(tags)}
                </HStack>
			    <br />
                <Modal isOpen={isOpen} onClose={onClose} onBlur={onClose}
                        bg='gray.500' w={['80%', '80%', '100%']} autoFocus={true}
                        closeOnEsc={true} isCentered={true}
                >
                    <ModalContent bgColor="gray.500" w='100%'>
                    <ModalHeader >{props.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text variant='purpleneon'>
                            {props.text}
                        </Text>
                    </ModalBody>

                    <ModalFooter></ModalFooter>
                    </ModalContent>
                </Modal>
			    <br />
		    </Box>);
}

export default Project