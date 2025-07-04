import {
	useGetHomeProductQuery,
	PromotionData,
	ProductData,
} from '@modules/home-page/api'
import { Space } from '@shared/components/ui/Space'
import { ProductOfTheDay } from '../product-of-the-day/ProductOfTheDay'
import s from './Home.module.scss'
import { Title, Text } from '@shared/components/ui/Text'
import HomeList from '../home-list/HomeList'
import { useScreenWidth } from '@shared/lub/useScreenWidth'
import { useScrollToElementFromQuery } from '@shared/lub/useScrollToElementFromQuery'

export function Home() {
	const { isMobile } = useScreenWidth()
	useScrollToElementFromQuery()

	const { data, isLoading, error } = useGetHomeProductQuery()

	console.log(data, isLoading, error)

	return (
		<div>
			<ProductOfTheDay
				dayProduct={{
					id: '2',
					img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FWF2judaujT30K9sMf-tZFhMWpgP6xCemw&s',
					title: 'Пылесос Tefal Super',
					price: 19990,
					promotion: 17990,
				}}
			/>
			<Space h={80} />

			<HomeList product={ProductData} title='Новинки' />
			<HomeList product={ProductData} title='Популярные' />
			<HomeList product={PromotionData} title='Акции' />

			<section className={s.about} id='about'>
				<Title size={isMobile ? 'md-18' : 'xl-36'}>О нас:</Title>
				{!isMobile ? <Space h={30} /> : <Space h={20} />}
				<Text className={'sm-14'}>
					Интернет-магазин "MyShop.ru" – лучшие товары по низким ценам!
					<br />
					<br /> Мы рады предложить вам недорогие, но качественные товары с
					подробными описаниями, характеристиками и фотографиями. У нас Вы
					можете купить замечательные товары: технику, электронику, одежду,
					обувь, игрушки, книги и многое другое в вашем регионе по ценам
					производителей и без наценки.
					<br />
					<br /> Продажа большого ассортимента разнообразных товаров – основная
					специализация нашего интернет-магазина. Мы доставим ваш заказ
					бесплатно в любой уголок мира, осуществим подробную консультацию по
					товарам и поможем с выбором. <br />
					Магазин "MyShop.ru" предлагает Вам купить качественную и доступную
					технику, электронику, одежду, обувь, игрушки, книги и многое другое с
					доставкой! Все виды современных товаров от эконом класса до более
					дорогих представлены в нашем каталоге.
					<br /> Вы можете купить любые товары в вашем городе: технику,
					электронику, одежду, обувь, игрушки, книги и многое другое.
				</Text>
			</section>
			<Space h={70} />
		</div>
	)
}
