import { useState } from 'react'
import s from './Accordion.module.scss'
import clsx from 'clsx'
import ArrowDownIcon from '../../../../assets/icons/ArrowDownIcon'
import { Text } from '../../Text'

export function Accordion({
	title,
	children,
	isOpenAcc = false,
	className,
	titleSize,
}) {
	const [isOpen, setIsOpen] = useState(isOpenAcc)

	return (
		<>
			<button
				className={s.accordion}
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<Text size={titleSize}>{title}</Text>
				<ArrowDownIcon className={clsx(s.icon, isOpen && s.activeIcon)} />
			</button>
			<div className={clsx(s.panel, isOpen && s.active, className)}>
				{children}
			</div>
		</>
	)
}
