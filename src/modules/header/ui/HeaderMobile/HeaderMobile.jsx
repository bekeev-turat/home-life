import React from 'react'
import s from './HeaderMobile.module.scss'
import { Logo } from '@shared/assets/icons/Logo'
import { Input } from '@shared/components/ui/input'
import { SearchIcon } from '@shared/assets/icons/SearchIcon'
import { Link } from 'react-router-dom'
import { AppButton } from '@shared/components/ui/button'

export function HeaderMobile() {
	return (
		<header className={s.wrapper}>
			<Link to='/'>
				<Logo />
			</Link>
			<div className={s.container}>
				<AppButton variant={'border'} className={s.button}>
					<span className={s.stick}></span>
					<span className={s.stick}></span>
					<span className={s.stick}></span>
				</AppButton>
				<Input
					className={s.search}
					placeholder='Поиск'
					rightIcon={<SearchIcon />}
				/>
			</div>
		</header>
	)
}
