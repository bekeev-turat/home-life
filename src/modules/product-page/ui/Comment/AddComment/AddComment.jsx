import { Title } from '@shared/components/ui/Text'
import { useScreenWidth } from '@shared/lub/useScreenWidth'
import React, { useState } from 'react'
import s from './AddComment.module.scss'
import { Space } from '@shared/components/ui/Space'
import { AppButton } from '@shared/components/ui/button'
import { Rating } from 'react-simple-star-rating'

export function AddComment({ onClose, variant }) {
	const [comment, setComment] = useState('')
	const [rating, setRating] = useState(0)
	const { isMobile } = useScreenWidth()

	const title = variant === 'review' ? 'Напишите свой отзыв' : 'Ваш ответ'
	return (
		<form className={s.form}>
			<div className={s.header}>
				{variant === 'review' ? (
					<Title size={isMobile ? 'sm-16' : 'md-28'}>{title}</Title>
				) : (
					<Title size={isMobile ? 'sm-16' : 'sm-18'}>{title}</Title>
				)}
				<span className={s.close} onClick={() => onClose(false)}>
					+
				</span>
			</div>
			<Space h={isMobile ? 12 : 26} />
			{variant === 'review' && (
				<>
					<Rating
						initialValue={rating}
						size={34}
						allowFraction={false}
						onClick={(rate) => setRating(rate)}
						readonly={false}
					/>
					<Space h={isMobile ? 12 : 26} />
				</>
			)}
			<textarea
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			></textarea>
			<Space h={isMobile ? 20 : 28} />
			<div className={s.btnWrapper}>
				<AppButton variant={'button'} type={'submit'}>
					Разместить отзыв
				</AppButton>
			</div>
		</form>
	)
}
