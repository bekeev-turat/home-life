import React from 'react'
import s from './PriceBlock.module.scss'
import { Text, Title } from '../Text'
import { formatPrice } from '@shared/lub/formatPrice'

export default function PriceBlock({ promotion, price, bigSize = false }) {
	if (promotion && !bigSize) {
		return (
			<div className={s.price}>
				<div>
					{promotion && (
						<Text size='sm-14' className={s.oldPrice}>
							{formatPrice(promotion)} сом
						</Text>
					)}
					<Title size='sm-18'>{formatPrice(price)} сом</Title>
				</div>
				{promotion && (
					<div className={s.promotion}>
						-{Math.round(((price - promotion) / price) * 100)}%
					</div>
				)}
			</div>
		)
	} else if (!bigSize) {
		return (
			<div className={s.price}>
				<Title size='sm-18'>{formatPrice(price)} сом</Title>
			</div>
		)
	} else if (promotion) {
		return (
			<div className={s.price}>
				<div>
					{promotion && (
						<Text size='sm-14' className={s.oldPrice}>
							{formatPrice(promotion)} сом
						</Text>
					)}
					<Title size='sm-18'>{formatPrice(price)} сом</Title>
				</div>
				{promotion && (
					<div className={s.promotion}>
						-{Math.round(((price - promotion) / price) * 100)}%
					</div>
				)}
			</div>
		)
	}
}
