import React from 'react'
import s from './HeaderNavMobile.module.scss'
import { Accordion } from '@shared/components/ui/accordion'
import { AppLink } from '@shared/components/ui/AppLink'
import { UserIcon } from '@shared/assets/icons/UserIcon'
import { AppButton } from '@shared/components/ui/button'
import SunIcon from '@shared/assets/icons/SunIcon'
import { Text } from '@shared/components/ui/Text'
import { Space } from '@shared/components/ui/Space'
import { QuestionIcon } from '@shared/assets/icons/QuestionIcon'

const catalogs = [
	'Телевизоры',
	'Кондиционеры',
	'Микроволновые печи',
	'Плиты',
	'Посудомоечные машины',
	'Пылесосы',
	'Стиральные машины',
	'Холодильники',
]

export function HeaderNavMobile({ isOpen, onClose }) {
	const handleClickOutside = (e) => {
		if (e.target.classList.contains(s.backdrop)) {
			onClose()
		}
	}
	return (
		<div className={s.backdrop} onClick={handleClickOutside}>
			<div className={s.modal}>
				<Text size={'sm-16'} className={s.theme}>
					<SunIcon />
					Тема
				</Text>
				<Space h={8} />
				<nav>
					<AppButton variant={'button'}>Вход или Регистрация</AppButton>
					<Space h={25} />

					<Accordion className={s.acc} titleSize={'sm-18'} title={'Каталог'}>
						{catalogs.map((catalog, i) => (
							<AppLink link='?catalog' key={i}>
								{catalog}
							</AppLink>
						))}
					</Accordion>
					<Accordion className={s.acc} titleSize={'sm-18'} title={'Другое'}>
						<AppLink link='/?scrollTo=about'> О нас</AppLink>
						<AppLink link='/?scrollTo=about'>
							<QuestionIcon /> Вопросы и ответы
						</AppLink>
					</Accordion>

					<Space h={25} />

					{/* <AppLink link='?catalog'>Каталог</AppLink> */}
				</nav>
			</div>
		</div>
	)
}
