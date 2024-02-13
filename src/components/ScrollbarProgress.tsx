import styled from "styled-components"
import { motion, useScroll, useSpring } from "framer-motion"

const Scrollbar = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;

	height: 11px;
	background: #fff;
	transform-origin: left;
	z-index: 99;
`

export default function ScrollbarProgress() {
	const { scrollYProgress } = useScroll()
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	})

	return (
		<Scrollbar
			style={{ scaleX }}
			transition={{ type: "spring", duration: 0.3 }}
		/>
	)
}
