import clsx from 'clsx'
import { Accordion } from '@shared/components/ui/accordion'
import s from './CatalogFilter.module.scss'
import { Checkbox } from '@shared/components/ui/checkbox/ui/Checkbox'
import { Input } from '@shared/components/ui/input/ui/Input/Input'
import { AppButton } from '@shared/components/ui/button/ui/AppButton'
export function CatalogFilter({ filters, className }) {
	console.log(filters)

	return (
		<div className={clsx(s.container, className)}>
			<Accordion className={s.acc} title={'Бренд'} isOpenAcc={true}>
				{filters.brand.map((el, i) => (
					<Checkbox key={i}>{el}</Checkbox>
				))}
			</Accordion>
			<hr />
			<Accordion className={s.inputWrapper} title={'Цена'}>
				<Input placeholder='От' type='number' />
				<Input placeholder='До' type='number' />
			</Accordion>
			<hr />
			<Accordion className={s.acc} title={'Тип пылесоса'}>
				{filters.type.map((el, i) => (
					<Checkbox key={i}>{el}</Checkbox>
				))}
			</Accordion>
			<hr />
			<Accordion className={s.acc} title={'Потребляемая мощность'}>
				{filters.power.map((el, i) => (
					<Checkbox key={i}>{el}</Checkbox>
				))}
			</Accordion>
			<hr />
			<AppButton variant='button' className={s.submit}>
				Отправить
			</AppButton>
			<AppButton variant='border'>Сбросить</AppButton>
		</div>
	)
}
