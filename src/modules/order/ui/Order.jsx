import React, { useState } from 'react'
import s from './Order.module.scss'
import { Title } from '@shared/components/ui/Text'
import { useScreenWidth } from '@shared/lub/useScreenWidth'
import { Space } from '@shared/components/ui/Space'
import { Input } from '@shared/components/ui/input'
import { CardOrder } from '@shared/components/ui/CardOrder/CardOrder'
import { RadioInput } from '@shared/components/ui/input/ui/RadioInput/RadioInput'

export function Order() {
	const { isMobile } = useScreenWidth()
	const [payment, setPayment] = useState()

	return (
		<div>
			<Title size={isMobile ? 'md-18' : 'xl-36'}>Заполните форму</Title>
			<Space h={30} />
			<form className={s.form}>
				<div className={s.wrapper}>
					<Input type='text' placeholder='Ваше Имя*' />
					<Space h={20} />
					<Input type='text' placeholder='Адрес дома и название улицы*' />
					<Space h={20} />
					<Input
						type='text'
						placeholder='Крыло, подъезд, этаж и тд (необязательно)'
					/>
					<Space h={20} />

					<Title size={'md-18'}>Выберите способ оплаты:</Title>
					<Space h={30} />

					<RadioInput
						name='payment'
						onChange={(value) => setPayment(value)}
						value='Наличными при получении'
						selectedValue={payment}
					/>
					<Space h={25} />

					<RadioInput
						name='payment'
						onChange={(value) => setPayment(value)}
						value='Картой банка при получении'
						selectedValue={payment}
					/>
				</div>
				<div className={s.card}>
					<CardOrder />
				</div>
			</form>
		</div>
	)
}
