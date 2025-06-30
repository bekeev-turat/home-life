import { BannerImg } from '@shared/assets/imgs/BannerImg.jsx'
import { AppLink } from '@shared/components/ui/AppLink/index.js'
import { ProductCard } from '@shared/components/ui/product-components/index.js'
import { Title } from '@shared/components/ui/Text/index.js'

import s from './ProductOfTheDay.module.scss'

export function ProductOfTheDay({ dayProduct }) {
	return (
		<div className={s.container}>
			<div className={s.link}>
				<AppLink size='md-16'>Телевизоры</AppLink>
				<AppLink size='md-16'>Бытовая техника</AppLink>
				<AppLink size='md-16'>Встраиваемая бытовая техника</AppLink>
				<AppLink size='md-16'>Мелкая бытовая техника</AppLink>
			</div>

			<div className={s.img}>
				<BannerImg />
			</div>

			<div className={s.product}>
				<Title size='md-20'>Товар дня</Title>
				<ProductCard data={dayProduct} />
			</div>
		</div>
	)
}
