import styled from "styled-components"

export const StyledCta = styled.div`
	grid-column: 1/-1;
	grid-row: 2;
	background: var(--dark-blue);

	display: flex;
	gap: 1.5rem;
	justify-content: center;
	align-items: flex-end;
	padding-bottom: 2rem;

	@media only screen and (max-width: 768px) {
		padding: 1.7rem 0;
	}

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

			@media only screen and (max-width: 768px) {
				width: 1.8rem;
				height: 1.8rem;
			}
		}

		&:hover {
			translate: 0% -12%;
		}
	}
`
