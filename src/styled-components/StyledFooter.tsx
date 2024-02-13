import styled from "styled-components"

export const StyledFooter = styled.footer`
	max-width: 100dvw;
	width: 100dvw;
	height: min-content;
	min-height: min-content;
	padding: 4rem 0 3rem 0;
	background: var(--dark-blue);
	border-top: 1px solid #fff;

	display: grid;
	grid-template-columns: repeat(5, 15rem);
	gap: 3.5rem;
	justify-content: center;
	align-items: start;

	font-size: 1.4rem;

	@media only screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(5, min-content);

		display: flex;
		gap: 2rem;
	}
`
