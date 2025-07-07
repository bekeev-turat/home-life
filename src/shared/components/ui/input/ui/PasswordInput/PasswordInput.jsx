import clsx from 'clsx'

import { useState } from 'react'

import s from './PasswordInput.module.scss'
import { Input } from '../..'
import { EyeIcon } from '@shared/assets/icons/EyeIcon'
import EyeIconClose from '@shared/assets/icons/EyeIconClose'

export function PasswordInput({
	value = '',
	onChange,
	placeholder = 'Введите пароль',
	className,
}) {
	const [isVisible, setIsVisible] = useState(true)
	const [isHover, setIsHover] = useState(false)
	return (
		<div className={clsx(s.passwordInput, className)}>
			<Input
				// value={value}
				// onChange={onChange}
				placeholder={placeholder}
				type={isVisible ? 'text' : 'password'}
				rightIcon={
					<span
						onClick={() => setIsVisible(!isVisible)}
						onMouseEnter={() => setIsHover(true)}
						onMouseLeave={() => setIsHover(false)}
					>
						{isVisible ? (
							<EyeIcon isHover={isHover} />
						) : (
							<EyeIconClose isHover={isHover} />
						)}
					</span>
				}
			/>
		</div>
	)
}
