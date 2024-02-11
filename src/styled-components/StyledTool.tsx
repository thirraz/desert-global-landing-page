import styled from "styled-components"

export const StyledTool = styled.div`
	background: skyblue;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	background-position: center;
	background-size: cover;
	padding: 3rem 4rem;

	@media only screen and (max-width: 768px) {
		background-position: top;
	}
`
