import { StyledApp } from "./styled-components/StyledApp"
import { HeroSection } from "./styled-components/HeroSection"
import { Overlay } from "./styled-components/Overlay"
import HeroText from "./components/HeroText"

export default function App() {
	return (
		<StyledApp>
			<HeroSection>
				<Overlay />
				<HeroText />
			</HeroSection>
		</StyledApp>
	)
}
