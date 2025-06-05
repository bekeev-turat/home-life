import { useEffect } from 'react'

import { setWidth } from '../../app/store/screen.slice'

import { useDispatch, useSelector } from 'react-redux'

export const useScreenWidth = () => {
	const dispatch = useDispatch()
	const width = useSelector((state) => state.screen.width)

	useEffect(() => {
		const handleResize = () => {
			dispatch(setWidth(window.innerWidth))
		}

		window.addEventListener('resize', handleResize)
		handleResize()

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [dispatch])

	return {
		width,
		isMobile: width <= 768,
	}
}
