import Image from "next/image";

import { Box } from "@chakra-ui/react"
import NeonBorder from "../NeonBorder";


export default function() {
    return (
        <Box as='footer' h={20} mt={10}>
				<NeonBorder
					h={1}
					color="yellow.100"
					blink={true}
					shadowColor="footer"
					second={4}
					border="2px"
				/>
				<a
					href="https://vercel.com?utm_source=learn&&utm_campaign=core-web-vitals"
					target="_blank"
					rel="noopener noreferrer" color="black">
					Powered by
					<span >
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
					<span >
						<Image src="/chakra.png" alt="Chakra ui Logo" width={72} height={16} />
					</span>
				</a>
				<NeonBorder
					h={1}
					color="yellow.100"
					blink={true}
					shadowColor="footer"
					second={4}
					border="2px"
				/>
			</Box>
    )
}