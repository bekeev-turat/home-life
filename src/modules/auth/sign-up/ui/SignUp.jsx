import React from 'react'
import s from './SignUp.module.scss'
import { Text, Title } from '@shared/components/ui/Text'
import { useScreenWidth } from '@shared/lub/useScreenWidth'
import { AppLink } from '@shared/components/ui/AppLink'
import { Input } from '@shared/components/ui/input'
import { AppButton } from '@shared/components/ui/button'
import GoogleIcon from '@shared/assets/icons/GoogleIcon'
import { Checkbox } from '@shared/components/ui/input'
import { Space } from '@shared/components/ui/Space'
import { InputSelect } from '@shared/components/ui/input/ui/InputSelect/InputSelect'
import { PasswordInput } from '@shared/components/ui/input/ui/PasswordInput/PasswordInput'

export function SignUp() {
	const { isMobile } = useScreenWidth()
	return (
		<div className={s.wrapper}>
			<Title size={isMobile ? 'sm-18' : 'xl-36'}>Зарегистрироваться </Title>
			<Space h={5} />
			<div className={s.subLink}>
				<Text size={'sm-14'}> У вас уже есть учетная запись?</Text>
				<AppLink link={'/auth/login'} color={'blue'}>
					Войти
				</AppLink>
			</div>
			<Space h={30} />

			<form className={s.form}>
				<Input placeholder='Ваша учетная запись*' />
				<Space h={20} />
				<PasswordInput />
				<Space h={20} />

				<Input placeholder='Подтвердите пароль*' />
				<Space h={20} />

				<div className={s.flex}>
					<InputSelect defaultValue={'Пол'} options={['Мужчина', 'Женщина']} />
					<Input placeholder='Возраст' />
				</div>
				<Space h={10} />

				<div className={s.line}>
					<hr />
					<span>или</span>
					<hr />
				</div>
				<Space h={10} />

				<AppButton className={s.google} variant={'border'}>
					<GoogleIcon />
					Войти с помощью Google
				</AppButton>

				<Space h={10} />

				<Checkbox>Я согласен с условиями и политикой.</Checkbox>

				<Space h={30} />

				<AppButton variant={'button'}>Войти</AppButton>
				<Space h={20} />

				<AppButton variant={'border'}>Назад</AppButton>
			</form>
		</div>
	)
}
