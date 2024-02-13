import { useCallback, useEffect, useState } from "react"

export const useViewportWidth = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	const setVW = useCallback(() => {
		return setWindowWidth(window.innerWidth)
	}, [])

	useEffect(() => {
		window.addEventListener("resize", setVW)

		return () => window.removeEventListener("resize", setVW)
	}, [setVW])

	return windowWidth
}
