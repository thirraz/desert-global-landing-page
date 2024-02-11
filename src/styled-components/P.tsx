import styled from "styled-components"
import { motion } from "framer-motion"

export const P = styled(motion.p)`
	font-family: inherit;
	font-size: clamp(1.6rem, 1.2vw, 1.6rem);
	color: #d3d3d3;
	position: relative;
	z-index: var(--text-z-index);
	max-width: 100%;
	width: 60%;
	line-height: 1.6;

	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`
