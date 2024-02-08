import styled from "styled-components"
import { motion } from "framer-motion"

export const P = styled(motion.p)`
	font-family: inherit;
	font-size: 1.6rem;
	color: #d3d3d3;
	position: relative;
	z-index: var(--text-z-index);
	max-width: 60%;
	line-height: 1.6;
`
