import React from 'react'
import clsx from 'clsx'
import s from './ColorPicker.module.scss'
import { Text } from '@shared/components/ui/Text'
import { useScreenWidth } from '@shared/lub/useScreenWidth'

export function ColorPicker({ colors, currentColor, onChange }) {
	const { isMobile } = useScreenWidth()

	return (
		<div className={s.color}>
			<Text size={isMobile ? 'sm-14' : 'sm-18'}>
				<strong>Цвет: </strong>
			</Text>
			<div className={s.colors}>
				{colors.map((color, i) => (
					<span
						key={i}
						className={clsx(
							s.colorItem,
							currentColor === color && s.activeColor,
						)}
						style={{ background: color }}
						onClick={() => onChange(color)}
					></span>
				))}
			</div>
		</div>
	)
}
