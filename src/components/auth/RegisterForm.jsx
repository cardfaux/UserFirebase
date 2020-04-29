import React from 'react';
import { useForm } from 'react-hook-form';

export default function RegisterForm() {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type='text'
				placeholder='name'
				name='name'
				ref={register({ required: true })}
			/>
			<input
				type='email'
				placeholder='email'
				name='email'
				ref={register({ required: true })}
			/>
			<input
				type='password'
				placeholder='password'
				name='password'
				ref={register({ required: true })}
			/>
			<input
				type='password'
				placeholder='confirm password'
				name='password2'
				ref={register({ required: true })}
			/>

			<input type='submit' />
		</form>
	);
}
