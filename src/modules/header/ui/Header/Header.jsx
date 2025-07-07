import React from 'react'
import s from './Header.module.scss'
import { Logo } from '@shared/assets/icons/Logo'
import { Input } from '@shared/components/ui/input'
import { SearchIcon } from '@shared/assets/icons/SearchIcon'
import { AppLink } from '@shared/components/ui/AppLink'
import { Link, useNavigate } from 'react-router-dom'
import { Submenu } from '@shared/components/ui/Submenu/Submenu'
import { catalogs } from '@shared/const/catalogs'
import { Space } from '@shared/components/ui/Space'
import { AppButton } from '@shared/components/ui/button'
import { Text } from '@shared/components/ui/Text'

export function Header() {
	const navigate = useNavigate()

	return (
		<header className={s.header}>
			<div className={s.wrapper}>
				<Link to='/'>
					<Logo />
				</Link>
				<Input
					className={s.search}
					placeholder='Поиск'
					rightIcon={<SearchIcon />}
				></Input>
				<nav>
					<div className={s.submenuWrapper}>
						<Submenu
							title='Каталог'
							items={catalogs}
							onClick={(item) => navigate(`/catalog?${item}`)}
						/>
						<Submenu
							title='Другое'
							items={[
								{ label: '/?scrollTo=about', value: 'О нас' },
								{ label: '', value: 'Вопросы и ответы' },
							]}
							onClick={(item) => navigate(item)}
						/>
					</div>

					<AppButton variant={'button'} onClick={() => navigate('auth/login')}>
						Вход
					</AppButton>
				</nav>
			</div>
		</header>
	)
}
