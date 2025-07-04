import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollToElementFromQuery(paramName = 'scrollTo') {
	const location = useLocation()

	useEffect(() => {
		const params = new URLSearchParams(location.search)
		const targetId = params.get(paramName)
		if (targetId) {
			const el = document.getElementById(targetId)
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [location.search, paramName])
}
