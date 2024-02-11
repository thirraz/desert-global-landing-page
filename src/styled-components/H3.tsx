import styled from "styled-components"

export const H3 = styled.h3`
	font-size: clamp(3rem, 2vw, 14rem);
	font-family: "Helvetica Bold";
	text-transform: uppercase;
	letter-spacing: 0.2rem;
	max-width: 100%;
	width: 80%;

	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`
