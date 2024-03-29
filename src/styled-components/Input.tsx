import styled from "styled-components"

export const Input = styled.input`
	font-family: inherit;
	border: none;
	border-bottom: 1px solid #fff;
	outline: none;
	background: transparent;
	color: #d3d3d3;
	padding-bottom: 0.8rem;
	min-width: 20%;
	width: 22%;

	@media only screen and (max-width: 768px) {
		width: 50%;
	}
`
