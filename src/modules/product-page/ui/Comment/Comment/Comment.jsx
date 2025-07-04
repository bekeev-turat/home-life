import React, { useState } from 'react'
import s from './Comment.module.scss'
import { CardItem } from '@shared/components/ui/CardItem/CardItem'
import { useScreenWidth } from '@shared/lub/useScreenWidth'
import { AddComment } from '../AddComment/AddComment'
import { Space } from '@shared/components/ui/Space'
import { Rating } from 'react-simple-star-rating'
import { Text } from '@shared/components/ui/Text'
export function Comment({ review }) {
	const [openComment, setOpenComment] = useState(false)
	const date = new Date(review.date)

	const { isMobile } = useScreenWidth()
	return (
		<CardItem className={s.comment}>
			<div className={s.header}>
				<div>
					<Text weight={'w500'} size={'sm-16'}>
						{review.name}
					</Text>
					<Space h={8} />

					<Text size={'sm-14'}>
						{date.toLocaleDateString('ru-RU', {
							day: '2-digit',
							month: 'long',
							year: 'numeric',
						})}
					</Text>
				</div>

				<Space h={5} />
				<Rating
					initialValue={review.rating || 0}
					readonly
					allowFraction
					size={25}
				/>
			</div>

			<Space h={20} />

			<Text size={isMobile ? 'sm-12' : 'sm-14'}>{review.text}</Text>
			<Space h={20} />

			<span className={s.btn} onClick={() => setOpenComment(true)}>Ответить</span>
			<Space h={20} />
			{openComment && (
				<AddComment title='Напишите свой отзыв' onClose={setOpenComment} />
			)}
		</CardItem>
	)
}
