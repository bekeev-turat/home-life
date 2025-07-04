import { Text, Title } from '@shared/components/ui/Text'
import React from 'react'
import { useParams } from 'react-router-dom'
import { ViewProduct } from '../ViewProduct/ViewProduct'
import { Characteristics } from '../Characteristics/Characteristics'
import Reviews from '../Reviews/Reviews'
import { ProductData } from '@modules/product-page/api'
import { Space } from '@shared/components/ui/Space'
import { useScreenWidth } from '@shared/lub/useScreenWidth'
import { ViewProductMobile } from '../ViewProductMobile/ViewProductMobile'
import { Description } from '../Description/Description'

export function ProductPage() {
	const { isMobile } = useScreenWidth()
	const { id } = useParams()
	const date = new Date()

	console.log(date.toJSON())

	return (
		<section>
			{!isMobile && <Title size={'md-28'}>Просмотр товара</Title>}

			{isMobile && <Text size={'sm-14'}>Артикул товара: {id}</Text>}
			<Space h={isMobile ? 20 : 30} />
			{isMobile ? (
				<ViewProductMobile data={ProductData.view} />
			) : (
				<ViewProduct data={ProductData.view} />
			)}
			<Space h={isMobile ? 40 : 90} />
			<Characteristics data={ProductData.characteristics} />
			<Space h={isMobile ? 40 : 90} />
			<Description descriptions={ProductData.descriptions} />
			<Space h={isMobile ? 40 : 90} />
			<Reviews reviews={ProductData.reviews} />
		</section>
	)
}
