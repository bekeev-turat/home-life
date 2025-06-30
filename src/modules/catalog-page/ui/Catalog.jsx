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
			<ProductList data={catalogData.product}>
				{!isMobile && (
					<div className={s.filterWrapper}>
						<CatalogFilter filters={catalogData.filters} />
					</div>
				)}
			</ProductList>
		</div>
	)
}
