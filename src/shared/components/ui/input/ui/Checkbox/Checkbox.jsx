import clsx from 'clsx'

import { Text } from '../../../Text'
import s from './Checkbox.module.scss'

export function Checkbox({ children, onChange, checked, className }) {
	return (
		<label className={clsx(s.checkbox, className)}>
			<input
				type='checkbox'
				checked={checked}
				onChange={() => onChange(!checked)}
			/>
			<span className={s.customCheckbox}></span>
			<Text className={clsx(checked && s.boldText)} size='sm-14'>
				{children}
			</Text>
		</label>
	)
}
