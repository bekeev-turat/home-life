import React, { useEffect, useState } from 'react'
import s from './InputCounter.module.scss'

export function InputCounter({ value, onChange }) {
	const [inputValue, setInputValue] = useState(value)

	useEffect(() => {
		setInputValue(value)
	}, [value])

	const onIncrementNumber = () => {
		onChange((prev) => prev + 1)
		setInputValue((prev) => prev + 1)
	}

	const onDecrementNumber = () => {
		onChange((prev) => Math.max(prev - 1, 0))
		setInputValue((prev) => Math.max(prev - 1, 0))
	}

	const onChangeNumber = (e) => {
		const newValue = e.target.value
		if (/^\d*$/.test(newValue)) {
			setInputValue(newValue)
		}
	}
	const onBlurNumber = (e) => {
		const newValue = parseInt(e.target.value)
		if (newValue >= 0) {
			onChange(newValue)
		} else {
			onChange(1)
			setInputValue(1)
		}
	}

	return (
		<div className={s.root}>
			<button onClick={onDecrementNumber} disabled={inputValue === 0}>
				-
			</button>
			<input
				type='text'
				value={inputValue}
				onChange={onChangeNumber}
				onBlur={onBlurNumber}
			/>
			<button onClick={onIncrementNumber}>+</button>
		</div>
	)
}
