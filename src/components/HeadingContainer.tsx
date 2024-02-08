import { motion } from "framer-motion"

type Props = {
	children: any
}

export default function HeadingContainer({ children }: Props) {
	return (
		<motion.div
			style={
				{
					// border:'2px solid green'
				}
			}
		>
			{children}
		</motion.div>
	)
}
