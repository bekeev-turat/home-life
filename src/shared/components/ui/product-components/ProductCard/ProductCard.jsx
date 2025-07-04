import { Rating } from 'react-simple-star-rating'

import { AppButton } from '../../button'
import { Title, Text } from '../../Text'
import s from './ProductCard.module.scss'
import PriceBlock from '../../PriceBlock/PriceBlock'
import { formatPrice } from '@shared/lub/formatPrice'

export function ProductCard({ data }) {
	const { img, title, price, promotion, rating } = data
	return (
		<div className={s.container}>
			<img src={img} alt={title} />

			<div className={s.content}>
				<Rating initialValue={rating || 0} readonly allowFraction size={20} />

				<Title size='sm-14' className={s.title}>
					{title}
				</Title>

				<div className={s.price}>
					<div>
						{promotion && (
							<Text size='sm-14' className={s.oldPrice}>
								{formatPrice(promotion)} сом
							</Text>
						)}
						<Title size='sm-18'>{formatPrice(price)} сом</Title>
					</div>
					{promotion && (
						<div className={s.promotion}>
							-{Math.round(((price - promotion) / price) * 100)}%
						</div>
					)}
				</div>

				<AppButton variant='button' className={s.btn}>
					Купить
				</AppButton>
			</div>
		</div>
	)
}
