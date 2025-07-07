import { ProductList } from '@shared/components/ui/product-components'
import { Space } from '@shared/components/ui/Space'
import { Title } from '@shared/components/ui/Text'
import { CatalogFilter } from '../../catalog-filter/ui/CatalogFilter'
import s from './Catalog.module.scss'

import { catalogData } from '../api'
import { useScreenWidth } from '@shared/lub/useScreenWidth'
import { catalogs } from '@shared/const/catalogs'
import { useParams } from 'react-router-dom'

export function Catalog() {
	const { catalog } = useParams()

	const { isMobile } = useScreenWidth()

	const catalogTitle = catalogs.filter((item) => item.label === catalog)

	return (
		<div className={s.wrapper}>
			<Title size={isMobile ? 'sm-18' : 'xl-36'}>
				{catalogTitle.length > 0 ? catalogTitle[0].value : 'Каталог'}
			</Title>
			<Space h={35} />
			<div className={s.container}>
				{!isMobile && <CatalogFilter filters={catalogData.filters} />}
				<ProductList data={catalogData.product} />
			</div>
		</div>
	)
}
