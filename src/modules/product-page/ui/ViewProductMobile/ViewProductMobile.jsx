import React, { useState } from 'react'
import s from './ViewProductMobile.module.scss'
import { Text, Title } from '@shared/components/ui/Text'
import { Rating } from 'react-simple-star-rating'
import { AppButton } from '@shared/components/ui/button'
import { formatPrice } from '@shared/lub/formatPrice'
import { ColorPicker } from '@shared/components/ui/ColorPicker/ColorPicker'
import { CardItem } from '@shared/components/ui/CardItem/CardItem'
import { Space } from '@shared/components/ui/Space'

export function ViewProductMobile({ data }) {
	const { promotion, price, title, rating, colors } = data
	const [currentColor, setCurrentColor] = useState(colors[0])
	return (
		<CardItem className={s.container}>
			<div className={s.img}></div>
			<Space h={10} />
			<div>
				<Rating initialValue={rating || 0} readonly allowFraction size={20} />
				<Space h={10} />
				<Title size={'sm-18'}>{title}</Title>
				<Space h={20} />

				<ColorPicker
					colors={colors}
					currentColor={currentColor}
					onChange={setCurrentColor}
				/>
				<Space h={20} />

				<div className={s.price}>
					{promotion && (
						<div className={s.promotionWrapper}>
							<Text size={'sm-12'} className={s.oldPrice}>
								{formatPrice(price + promotion)} сом
							</Text>
							<div className={s.promotion}>
								-{Math.round(((price + promotion - price) / price) * 100)}%
							</div>
						</div>
					)}
					<Title size={'sm-16'}>{formatPrice(price)} сом</Title>
				</div>
				<Space h={10} />

				<div>
					<AppButton className={s.btn} variant={'button'}>
						Купить
					</AppButton>
				</div>
			</div>
		</CardItem>
	)
}
