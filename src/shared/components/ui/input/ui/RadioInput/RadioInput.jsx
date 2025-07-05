import s from './RadioInput.module.scss'

export function RadioInput({ value, name, selectedValue, onChange }) {
	return (
		<label className={s.radioLabel}>
			<input
				type='radio'
				name={name}
				value={value}
				checked={selectedValue === value}
				onChange={() => onChange(value)}
				className={s.radioInput}
			/>
			<span
				className={`${s.radioCircle} ${selectedValue === value ? s.checked : ''}`}
			></span>
			<span className={s.radioLabelText}>{value}</span>
		</label>
	)
}
