import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy } from 'react'
import { ROUTES } from '../../constants/navigation'
import { Layout } from '../layouts/Layout'

// Ленивая загрузка страниц
const HomePage = lazy(() => import('../../modules/home-page'))
const CatalogPage = lazy(() => import('../../modules/catalog-page'))
const ProductPage = lazy(() => import('../../modules/product-page'))

export const router = createBrowserRouter([
	{
		path: ROUTES.Base,
		element: <Layout />,
		children: [
			{ path: ROUTES.Home, element: <HomePage /> },
			{ path: ROUTES.Catalog, element: <CatalogPage /> },
			{ path: ROUTES.CatalogItem, element: <ProductPage /> },
		],
	},
])
