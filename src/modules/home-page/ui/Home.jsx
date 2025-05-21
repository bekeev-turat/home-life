import ProductOfTheDay from '../../product-of-the-day'
import { useGetHomeProductQuery } from '../api'

export function Home() {
	const { data, isLoading, error } = useGetHomeProductQuery()

	console.log(data, isLoading, error)

	return (
		<>
			<ProductOfTheDay />
		</>
	)
}
