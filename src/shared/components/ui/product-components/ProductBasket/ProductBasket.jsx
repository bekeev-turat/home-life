import React, { useState } from 'react'
import s from './ProductBasket.module.scss'
import { formatPrice } from '@shared/lub/formatPrice'
import { Text, Title } from '../../Text'
import { InputCounter } from '../../input'
import { CardItem } from '../../CardItem/CardItem'
import { useScreenWidth } from '@shared/lub/useScreenWidth'

export function ProductBasket({ product }) {
	const [quantity, setQuantity] = useState(product.count)
	const { isMobile } = useScreenWidth()
	return (
		<CardItem className={s.basketItem} key={product.id}>
			<span className={s.close}>+</span>
			<div className={s.img}></div>
			<div className={isMobile ? s.contentMobile : s.content}>
				<Text size={'sm-14'}>{product.title}</Text>
				<Text size={'sm-12'}>Артикул товара: {product.id}</Text>
				<InputCounter value={quantity} onChange={setQuantity} />
				<div className={s.price}>
					<Title size={'sm-18'}>{formatPrice(product.price)}</Title>
					<Text size={'sm-14'} className={s.promotion}>
						{formatPrice(product.promotion + product.price)}
					</Text>
				</div>
			</div>
		</CardItem>
	)
}
