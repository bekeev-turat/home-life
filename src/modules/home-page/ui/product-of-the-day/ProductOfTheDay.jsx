import { AppLink } from '@shared/components/ui/AppLink/index.js'
import { ProductCard } from '@shared/components/ui/product-components/index.js'
import { Title } from '@shared/components/ui/Text/index.js'

import s from './ProductOfTheDay.module.scss'
import { HomeBanner } from '../HomeBanner/HomeBanner'
import BannerImg from '@shared/assets/imgs/HomeBanner.jpeg'
import { useScreenWidth } from '@shared/lub/useScreenWidth'
import { catalogs } from '@shared/const/catalogs'

export function ProductOfTheDay({ dayProduct }) {
	const { isMobile } = useScreenWidth()
	return (
		<div className={s.container}>
			<div className={s.innerWrapper}>
				{!isMobile && (
					<div className={s.link}>
						{catalogs.map((catalog) => (
							<AppLink size='md-16' link={`catalog?${catalog.label}`}>
								{catalog.value}
							</AppLink>
						))}
					</div>
				)}
				<HomeBanner img={BannerImg} />
			</div>

			<div className={s.product}>
				<Title size='md-20'>Товар дня</Title>
				<ProductCard data={dayProduct} />
			</div>
		</div>
	)
}
