import React from 'react'
import s from './Header.module.scss'
import { Logo } from '@shared/assets/icons/Logo'
import { Input } from '@shared/components/ui/input'
import { SearchIcon } from '@shared/assets/icons/SearchIcon'
import { UserIcon } from '@shared/assets/icons/UserIcon'
import { AppLink } from '@shared/components/ui/AppLink'
import { Link } from 'react-router-dom'

export function Header() {
	return (
		<header className={s.wrapper}>
			<Link to='/'>
				<Logo />
			</Link>
			<Input
				className={s.search}
				placeholder='Поиск'
				rightIcon={<SearchIcon />}
			></Input>

			<nav>
				<ul>
					<li>
						<AppLink link='/catalog'>Каталог</AppLink>
					</li>
					<li>
						<AppLink link='/order'>Корзина</AppLink>
					</li>
					<li>
						<AppLink link='/?scrollTo=about'>О нас</AppLink>
					</li>
					<li>
						<UserIcon />
					</li>
				</ul>
			</nav>
		</header>
	)
}
