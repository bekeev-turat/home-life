import { ProductCard } from '../ProductCard/ProductCard'
import s from './ProductList.module.scss'

export function ProductList({ data, children }) {
	return (
		<div className={s.container}>
			{children}
			{data.map((el) => (
				<ProductCard key={el.id} data={el} />
			))}
		</div>
	)
}
