import { Title } from '@shared/components/ui/Text'
import { useScreenWidth } from '@shared/lub/useScreenWidth'
import s from './Reviews.module.scss'
import React, { useState } from 'react'
import { Space } from '@shared/components/ui/Space'
import { AddComment, Comment } from '../Comment'

export default function Reviews({ reviews }) {
	const [openComment, setOpenComment] = useState(false)
	const { isMobile } = useScreenWidth()

	return (
		<div>
			<div className={s.header}>
				<Title size={isMobile ? 'sm-16' : 'md-28'}>Отзывы покупателей</Title>
				<span className={s.btn} onClick={() => setOpenComment(true)}>
					Написать отзыв
				</span>
			</div>
			<Space h={40} />
			{reviews.map((review) => (
				<Comment review={review} />
			))}
			<Space h={20} />
			{openComment && (
				<AddComment onClose={setOpenComment} variant={'review'} />
			)}
			<span className={s.btn}> Читать все отзывы</span>
		</div>
	)
}
