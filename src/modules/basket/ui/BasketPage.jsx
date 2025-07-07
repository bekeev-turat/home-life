import { CardItem } from '@shared/components/ui/CardItem/CardItem'
import { InputCounter } from '@shared/components/ui/input'
import { Space } from '@shared/components/ui/Space'
import { Text, Title } from '@shared/components/ui/Text'
import { useScreenWidth } from '@shared/lub/useScreenWidth'
import React from 'react'
import { basketProducts } from '../api'
import s from './BasketPage.module.scss'
import { ProductBasket } from '@shared/components/ui/product-components'
import { CardOrder } from '../../../shared/components/ui/CardOrder/CardOrder'

export function BasketPage() {
	const { isMobile } = useScreenWidth()
	return (
		<div>
			<Title size={isMobile ? 'sm-18' : 'xl-36'}>Просмотр корзины</Title>
			<Space h={30} />
			<div className={s.wrapper}>
				<div className={s.productList}>
					{basketProducts.products.map((product) => (
						<ProductBasket product={product} key={product.id} />
					))}
				</div>
				<div>
					<CardOrder
						quantity={basketProducts.allCount}
						totalPrice={basketProducts.totalPrice}
					/>
				</div>
			</div>
		</div>
	)
}
