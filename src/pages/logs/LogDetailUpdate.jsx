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
	const { fetchLogById, isFetching, log, authUserId } = props;
	const [redirect, setRedirect] = useState(false);
	const { addToast } = useToasts();
	const { logId } = useParams();

	useEffect(() => {
		fetchLogById(logId);
	}, [logId, fetchLogById]);

	const handleSubmit = async (formData) => {
		try {
			const dataUpdated = await updateLog(log.id, formData, authUserId);

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
	if (isFetching || logId !== log.id) {
		return <LoadingSpinner />;
	}

	return (
		<Card className={classes.root}>
			<CardContent>
				<h1>Update Log Form</h1>
				<UpdateLogItem
					details={log.details}
					weight={log.weight}
					reps={log.reps}
					sets={log.sets}
					image={log.image}
					title={log.title}
					onFormData={handleSubmit}
				/>
			</CardContent>
		</Card>
	);
};

const mapStateToProps = (state) => ({
	log: state.selectedLog.item,
	isFetching: state.selectedLog.isFetching,
	authUserId: state.auth.user.uid,
});

export default withAuthorization(
	connect(mapStateToProps, { fetchLogById })(LogDetailUpdate)
);
