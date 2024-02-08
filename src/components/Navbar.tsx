import { StyledNavbar } from "../styled-components/StyledNavbar"
import Logo from "./Logo"
import MenuItems from "./MenuItems"

export default function Navbar() {
	return (
		<StyledNavbar>
			<Logo />
			<MenuItems />
		</StyledNavbar>
	)
}
