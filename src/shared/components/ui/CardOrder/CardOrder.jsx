import { AppButton } from '@shared/components/ui/button'
import s from './CardOrder.module.scss'
import React from 'react'
import { CardItem } from '@shared/components/ui/CardItem/CardItem'
import { Text, Title } from '@shared/components/ui/Text'
import { Space } from '@shared/components/ui/Space'
import { formatPrice } from '@shared/lub/formatPrice'

export function CardOrder({ quantity, totalPrice }) {
	return (
		<CardItem>
			<Title size={'md-28'}>Сумма заказов</Title>
			<Space h={20} />

			<Text size={'sm-14'}>Товары: {quantity && quantity}</Text>
			{/* <Text size={'sm-14'}>Подытог: {basketProducts.} сом</Text> */}
			<Space h={28} />
			<hr />
			<Space h={20} />

			<div className={s.totalPrice}>
				<Title size={'sm-18'}>Итого:</Title>
				<Title size={'sm-18'}>
					{totalPrice && formatPrice(totalPrice)} сом
				</Title>
			</div>
			<Space h={30} />

			<AppButton className={s.btn} variant={'button'}>
				Подтвердить заказа
			</AppButton>
		</CardItem>
	)
}
