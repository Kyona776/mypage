import { useState, useContext, useEffect } from "react";
import dynamic from "next/dynamic";

import UserContext from "../components/UserContext"

import Image from "next/image";

import { Heading, Link, Text, Box } from "@chakra-ui/react";
import { Center, Square, Circle, chakra } from "@chakra-ui/react";
import { Container, Stack, VStack, Flex } from "@chakra-ui/react";
import Profile from '../components/Profile';


import { motion } from 'framer-motion'

import { pagetext, tags } from "../components/webcontents";

// const CodeSampleModal = dynamic(() => import("../components/CodeSampleModal"));
// const NeonText = dynamic(() => import("../components/NeonText"));
import NeonText from "../components/NeonText";
// const Biography = dynamic(() => import("../components/Biography.js"));
import Biography from "../components/Biography.js";
// const MotionCube = dynamic(() => import("../components/animation/MotionBox"));
import MotionCube from "../components/animation/Diminishing";
import Projects from "../components/Projects";
// const InitLoad = dynamic(() => import("../components/animation/InitLoad"));
import InitLoad from "../components/animation/InitLoad";
import { NavBar } from "../components/Nav/NavBar";
import { useRef } from "react";

import { Spaceship } from "../components/animation/motion/Spaceship";
import { UFO } from "../components/animation/motion/UFO";
import InvationByUFO from "../components/animation/motion/InvationByUFO";
import { Ghost } from "../components/animation/motion/Ghost";
import { UfowAlien } from "../components/animation/motion/UfowAlien";
// import { Cow } from "../components/animation/motion/Cow";
// import { Biography } from "../components/Biography"

// import JumpDiag from "../components/animation/JumpDiag";
// const JumpDiag = dynamic(() => import('../components/animation/JumpDiag'), {ssr:false})
// const MojsExample = dynamic(() => import('../components/animation/MojsExample.js'), {ssr:false});

const MoTst = dynamic(() => import('../components/animation/MoTst'), {ssr:false})
const MojsInit = dynamic(() => import('../components/animation/MojsInit'), {ssr:false});
const ScrollMenu = dynamic(() => import('../components/ScrollMenu'), {ssr:false});

export default function Start({}) {
	// const [results, setResults] = useState(countries)
  	const { scrollRef } = useContext(UserContext);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [lang, setLang ] = useState("en")
  // console.log(this.props.scrollTop);

	return (
		<Box w='100%'>
			<MojsInit />
				<Flex marginTop="150px" 
					flexDirection='column'
					mb="5%" justifyContent='center'>
					<Heading
						as="h1" size="2xl" display="flex"
            zIndex={'docked'}
						alignItems="center"
						justifyContent="center"
						flexDirection="column"
            data-aos="showup"
            data-aos-anchor-placement="top-top" className="aos-init aos-animate"
          >
						<Container w="auto">
						<NeonText color="yellow.100" shadowColor="yellow" second={4} animation={true}>
							Enomoto Kyona&apos;s
						</NeonText>
						<NeonText color="yellow.100" shadowColor="yellow" second={4}  animation={true}>
							Portfolio website
						</NeonText>
						<Text p={2} animetion='blink' textAlign='center'>Wellcome</Text>
						</Container>
						</Heading>
						<MotionCube />
						<ScrollMenu />
					{/*<JumpDiag >asdf</JumpDiag>
						<MoTst></MoTst>
					<InitLoad />
					<MojsExample duration={1000} />
          <Cow />
					*/}
					<Spaceship />
					<UFO />
          <InvationByUFO />
          <Ghost />
          <UfowAlien />
					</Flex>

				<VStack as="main" w="100%" mb='300px' pr="10vw" pl="10vw" 
					gap={20} bg="transparent">
					<NavBar id='navbar' ></NavBar>
          			<Box w='100%' data-aos="fade" data-aos-anchor-placement="top-center" className="aos-init aos-animate">
						{/*<NeonBorder
							color="yellow.100"
							animation={true}
							shadowColor="yellow"
							second={5}
						border="2px" />*/}
          			</Box>
					<Profile />
					<Biography >{pagetext[lang]['bio']}</Biography>
					
					<Projects projs={pagetext[lang]['projs']} ></Projects>
				</VStack>
				
				{/*<div>
          <h2 className={styles.secondaryHeading}>Population Lookup</h2>
          <input
            type="text"
            placeholder="Country search..."
            className={styles.input}
            onChange={async (e) => {
              const { value } = e.currentTarget
              // Dynamically load libraries
              const Fuse = (await import("fuse.js")).default
              const _ = (await import("lodash")).default

              const fuse = new Fuse(countries, {
                keys: ["name"],
                threshold: 0.3
              })

              const searchResult = fuse
                .search(value)
                .map((result) => result.item)

              const updatedResults = searchResult.length
                ? searchResult
                : countries
              setResults(updatedResults)

              // Fake analytics hit
              console.info({
                searchedAt: _.now()
              })
            }}
          />

          <ul className={styles.countries}>
            {results.map((country) => (
              <li key={country.cca2} className={styles.country}>
                <p>
                  {country.name} - {country.population.toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
        
        <div className={styles.codeSampleBlock}>
        <h2 className={styles.secondaryHeading}>Code Sample</h2>
        <p>Ever wondered how to write a function that prints Hello World?</p>
        <button onClick={() => setIsModalOpen(true)}>Show Me</button>
        {isModalOpen && (
          <CodeSampleModal
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          />
          )}
          </div>
        */}

		</Box>
	);
}

/*
export async function getServerSideProps() {
  // const response = await fetch("https://restcountries.com/v3.1/all")
  // const countries = await response.json()

  return {
    props: {
       countries: countries.map((country) => ({
        name: country.name.common,
        cca2: country.cca2,
        population: country.population,
      })),
    }
  }
}*/

/* 
export async function getStaticProps() {

  return {
    props: {}
  }
}
*/
