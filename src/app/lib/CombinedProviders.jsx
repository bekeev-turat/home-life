import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { store } from '../store/store'
import { router } from './router'

export function CombinedProviders() {
	return (
		<>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</>
	)
}
