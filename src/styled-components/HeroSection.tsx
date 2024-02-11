import styled from "styled-components"

export const HeroSection = styled.section`
	min-width: 0;
	height: 100dvh;
	padding-left: 3rem;

	background-image: url("/bgHero.jpg");
	background-position: bottom;
	background-size: cover;

	position: relative;
	overflow: hidden;

	display: flex;
	align-items: center;

	scroll-snap-align: end;

	@media only screen and (max-width: 768px) {
		align-items: end;
		padding-bottom: 2rem;
	}
`
