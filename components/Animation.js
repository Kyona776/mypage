import { keyframes } from '@chakra-ui/react'

export const blink = keyframes`
    78% {
      color: inherit;
      border-color: inherit;
      text-shadow: inherit;
      box-shadow: inherit;
    }
    79%{
       color: #333;
       border-color: #333;
    }
    80% {
        text-shadow: none;
        box-shadow: none;
    }
    81% {
      color: inherit;
      border-color: inherit;
      text-shadow: inherit;
      box-shadow: inherit;
    }
    82% {
      color: #333;
      border-color: #333;
      text-shadow: none;
      box-shadow: none;
    }
    83% {
      color: inherit;
      border-color: inherit;
      text-shadow: inherit;
      box-shadow: inherit;
    }
    92% {
      color: #333;
      border-color: #333;
      text-shadow: none;
      box-shadow: none;
    }
    92.5% {
      color: inherit;
      border-color: inherit;
      text-shadow: inherit;
      box-shadow: inherit;
    }
`

export const lighton = keyframes`
    0% {
      color: inherit;
      text-shadow: inherit;
    }
    1%{
       color: #333;
    }
    2% {
      
      text-shadow: none;
    }
    3% {
      color: inherit;
      text-shadow: inherit;
    }
    4% {
      color: #333;
      text-shadow: none;
    }
    5% {
      color: inherit;
      text-shadow: inherit;
    }
    14% {
      color: #333;
      text-shadow: none;
    }
    14.5% {
      color: inherit;
      text-shadow: inherit;
    }
`
