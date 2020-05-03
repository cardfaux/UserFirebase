/* eslint-disable no-useless-escape */
import React from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import GoogleLogin from '../../components/auth/socialLogin/GoogleLogin';
import GithubLogin from '../../components/auth/socialLogin/GithubLogin';

const useStyles = makeStyles((theme) => ({
	divider: {
		marginTop: '2rem',
		marginBottom: '2rem',
		backgroundColor: 'black',
	},
	login: {
		border: 'none',
		fontSize: 'x-large',
		color: 'white',
		backgroundColor: '#0069d9',
		'&:hover': {
			backgroundColor: '#0062cc',
			border: '1px solid #0069d9',
			boxShadow: 'none',
			transition: 'background-color 300ms linear',
			cursor: 'pointer',
		},
	},
}));

const LoginForm = (props) => {
	const classes = useStyles();
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
				<button type='submit' className={classes.login}>
					Login
				</button>
				<Divider className={classes.divider} variant='fullWidth' />
				<GoogleLogin />
				<GithubLogin />
			</form>
		</div>
	);
};

export default LoginForm;
