import { ProductList } from '@shared/components/ui/product-components'
import { Space } from '@shared/components/ui/Space'
import { Title } from '@shared/components/ui/Text'
import { CatalogFilter } from '../../catalog-filter/ui/CatalogFilter'
import s from './Catalog.module.scss'

import { catalogData } from '../api'
import { useScreenWidth } from '@shared/lub/useScreenWidth'

export function Catalog() {
	const { isMobile } = useScreenWidth()

	return (
		<div className={s.wrapper}>
			<Title>Пылесосы</Title>
			<Space h={35} />
			<div className={s.container}>
				{!isMobile && <CatalogFilter filters={catalogData.filters} />}
				<ProductList data={catalogData.product} />
			</div>
		</div>
	)
}
