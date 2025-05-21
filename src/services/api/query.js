import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import TokenStorageService from '.././../shared/lub/TokenService'
import { apiMap } from '../../constants/api'

export const $baseQuery = fetchBaseQuery({
	baseUrl: apiMap.base,
	// credentials: 'include',

	prepareHeaders: (headers) => {
		const token = TokenStorageService.getToken()

		if (token) {
			headers.set('Authorization', `Bearer ${token}`)
		}
		return headers
	},
})

const cache = {}

export const $baseQueryWithRefresh = async (args, api, extraOptions) => {
	const cacheKey =
		typeof args === 'string' ? args : `${args.method} ${args.url}`
	if (typeof args === 'string') {
		cache[cacheKey] = $baseQuery(args, api, extraOptions)
	} else if (!(cacheKey in cache)) {
		cache[cacheKey] = $baseQuery(args, api, extraOptions)
	}

	const result = await cache[cacheKey]

	if (result.error && result.error.status === 401) {
		const access = TokenStorageService.getToken()

		const refresh = await $baseQuery(
			{
				url: apiMap.refresh,
				method: 'POST',
				body: {
					access,
				},
			},
			api,
			extraOptions,
		)

		if (refresh.data && refresh.data.access) {
			TokenStorageService.setToken(refresh.data.access)
		} else {
			TokenStorageService.clearToken()
		}
	}

	delete cache[cacheKey]

	return result
}
