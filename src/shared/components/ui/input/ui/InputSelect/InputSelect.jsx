import clsx from 'clsx'

import { useRef, useState } from 'react'

import { useClickOutside } from '@shared/lub/useClickOutside'

import s from './InputSelect.module.scss'
import ArrowDownIcon from '@shared/assets/icons/ArrowDownIcon'

export function InputSelect({ options, onChange, defaultValue, className }) {
	const [show, setShow] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [value, setValue] = useState(defaultValue ?? '')

	const selectRef = useRef()
	useClickOutside(
		selectRef,
		() =>
			setTimeout(() => {
				setIsOpen(false)
			}, 300),
		isOpen,
	)

	const toggleOpen = () => {
		if (isOpen) {
			setShow(false)
			setTimeout(() => setIsOpen(false), 300) // время = длительность анимации
		} else {
			setIsOpen(true)
			requestAnimationFrame(() => setShow(true)) // запустить анимацию после mount
		}
	}

	const setValueChange = (value) => {
		if (onChange) {
			onChange(value)
		}
		setValue(value)
		setShow(false)
		setTimeout(() => {
			toggleOpen()
		}, 300)
	}

	return (
		<div ref={selectRef} className={clsx(s.select, className)}>
			<div
				onClick={toggleOpen}
				className={isOpen ? `${s.inputActive}` : `${s.input}`}
			>
				<p className={s.defaultTitle}>{value}</p>
				<ArrowDownIcon className={clsx(s.icon, isOpen && s.activeIcon)} />
			</div>

			{isOpen && (
				<ul className={clsx(s.options, show && s.show)}>
					{options?.map((option, index) => (
						<li
							key={index}
							className={s.option}
							onClick={() => setValueChange(option)}
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
