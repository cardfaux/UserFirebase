import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLogById } from '../../app/Redux/actions/index';
import { Redirect } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import withAuthorization from '../../components/hoc/withAuthorization';
import UpdateLogItem from '../../components/logs/UpdateLogItem';
import { updateLog } from '../../app/Redux/actions/index';
import LoadingSpinner from '../../components/LoadingSpinner';

const LogDetailUpdate = (props) => {
	const { fetchLogById, isFetching, service, authUserId } = props;
	const [redirect, setRedirect] = useState(false);
	const { addToast } = useToasts();
	const { serviceId } = useParams();

	useEffect(() => {
		fetchLogById(serviceId);
	}, [serviceId, fetchLogById]);

	const handleSubmit = async (formData) => {
		// updateService(service.id, formData, props.auth.user.uid);
		// setRedirect(true);
		try {
			const dataUpdated = await updateLog(service.id, formData, authUserId);

			addToast('Updated Successfully', { appearance: 'success' });
			setRedirect(true);
			return dataUpdated;
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
				<UpdateLogItem
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
	authUserId: state.auth.user.uid,
});

export default withAuthorization(
	connect(mapStateToProps, { fetchLogById })(LogDetailUpdate)
);
