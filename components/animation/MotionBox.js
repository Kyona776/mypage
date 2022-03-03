import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export default  function MotionCube() {
  return (
    <MotionBox
    as="aside"
    animate={{
      scale: [0.7, 1.2, 1.2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: [
        "20%",
        "20%",
        "50%",
        "50%",
        "20%"
      ],
    }}
    transition={{
      duration: 5,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1
    }}
    // padding="1"
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    width="24"
    height="24"
    margin='auto'
    marginTop='10vh'

    // display="flex"
    // alignItems='center'
    // justify-content='center'
  />
  )
}
