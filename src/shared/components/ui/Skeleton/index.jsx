import clsx from 'clsx'
import s from './SkeletonCard.module.scss'

export function Skeleton({ className, children, ...restProps }) {
	return (
		<div {...restProps} className={clsx(s.skeleton, className)}>
			{children}
		</div>
	)
}
