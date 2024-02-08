import { StyledTool } from "../styled-components/StyledTool"
import { Button } from "../styled-components/Button"
import { Overlay } from "../styled-components/Overlay"
import { H3 } from "../styled-components/H3"
import { P } from "../styled-components/P"
import { TextContainer } from "../styled-components/TextContainer"

type Props = {
	bgImg: string
	heading: string
	text?: string
}

export default function GridItem({ bgImg, heading, text }: Props) {
	return (
		<StyledTool style={{ backgroundImage: `url(${bgImg})` }}>
			<Overlay />
			<TextContainer
				style={{ display: "flex", justifyContent: "space-between" }}
			>
				<H3>{heading}</H3>
				<P>{text}</P>
			</TextContainer>
			<Button style={{ textTransform: "uppercase" }}>See more</Button>
		</StyledTool>
	)
}
