import styled from "styled-components"

export const StyledToolsSection = styled.div`
	max-width: 100dvw;
	min-height: 100dvh;
	background: #222;
	scroll-snap-align: start;

	display: grid;
	grid-template-columns: repeat(2, 50dvw);
	grid-template-rows: repeat(2, 50dvh);
`
