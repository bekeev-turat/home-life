import React, { useState, useRef, useEffect } from 'react'
import s from './Submenu.module.scss'
import clsx from 'clsx'

export const Submenu = ({ title, items, onClick }) => {
	const [open, setOpen] = useState(false)
	const [show, setShow] = useState(false)
	const submenuRef = useRef(null)

	// Открытие с анимацией
	const handleClickSubmenu = () => {
		if (open) {
			setShow(false)
			setTimeout(() => setOpen(false), 300) // время = длительность анимации
		} else {
			setOpen(true)
			requestAnimationFrame(() => setShow(true)) // запустить анимацию после mount
		}
	}

	// Закрытие при клике вне
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (submenuRef.current && !submenuRef.current.contains(e.target)) {
				setShow(false)
				setTimeout(() => setOpen(false), 300)
			}
		}
		if (open) {
			document.addEventListener('mousedown', handleClickOutside)
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [open])

	const handleItemClick = (label) => {
		onClick(label)
		setShow(false)
		setTimeout(() => setOpen(false), 300)
	}

	return (
		<div className={s.submenuWrapper} ref={submenuRef}>
			<button className={s.submenuTrigger} onClick={handleClickSubmenu}>
				{title}
			</button>

			{open && (
				<div className={clsx(s.submenuContent, show && s.show)}>
					{items.map((item, i) => (
						<div
							key={i}
							className={s.submenuItem}
							onClick={() => handleItemClick(item.label)}
						>
							{item.value}
						</div>
					))}
				</div>
			)}
		</div>
	)
}
