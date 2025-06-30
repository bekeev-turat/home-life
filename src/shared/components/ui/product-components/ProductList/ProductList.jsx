import { ProductCard } from '../ProductCard/ProductCard'
import s from './ProductList.module.scss'

export function ProductList({ data }) {
	return (
		<div className={s.container}>
			{data.map((el) => (
				<ProductCard key={el.id} data={el} />
			))}
		</div>
	)
}
