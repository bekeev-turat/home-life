import React from 'react'
import s from './SignIn.module.scss'
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

export function SignIn() {
	const { isMobile } = useScreenWidth()
	return (
		<div className={s.wrapper}>
			<Title size={isMobile ? 'sm-18' : 'xl-36'}>Войти</Title>
			<Space h={5} />
			<div className={s.subLink}>
				<Text size={'sm-14'}> Нет учетной записи?</Text>
				<AppLink link={'/auth/registration'} color={'blue'}>
					Создайте его!
				</AppLink>
			</div>
			<Space h={30} />

			<form className={s.form}>
				<Input type='email' placeholder='Ваша учетная запись*' />
				<Space h={20} />
				<PasswordInput />

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
