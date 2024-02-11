import { StyledFooter } from "../styled-components/StyledFooter"
import FooterColumn from "./FooterColumn"

const footerLinks = [
	{
		title: "Vehicles",
		links: ["Pickups", "SUVs", "Performance"]
	},
	{
		title: "Buy",
		links: ["Build Your Own", "Offers", "Our locations", "DG Plus Plan"]
	},
	{
		title: "Services",
		links: ["Owners", "Tutorials", "DG Project", "DG App", "Guarantee"]
	},
	{
		title: "About DG",
		links: ["Careers", "News", "Security", "FAQ", "Contact US"]
	},
	{
		title: "Social",
		links: ["Instagram", "TikTok", "YouTube"]
	}
]

export default function Footer() {
	return (
		<StyledFooter>
			{footerLinks.map(({ title, links }, i) => (
				<FooterColumn key={i} title={title} links={links} />
			))}
		</StyledFooter>
	)
}
