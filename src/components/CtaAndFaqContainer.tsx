import { StyledCtaAndFaq } from "../styled-components/StyledCtaAndFaq"
import Cta from "./Cta"
import GridItem from "./GridItem"

export default function CtaAndFaqContainer() {
	return (
		<StyledCtaAndFaq>
			<GridItem bgImg="/faq.jpg" heading="See our clients feedback" />
			<GridItem bgImg="/grad.jpg" heading="OFFERS" />
			<Cta />
		</StyledCtaAndFaq>
	)
}
