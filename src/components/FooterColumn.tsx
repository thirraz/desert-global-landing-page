import { A } from "../styled-components/A"
import { StyledFooterColumn } from "../styled-components/StyledFooterColumn"
import { useViewportWidth } from "../hooks/useViewportWidth"

type Props = {
	title: string
	links: string[]
}

export default function FooterColumn({ title, links }: Props) {
	const windowWidth = useViewportWidth()

	return (
		<StyledFooterColumn>
			<p style={{ fontWeight: "bold" }}>{title}</p>

			{windowWidth > 768 &&
				links.map((link: string, i: number) => (
					<A href="#" key={i} style={{ color: "#d3d3d3" }}>
						{link}
					</A>
				))}
		</StyledFooterColumn>
	)
}
