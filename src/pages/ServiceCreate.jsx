import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import withAuthorization from '../components/hoc/withAuthorization';
import CreateService from '../components/CreateService';
import { createService } from '../app/Redux/actions/index';

const ServiceCreate = (props) => {
	const [redirect, setRedirect] = useState(false);
	const { addToast } = useToasts();

	const handleSubmit = async (formData) => {
		try {
			const dataSent = await createService(formData, props.auth.user.uid);
			if (dataSent) {
				addToast('Saved Successfully', { appearance: 'success' });
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
				<h1>Create Service Form</h1>
				<CreateService onFormData={handleSubmit} />
			</CardContent>
		</Card>
	);
};

export default withAuthorization(ServiceCreate);
