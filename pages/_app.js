import { useRef, useEffect } from 'react'
import UserContext from '../components/UserContext'

import '../styles/globals.css'
import { ChakraProvider, extendTheme, theme as chakraTheme } from "@chakra-ui/react"

import Layout from '../components/layout/Layout';

import AOS from "aos";
import "aos/dist/aos.css";

import { neonShadows } from '../components/NeonShadows';
import { blink } from '../components/Animation';

const theme = extendTheme({
    sizes: {
      ...chakraTheme.space,
      contrainer:{
        maxWidth: '100vw'
      }
    },
    styles:{
      global: {
        'body': {
          bg: '#000d1c'
        }
      }
    },
    fonts: {
      //heading:"Sacramento",
    },
    animations : {
      'blink': `${blink} linear infinite 2s`,
    },
    components: {
      Heading: {
        default:{
          p: '2'
        }
      },
      Text : {
        variants: {
          'purpleneon': {
            color: "purple.200",
            'text-shadow': neonShadows['purple'],
          }, 'blueneon' : {
            color: "blue.200",
            'text-shadow' : neonShadows['blue']
          }, 'greenneon': {
            color: 'green.200',
            'text-shadow' : neonShadows['green']
          }, 'yellowneon' :{
            color : 'yellow.200',
            'text-shadow': neonShadows['yellow']
          } 
        }
      }
    }
  }
)

function MyApp({ Component, pageProps, router }) {
  // const theme;
  const scrollRef = useRef({
    scrollPos:0
  })

  useEffect( () => {
    AOS.init({
      easing:"ease-in-sine",
      duration:100,
      offset:100,
      delay:100
    })
  })

  // console.log(router, pageProps);
  return (
    <ChakraProvider theme={theme} >
      <UserContext.Provider value={{ scrollRef: scrollRef }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ UserContext.Provider>
    </ChakraProvider>)
}

export default MyApp