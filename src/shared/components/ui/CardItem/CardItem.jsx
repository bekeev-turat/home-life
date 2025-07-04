import React from 'react'
import s from './CardItem.module.scss'
import clsx from 'clsx'
export function CardItem({ children, className }) {
	return <div className={clsx(s.root, className)}>{children}</div>
}
