import styled from "styled-components"

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;

	gap: 1rem;
	z-index: var(--text-z-index);
	color: #fff;

	& button {
		text-transform: uppercase;
	}
`
