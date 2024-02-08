import { PiUserCircleThin } from "react-icons/pi"
import { ListItem } from "../styled-components/ListItem"
import { StyledMenuItems } from "../styled-components/StyledMenuItems"

const listItems = ["Buy", "Sell", "Our Services"]

export default function MenuItems() {
	return (
		<StyledMenuItems>
			{listItems.map((item, i) => (
				<ListItem key={i}>{item}</ListItem>
			))}
			<PiUserCircleThin data-text="Sign In" />
		</StyledMenuItems>
	)
}
