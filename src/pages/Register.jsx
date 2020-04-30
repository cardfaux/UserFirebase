import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import withNoAuthorization from '../components/hoc/withNoAuthorization';
import { register } from '../app/Redux/actions/index';
import RegisterForm from '../components/auth/RegisterForm';

const Register = () => {
	const [redirect, setRedirect] = useState(false);
	const { addToast } = useToasts();

	const registerUser = async (loginData) => {
		try {
			const registerUser = await register(loginData);
			if (registerUser) {
				addToast('Registered Successfully', { appearance: 'success' });
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
				<h1>Registration Form</h1>
				<RegisterForm onRegister={registerUser} />
			</CardContent>
		</Card>
	);
};

export default withNoAuthorization(Register);
