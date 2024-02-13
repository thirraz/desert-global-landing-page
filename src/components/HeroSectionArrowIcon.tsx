import { ArrowIcon } from "../styled-components/ArrowIcon"

type Props = {
	scope?: any
}

export default function HeroSectionArrowIcon({ scope }: Props) {
	return (
		<ArrowIcon
			ref={scope}
			animate={{ y: [-3, 0, 6, 0, -3] }}
			transition={{ duration: 1.5, repeat: Infinity }}
		>
			<svg
				width="28"
				height="15"
				viewBox="0 0 28 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M26.8059 1.20911L13.9999 14.0151L1.19385 1.20911"
					stroke="white"
					stroke-width="0.7"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</ArrowIcon>
	)
}
