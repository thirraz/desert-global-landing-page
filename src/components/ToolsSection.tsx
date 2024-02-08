import { StyledToolsSection } from "../styled-components/StyledToolsSection"
import GridItem from "./GridItem"

const componentAssets = [
	{
		src: "/public/wheel.jpg",
		heading: "The best wheels, just for you",
		text: "Wheels with high performance and durability, only here!"
	},
	{
		src: "/public/headlight.jpg",
		heading: "Want headlights? No problem!",
		text: "We bring the best headlights to you don't struggle in roads"
	},
	{
		src: "/public/auto-toolkit.jpg",
		heading: "Dont forget your toolkit!",
		text: "Fix your car faster with these tools!"
	},
	{
		src: "/public/motor.jpg",
		heading: "No matter what you want, we have it!",
		text: "Choose one of our motors and feel like a racer!"
	}
]

export default function ToolsSection() {
	return (
		<StyledToolsSection>
			{componentAssets.map(({ src, heading, text }, i) => (
				<GridItem bgImg={src} heading={heading} key={i} text={text} />
			))}
		</StyledToolsSection>
	)
}
