import { Text, Title } from '@shared/components/ui/Text'
import { useScreenWidth } from '@shared/lub/useScreenWidth'
import React from 'react'
import s from './Description.module.scss'
import { Space } from '@shared/components/ui/Space'

export function Description({ descriptions }) {
	const { isMobile } = useScreenWidth()
	return (
		<div>
			<Title size={isMobile ? 'sm-16' : 'md-28'}>О товаре</Title>
						<Space h={isMobile ? 10 : 70} />

			<div className={s.wrapper}>
				{descriptions.map((descItem, i) => (
					<div key={i} className={s.description}>
						<Title size={isMobile ? 'sm-14' : 'md-20'}>{descItem.title}</Title>
						<Space h={isMobile ? 10 : 22} />
						<Text size={isMobile ? 'sm-12' : 'sm-14'}>{descItem.text}</Text>
					</div>
				))}
			</div>
		</div>
	)
}
