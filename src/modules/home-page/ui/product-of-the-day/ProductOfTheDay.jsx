import { AppLink } from '@shared/components/ui/AppLink/index.js'
import { ProductCard } from '@shared/components/ui/product-components/index.js'
import { Title } from '@shared/components/ui/Text/index.js'

import s from './ProductOfTheDay.module.scss'
import { HomeBanner } from '../HomeBanner/HomeBanner'
import BannerImg from '@shared/assets/imgs/HomeBanner.jpeg'
import { useScreenWidth } from '@shared/lub/useScreenWidth'

export function ProductOfTheDay({ dayProduct }) {
	const { isMobile } = useScreenWidth()
	return (
		<div className={s.container}>
			{!isMobile && (
				<div className={s.link}>
					<AppLink size='md-16'>Телевизоры</AppLink>
					<AppLink size='md-16'>Бытовая техника</AppLink>
					<AppLink size='md-16'>Встраиваемая бытовая техника</AppLink>
					<AppLink size='md-16'>Мелкая бытовая техника</AppLink>
				</div>
			)}
			<HomeBanner img={BannerImg} />

			<div className={s.product}>
				<Title size='md-20'>Товар дня</Title>
				<ProductCard data={dayProduct} />
			</div>
		</div>
	)
}
