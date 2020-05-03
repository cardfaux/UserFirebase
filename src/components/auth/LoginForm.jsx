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
				<button type='submit' className='button-primary'>
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
