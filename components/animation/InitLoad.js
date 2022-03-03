import { Box } from '@chakra-ui/react'
import { motion, useMotionValue } from 'framer-motion'

const MotionBox = motion(Box)

export default function InitLoad() {
  const size = useMotionValue(100)
  return (
    <MotionBox
    as="aside"
    initial={{
      width:'100vw',
      height: '100vh'
    }}
    animate={{
      scale: 'cubic-bezier(2, 1, 0.8, 0.5 ,0)',
      // rotate: [0, 270, 180, 90, 0],
      /*borderRadius: [
        "20%",
        "20%",
        "50%",
        "50%",
        "20%"
      ],*/
      opacity: [1, 1, 1, 0.8, 0.3],
      transitionEnd: {
        display: "none",
      }
    }}
    transition={{
      duration: 1,
      ease: "easeInOut",
      times: [0, 0.3, 0.6, 0.8, 1],
    }}
    padding="2"
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    display="flex"
    position='absolute'
    z-index={100}
    borderRadius='20%'
    x='800px' y='70vw'
  />
  )
}
