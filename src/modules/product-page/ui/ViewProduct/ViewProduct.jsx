import React, { useState } from 'react'
import s from './ViewProduct.module.scss'
import { Text, Title } from '@shared/components/ui/Text'
import { Rating } from 'react-simple-star-rating'
import { InputCounter } from '@shared/components/ui/input'
import { AppButton } from '@shared/components/ui/button'
import { formatPrice } from '@shared/lub/formatPrice'
import { ColorPicker } from '@shared/components/ui/ColorPicker/ColorPicker'
import { Space } from '@shared/components/ui/Space'

export function ViewProduct({ data }) {
	const { promotion, price, title, rating, colors, id } = data

	const [productCount, setProductCount] = useState(1)
	const [currentColor, setCurrentColor] = useState(colors[0])

	return (
		<div className={s.container}>
			<div className={s.img}></div>
			<div className={s.content}>
				<Title size={'md-20'}>{title}</Title>
				<Space h={10} />
				<Rating initialValue={rating || 0} readonly allowFraction size={20} />
				<ColorPicker
					colors={colors}
					currentColor={currentColor}
					onChange={setCurrentColor}
				/>
				<div className={s.price}>
					{promotion && (
						<div className={s.promotionWrapper}>
							<Text size={'sm-16'} className={s.oldPrice}>
								{formatPrice(price + promotion)} сом
							</Text>
							<div className={s.promotion}>
								-{Math.round(((price + promotion - price) / price) * 100)}%
							</div>
						</div>
					)}
					<Title size={'md-28'}>{formatPrice(price)} сом</Title>
				</div>
				<InputCounter value={productCount} onChange={setProductCount} />
				<Text size={'sm-14'}>Артикул товара: {id}</Text>
				<div>
					<AppButton className={s.btn} variant={'button'}>
						Перейти в корзину
					</AppButton>
				</div>
			</div>
		</div>
	)
}
