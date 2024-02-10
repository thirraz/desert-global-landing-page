import { StyledCta } from "../styled-components/StyledCta"
import { Input } from "../styled-components/Input"
import { BsBell } from "react-icons/bs"

export default function Cta() {
	return (
		<StyledCta>
			<Input type="text" placeholder="Type your e-mail here" />
			<div>
				<BsBell />
			</div>
		</StyledCta>
	)
}
