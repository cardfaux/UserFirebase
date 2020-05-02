import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchServiceById } from '../app/Redux/actions/index';
import { Redirect } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import withAuthorization from '../components/hoc/withAuthorization';
import UpdateService from '../components/UpdateService';
import { createService } from '../app/Redux/actions/index';
import LoadingSpinner from '../components/LoadingSpinner';

const ServiceDetailUpdate = (props) => {
	const { fetchServiceById, isFetching, service } = props;
	const [redirect, setRedirect] = useState(false);
	const { addToast } = useToasts();
	const { serviceId } = useParams();

	useEffect(() => {
		fetchServiceById(serviceId);
	}, [serviceId, fetchServiceById]);

	const handleSubmit = async (formData) => {
		try {
			const dataSent = await createService(formData, props.auth.user.uid);
			// const dataSent = await serviceUpdate(service.id, formData);
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
	if (isFetching || serviceId !== service.id) {
		return <LoadingSpinner />;
	}

	return (
		<Card className={classes.root}>
			<CardContent>
				<h1>Update Service Form</h1>
				<UpdateService
					details={service.details}
					weight={service.weight}
					reps={service.reps}
					sets={service.sets}
					image={service.image}
					title={service.title}
					onFormData={handleSubmit}
				/>
			</CardContent>
		</Card>
	);
};

const mapStateToProps = (state) => ({
	service: state.selectedService.item,
	isFetching: state.selectedService.isFetching,
});

export default withAuthorization(
	connect(mapStateToProps, { fetchServiceById })(ServiceDetailUpdate)
);
