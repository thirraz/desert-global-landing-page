import styled from "styled-components"

export const StyledCtaAndFaq = styled.section`
	max-width: 100dvw;
	scroll-snap-align: start;

	display: grid;
	grid-template-columns: repeat(2, 50dvw);
	grid-template-rows: 50dvh 13dvh;

	@media only screen and (max-width: 768px) {
		display: block;
	}
`
