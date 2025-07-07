import React, { useState } from 'react'
import s from './HeaderMobile.module.scss'
import { Logo } from '@shared/assets/icons/Logo'
import { Input } from '@shared/components/ui/input'
import { SearchIcon } from '@shared/assets/icons/SearchIcon'
import { Link } from 'react-router-dom'
import { AppButton } from '@shared/components/ui/button'
import { Modal } from '@shared/components/ui/modal'
import { AppLink } from '@shared/components/ui/AppLink'
import { UserIcon } from '@shared/assets/icons/UserIcon'
import { HeaderNavMobile } from '../HeaderNavMobile/HeaderNavMobile'

export function HeaderMobile() {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<header className={s.wrapper}>
			{isOpen && (
				<HeaderNavMobile
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
				></HeaderNavMobile>
			)}
			<div className={s.head}>
				<Link to='/'>
					<Logo />
				</Link>
				<div className={s.container}>
					<AppButton
						variant={'border'}
						onClick={() => {
							setIsOpen(true)
						}}
						className={s.button}
					>
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
			</div>
		</header>
	)
}
