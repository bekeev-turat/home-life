import { Skeleton } from '@shared/components/ui/Skeleton'
import s from './HomeBanner.module.scss'

export const HomeBanner = ({ img, loading }) => {
	return (
		<div className={s.container}>
			{loading ? (
				<Skeleton className={s.skeleton} />
			) : (
				<img src={img} alt='banner' loading='lazy' />
			)}
		</div>
	)
}
