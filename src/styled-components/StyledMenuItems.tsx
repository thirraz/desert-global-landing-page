import styled from "styled-components"

export const StyledMenuItems = styled.ul`
	font-size: 1.6rem;
	color: #f0f0f0;
	list-style: none;

	display: flex;
	align-items: center;
	gap: 3rem;

	& svg {
		width: 4rem;
		height: 4rem;
		fill: #f0f0f0;
		margin-left: 1.5rem;
		transition: translate 0.3s ease;
		cursor: pointer;
		backface-visibility: hidden;

		&:hover {
			translate: 0 -0.3rem;
		}
	}
`
