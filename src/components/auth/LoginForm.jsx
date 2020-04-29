import React from 'react';
import { useForm } from 'react-hook-form';

export default function LoginForm() {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type='email'
				placeholder='email'
				name='email'
				ref={register({ required: true })}
			/>
			<input
				type='text'
				placeholder='password'
				name='password'
				ref={register({ required: true })}
			/>

			<input type='submit' />
		</form>
	);
}
