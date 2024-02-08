import styled from "styled-components"

export const Overlay = styled.div`
	width: 100%;
	height: 100%;
	/* background: hsl(0, 0%, 0%, 40%); */
	background-image: linear-gradient(
		to right,
		hsl(0, 0%, 0%, 60%) 20%,
		transparent
	);
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
`
