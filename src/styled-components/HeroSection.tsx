import styled from "styled-components"

export const HeroSection = styled.section`
	min-width: 0;
	height: 100dvh;
	padding-left: 3rem;

	/* border-radius: 29px; */

	background-image: url("/bgHero.jpg");
	background-position: bottom;
	background-size: cover;

	position: relative;
	overflow: hidden;

	display: flex;
	align-items: center;

	scroll-snap-align: end;
`
