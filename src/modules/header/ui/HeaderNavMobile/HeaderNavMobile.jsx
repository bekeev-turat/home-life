import React, { useEffect, useState } from 'react'
import s from './HeaderNavMobile.module.scss'
import { Accordion } from '@shared/components/ui/accordion'
import { AppLink } from '@shared/components/ui/AppLink'
import { AppButton } from '@shared/components/ui/button'
import SunIcon from '@shared/assets/icons/SunIcon'
import { Text } from '@shared/components/ui/Text'
import { Space } from '@shared/components/ui/Space'
import { QuestionIcon } from '@shared/assets/icons/QuestionIcon'
import { catalogs } from '@shared/const/catalogs'
import { useNavigate } from 'react-router-dom'

export function HeaderNavMobile({ onClose }) {
	const navigate = useNavigate()
	const [show, setShow] = useState(false)

	useEffect(() => {
		setTimeout(() => setShow(true), 0)
	}, [])

	const handleClickOutside = (e) => {
		if (e.target.classList.contains(s.backdrop)) {
			setShow(false)
			setTimeout(() => onClose(), 300)
		}
	}

	return (
		<div
			className={`${s.backdrop} ${show ? s.show : ''}`}
			onClick={handleClickOutside}
		>
			<div className={`${s.modal} ${show ? s.modalShow : s.modalHide}`}>
				<Text size={'sm-16'} className={s.theme}>
					<SunIcon />
					Тема
				</Text>
				<Space h={8} />
				<nav>
					<AppButton onClick={() => navigate('auth/login')} variant={'button'}>
						Вход или Регистрация
					</AppButton>
					<Space h={25} />

					<Accordion className={s.acc} titleSize={'sm-18'} title={'Каталог'}>
						{catalogs.map((catalog, i) => (
							<AppLink link={`/catalog?${catalog.label}`} key={i}>
								<span
									onClick={() => {
										setShow(false)
										setTimeout(() => onClose(), 300)
									}}
								>
									{catalog.value}
								</span>
							</AppLink>
						))}
					</Accordion>
					<Accordion className={s.acc} titleSize={'sm-18'} title={'Другое'}>
						<AppLink link='/?scrollTo=about'>
							<span
								onClick={() => {
									setShow(false)
									setTimeout(() => onClose(), 300)
								}}
							>
								О нас
							</span>
						</AppLink>
						<AppLink link='/?scrollTo=about'>
							<span
								onClick={() => {
									setShow(false)
									setTimeout(() => onClose(), 300)
								}}
							>
								<QuestionIcon /> Вопросы и ответы
							</span>
						</AppLink>
					</Accordion>

					<Space h={25} />
				</nav>
			</div>
		</div>
	)
}
