import { useCallback, useEffect, useState } from "react"
import { A } from "../styled-components/A"
import { StyledFooterColumn } from "../styled-components/StyledFooterColumn"

type Props = {
	title: string
	links: string[]
}

export default function FooterColumn({ title, links }: Props) {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	const setViewportWidth = useCallback(() => {
		return setWindowWidth(window.innerWidth)
	}, [])

	useEffect(() => {
		window.addEventListener("resize", setViewportWidth)

		return () => window.removeEventListener("resize", setViewportWidth)
	}, [setViewportWidth])

	return (
		<StyledFooterColumn>
			<p style={{ fontWeight: "bold" }}>{title}</p>

			{windowWidth > 768 &&
				links.map((link: string, i: number) => (
					<A href="#" key={i}>
						{link}
					</A>
				))}
		</StyledFooterColumn>
	)
}
