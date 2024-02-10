import styled from "styled-components"

export const StyledCta = styled.div`
	grid-column: 1/-1;
	grid-row: 2;
	background: var(--dark-blue);

	display: flex;
	gap: 2.3rem;
	justify-content: center;
	align-items: center;

	& div {
		background: green;
		padding: 1rem;
		border-radius: 50%;
		background: #d1d1d190;
		cursor: pointer;
		transition: translate 0.2s ease-out;

		svg {
			fill: #fff;
			width: 2.2rem;
			height: 2.2rem;
		}

		&:hover {
			translate: 0% -12%;
		}
	}
`
