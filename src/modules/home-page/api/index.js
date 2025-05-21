import { $api } from '../../../services/api'

export const homeProductApi = $api.injectEndpoints({
	endpoints: (build) => ({
		getHomeProduct: build.query({
			query: () => ({
				url: '/product/all/',
				method: 'GET',
			}),
		}),
	}),
})
export const { useGetHomeProductQuery } = homeProductApi
