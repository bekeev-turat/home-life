import { Outlet } from 'react-router-dom'
import '../styles/global.scss'
import Header from '@modules/header'
import { Footer } from '@modules/footer'
import { useScreenWidth } from '@shared/lub/useScreenWidth'
import { HeaderMobile } from '@modules/header/ui/HeaderMobile/HeaderMobile'

export const Layout = () => {
	const { isMobile } = useScreenWidth()
	return (
		<>
			{isMobile ? <HeaderMobile /> : <Header />}
			<main className='container'>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
