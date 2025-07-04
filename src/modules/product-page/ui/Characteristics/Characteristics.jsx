import { Space } from '@shared/components/ui/Space'
import { Text, Title } from '@shared/components/ui/Text'
import { useScreenWidth } from '@shared/lub/useScreenWidth'
import s from './Characteristics.module.scss'
import React from 'react'

export function Characteristics({ data }) {
	const { isMobile } = useScreenWidth()
	return (
		<div className={s.container}>
			<Title size={isMobile ? 'sm-16' : 'md-20'}>Основные характеристики</Title>
			<Space h={isMobile ? 20 : 30} />
			<ul className={s.list}>
				{data.map((el, i) => (
					<li key={i}>
						<div className={s.item}>
							<Text size={isMobile ? 'sm-12' : 'sm-14'}>{el.label}</Text>
							<Text size={isMobile ? 'sm-12' : 'sm-14'}>{el.value}</Text>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
