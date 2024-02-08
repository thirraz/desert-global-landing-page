import { motion } from "framer-motion"

import { Button } from "../styled-components/Button"
import { HeroHeading } from "../styled-components/HeroHeading"
import { P } from "../styled-components/P"
import { HeroTextContainer } from "../styled-components/HeroTextContainer"
import HeadingContainer from "./HeadingContainer"

export default function HeroText() {
	const duration = 0.75

	return (
		<HeroTextContainer>
			<HeadingContainer>
				<motion.div
					style={{
						overflow: "hidden"
					}}
				>
					<HeroHeading
						initial={{ y: "100%", opacity: 0 }}
						animate={{
							opacity: 1,
							y: ["100%", "50%", "0%", "-10%", "-3%", "0%"]
						}}
						transition={{ duration }}
					>
						Great Tools for
					</HeroHeading>
				</motion.div>
				<motion.div
					style={{
						overflow: "hidden"
					}}
				>
					<HeroHeading
						initial={{ y: "100%", opacity: 0 }}
						animate={{
							opacity: 1,
							y: ["100%", "50%", "0%", "-10%", "-3%", "0%"]
						}}
						transition={{ duration }}
					>
						Great Cars
					</HeroHeading>
				</motion.div>
			</HeadingContainer>

			<P
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration }}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
				possimus maiores totam inventore reiciendis alias, dolor facilis
				quasi dicta hic?
			</P>

			<Button
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				SEE OUR PRODUCTS
			</Button>
		</HeroTextContainer>
	)
}
