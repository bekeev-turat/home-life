import clsx from 'clsx'

import s from './Text.module.scss'

export function Text({
	className,
	children,
	size = 'sm-16' | 'sm-14' | 'sm-12',
	weight,
}) {
	return (
		<p className={clsx(s.text, s[size], s[weight], className)}>{children}</p>
	)
}
