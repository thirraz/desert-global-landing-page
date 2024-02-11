import styled from "styled-components"

export const StyledToolsSection = styled.div`
	max-width: 100dvw;

	background: #222;
	scroll-snap-align: start;

	display: grid;
	grid-template-columns: repeat(2, 50dvw);
	grid-template-rows: repeat(2, 50dvh);

	@media only screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(4, 50dvh);
	}
`
