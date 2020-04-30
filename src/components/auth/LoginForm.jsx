/* eslint-disable no-useless-escape */
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = (props) => {
	const { register, handleSubmit } = useForm();

	return (
		<div className='register-form'>
			<form onSubmit={handleSubmit(props.onLogin)}>
				<div className='field'>
					<div className='control'>
						<input
							ref={register}
							name='email'
							className='input is-large'
							type='email'
							placeholder='Your Email'
							autoComplete='email'
						/>
					</div>
				</div>
				<div className='field'>
					<div className='control'>
						<input
							ref={register}
							name='password'
							className='input is-large'
							type='password'
							placeholder='Your Password'
							autoComplete='current-password'
						/>
					</div>
				</div>
				<button type='submit' className='button-primary'>
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
