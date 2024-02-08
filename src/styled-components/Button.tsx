import styled from "styled-components"
import { motion } from "framer-motion"

export const Button = styled(motion.button)`
	max-width: max-content;
	border: none;
	outline: none;
	border: 0.2rem solid #fff;
	padding: 1.5rem;
	background: transparent;
	color: #fff;
	z-index: var(--text-z-index);
	font-family: "Helvetica Bold";
	letter-spacing: 0.2rem;
	position: relative;
	cursor: pointer;
	margin-top: 2rem;
	transition: color 0.2s ease-out;

	&:hover {
		color: #0f0f0f;
	}

	&::before {
		content: "";
		transition: width 0.2s ease-out;
		position: absolute;
		top: 0;
		left: 0;
		width: 0%;
		height: 100%;
		background: #f0f0f0;
		z-index: -1;
	}

	&:hover::before {
		width: 100%;
	}
`
