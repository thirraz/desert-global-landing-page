import styled from "styled-components"
import { motion } from "framer-motion"

export const HeroHeading = styled(motion.h1)`
	font-family: "Helvetica Bold";
	text-transform: uppercase;
	font-size: clamp(2rem, 10vh, 12rem);
	color: #f0f0f0;
	font-weight: bolder;
	position: relative;
	z-index: var(--text-z-index);
	line-height: 0.95;
`
