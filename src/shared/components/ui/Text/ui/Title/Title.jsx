import clsx from 'clsx'

import s from './Title.module.scss'

export function Title({
	className,
	children,
	size = 'xl-36' | '.lg-32' | 'md-28' | 'md-20' | 'sm-18' | 'sm-16',
}) {
	return <p className={clsx(s.title, s[size], className)}>{children}</p>
}
