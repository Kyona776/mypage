import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export default  function MotionCube() {
  return (
    <MotionBox
    as="aside"
    animate={{
        
    }}
    transition={{
      duration: 10,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 1
    }}
    display="flex"
  />
  )
}