import { ProductList } from '@shared/components/ui/product-components'
import { Space } from '@shared/components/ui/Space'
import { Title } from '@shared/components/ui/Text'
import React from 'react'

export default function HomeList({product, title}) {
	return (
		<>
			<Title>{title}</Title>
			<Space h={30} />
			<ProductList data={product} />
			<Space h={60} />
		</>
	)
}
