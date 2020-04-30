import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import withNoAuthorization from '../components/hoc/withNoAuthorization';
import LoginForm from '../components/auth/LoginForm';
import { login } from '../app/Redux/actions/index';

const Login = () => {
	const [redirect, setRedirect] = useState(false);
	const { addToast } = useToasts();

	const loginUser = async (loginData) => {
		try {
			const loginUser = await login(loginData);
			if (loginUser) {
				addToast('Logged In Successfully', { appearance: 'success' });
				setRedirect(true);
			}
		} catch (error) {
			addToast(error, { appearance: 'error' });
		}
	};

	const useStyles = makeStyles({
		root: {
			maxWidth: 500,
			margin: '6rem auto',
			textAlign: 'center',
		},
	});

	const classes = useStyles();
	if (redirect) return <Redirect to='/' />;

	return (
		<Card className={classes.root}>
			<CardContent>
				<h1>Login Form</h1>
				<LoginForm onLogin={loginUser} />
			</CardContent>
		</Card>
	);
};

export default withNoAuthorization(Login);
