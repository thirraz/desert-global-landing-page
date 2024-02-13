import { StyledApp } from "./styled-components/StyledApp"
import { HeroSection } from "./styled-components/HeroSection"
import { Overlay } from "./styled-components/Overlay"
import HeroText from "./components/HeroText"
import ToolsSection from "./components/ToolsSection"
import Navbar from "./components/Navbar"
import CtaAndFaqContainer from "./components/CtaAndFaqContainer"
import Footer from "./components/Footer"
import ScrollbarProgress from "./components/ScrollbarProgress"

export default function App() {
	return (
		<StyledApp>
			<ScrollbarProgress />
			<HeroSection>
				<Overlay />
				<Navbar />
				<HeroText />
			</HeroSection>
			<ToolsSection />
			<CtaAndFaqContainer />
			<Footer />
		</StyledApp>
	)
}
