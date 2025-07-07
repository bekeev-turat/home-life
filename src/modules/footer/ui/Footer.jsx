import React from 'react'
import s from './Footer.module.scss'
import { Title, Text } from '@shared/components/ui/Text'
import { WhatsappIcon } from '@shared/assets/icons/WhatsappIcon'
import { TelegramIcon } from '@shared/assets/icons/TelegramIcon'
import { Space } from '@shared/components/ui/Space'
import { useScreenWidth } from '@shared/lub/useScreenWidth'

export function Footer() {
	const { isMobile } = useScreenWidth()

	return (
		<footer className={s.wrapper}>
			<Title size={isMobile ? 'sm-18' : 'xl-36'}>Наши контакты:</Title>
			{!isMobile ? <Space h={30} /> : <Space h={20} />}

			<div className={s.container}>
				<div className={s.box}>
					<WhatsappIcon className={s.icon} />
					<div className={s.number}>
						<Text size='sm-14'>0500-74-34-40</Text>
						<Text size='sm-14'>0220-39-22-97</Text>
					</div>
				</div>
				<Space h={20} />

				<div className={s.box}>
					<TelegramIcon className={s.icon} />
					<div className={s.number}>
						<Text size='sm-14'>0507-42-03-11</Text>
					</div>
				</div>
			</div>
			<Space h={20} />

			<Text size='sm-14'>homelife.0305@gmail.com</Text>

			{/* {role === "admin" && <Link to={ROUTE.admin}>ADMIN</Link>} */}
		</footer>
	)
}
