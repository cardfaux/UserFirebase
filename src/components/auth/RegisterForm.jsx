/* eslint-disable no-useless-escape */
import React from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import GoogleLogin from '../../components/auth/socialLogin/GoogleLogin';
import GithubLogin from '../../components/auth/socialLogin/GithubLogin';

import { sameAs } from '../../app/utils/validators';

const useStyles = makeStyles((theme) => ({
	divider: {
		marginTop: '2rem',
		marginBottom: '2rem',
		backgroundColor: 'black',
	},
}));

const RegisterForm = (props) => {
	const classes = useStyles();
	const { register, handleSubmit, errors, getValues } = useForm();

	return (
		<div className='register-form'>
			<form onSubmit={handleSubmit(props.onRegister)}>
				<div className='field'>
					<div className='control'>
						<input
							ref={register({
								required: true,
								pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							})}
							name='email'
							className='input is-large'
							type='email'
							placeholder='Your Email'
							autoComplete='email'
						/>
						{errors.email && (
							<div className='form-error'>
								{errors.email.type === 'required' && (
									<span className='help is-danger'>Email is required</span>
								)}
								{errors.email.type === 'pattern' && (
									<span className='help is-danger'>
										Email address is not valid
									</span>
								)}
							</div>
						)}
					</div>
				</div>
				<div className='field'>
					<div className='control'>
						<input
							ref={register({ required: true, minLength: 10 })}
							name='fullName'
							className='input is-large'
							type='text'
							placeholder='Full Name'
						/>
						{errors.fullName && (
							<div className='form-error'>
								{errors.fullName.type === 'required' && (
									<span className='help is-danger'>Name is required</span>
								)}
								{errors.fullName.type === 'minLength' && (
									<span className='help is-danger'>
										Minimum length is 10 characters
									</span>
								)}
							</div>
						)}
					</div>
				</div>
				<div className='field'>
					<div className='control'>
						<input
							ref={register({ required: true, minLength: 6 })}
							name='password'
							className='input is-large'
							type='password'
							placeholder='Your Password'
							autoComplete='current-password'
						/>
						{errors.password && (
							<div className='form-error'>
								{errors.password.type === 'required' && (
									<span className='help is-danger'>Password is required</span>
								)}
								{errors.password.type === 'minLength' && (
									<span className='help is-danger'>
										Minimum length is 6 characters
									</span>
								)}
							</div>
						)}
					</div>
				</div>
				<div className='field'>
					<div className='control'>
						<input
							ref={register({
								required: true,
								minLength: 6,
								validate: { sameAs: sameAs(getValues, 'password') },
							})}
							name='passwordConfirmation'
							className='input is-large'
							type='password'
							placeholder='Repeat Password'
							autoComplete='current-password'
						/>
						{errors.passwordConfirmation && (
							<div className='form-error'>
								{errors.passwordConfirmation.type === 'required' && (
									<span className='help is-danger'>
										Password confirmation is required
									</span>
								)}
								{errors.passwordConfirmation.type === 'minLength' && (
									<span className='help is-danger'>
										Minimum length is 6 characters
									</span>
								)}
								{errors.passwordConfirmation.type === 'sameAs' && (
									<span className='help is-danger'>
										Password confirmation is not the same as password
									</span>
								)}
							</div>
						)}
					</div>
				</div>
				<button type='submit' className='button-primary'>
					Register
				</button>
				<Divider className={classes.divider} variant='fullWidth' />
				<GoogleLogin />
				<GithubLogin />
			</form>
		</div>
	);
};

export default RegisterForm;
