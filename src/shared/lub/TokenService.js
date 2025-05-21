// TokenService.js
const TokenStorageService = {
	getToken: () => {
		try {
			const tokenRaw = localStorage.getItem('token')
			if (!tokenRaw) return null

			const tokenObj = JSON.parse(tokenRaw)
			return tokenObj?.access || null
		} catch (e) {
			console.error('Ошибка при получении токена:', e)
			return null
		}
	},

	setToken: (access) => {
		localStorage.setItem('token', JSON.stringify({ access }))
	},

	clearToken: () => {
		localStorage.removeItem('token')
	},
}

export default TokenStorageService
