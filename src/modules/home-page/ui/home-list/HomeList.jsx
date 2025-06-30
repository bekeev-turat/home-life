import { ProductList } from '@shared/components/ui/product-components'
import { Space } from '@shared/components/ui/Space'
import { Title } from '@shared/components/ui/Text'
import { useScreenWidth } from '@shared/lub/useScreenWidth'
import React from 'react'

export default function HomeList({ product, title }) {
	const { isMobile } = useScreenWidth()

	return (
		<>
			<Title>{title}</Title>
			{!isMobile ? <Space h={30} /> : <Space h={20} />}

			<ProductList data={product} />
			{!isMobile ? <Space h={60} /> : <Space h={40} />}
		</>
	)
}
