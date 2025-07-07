import clsx from 'clsx'
import { Link } from 'react-router-dom'

import s from './AppLink.module.scss'

export function AppLink({
	className,
	children,
	size,
	type,
	color,
	link,
}) {
	const isAnchorLink = typeof link === 'string' && link.startsWith('#')

	if (isAnchorLink) {
		return (
			<a
				href={link}
				className={clsx(s.link, s[size], s[type], s[color], className)}
			>
				{children}
			</a>
		)
	}

	return (
		<Link
			to={link}
			className={clsx(s.link, s[size], s[type], s[color], className)}
		>
			{children}
		</Link>
	)
}
