import { StyledCtaAndFaq } from "../styled-components/StyledCtaAndFaq"
import Cta from "./Cta"
import GridItem from "./GridItem"

const gridItemAssets = [
	{
		bgImg: "/faq.jpg",
		heading: "See our clients feedback"
	},
	{
		bgImg: "/grad.jpg",
		heading: "Weekend offers",
		text: "Everybody love offers! Check it by click on button below"
	}
]

export default function CtaAndFaqContainer() {
	return (
		<StyledCtaAndFaq>
			{gridItemAssets.map(({ bgImg, heading, text }, i) => (
				<GridItem bgImg={bgImg} heading={heading} text={text} key={i} />
			))}
			<Cta />
		</StyledCtaAndFaq>
	)
}
