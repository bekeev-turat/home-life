import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy } from 'react'
import { ROUTES } from '../../constants/navigation'
import { Layout } from '../layouts/Layout'

// Ленивая загрузка страниц
const HomePage = lazy(() => import('../../modules/home-page'))
const CatalogPage = lazy(() => import('../../modules/catalog-page'))
const ProductPage = lazy(() => import('../../modules/product-page'))
const BasketPage = lazy(() => import('../../modules/basket'))
const OrderPage = lazy(() => import('../../modules/order'))
const SignUp = lazy(() => import('../../modules/auth/sign-up'))
const SignIn = lazy(() => import('../../modules/auth/sign-in'))

export const router = createBrowserRouter([
	{
		path: ROUTES.Base,
		element: <Layout />,
		children: [
			{ path: ROUTES.Home, element: <HomePage /> },
			{ path: ROUTES.Catalog, element: <CatalogPage /> },
			{ path: ROUTES.CatalogItem, element: <ProductPage /> },
			{ path: ROUTES.Basket, element: <BasketPage /> },
			{ path: ROUTES.Order, element: <OrderPage /> },
			{ path: ROUTES.SignUp, element: <SignUp /> },
			{ path: ROUTES.SignIn, element: <SignIn /> },
		],
	},
])
