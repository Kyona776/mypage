import { motion } from 'framer-motion'; 
import { forwardRef, chakra } from '@chakra-ui/system';


// export const MoSvg = motion.svg;
export const MoPath = motion.path;
// export const MoPath = motion(forwardRef(({ layoutId, ...rest }, ref) => <chakra.path ref={ref} {...rest} />));

export const MoSvg = motion(forwardRef(({ layoutId, ...rest }, ref) => <chakra.svg ref={ref} {...rest} />))
