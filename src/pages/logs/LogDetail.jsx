import React, { useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLogById } from '../../app/Redux/actions/index';
import LoadingSpinner from '../../components/LoadingSpinner';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		overflow: 'hidden',
		textAlign: 'center',
	},
	title: {
		fontSize: '2rem',
	},
	details: {
		margin: 'auto',
	},
	item: {
		marginTop: '5rem',
	},
}));

const ServiceDetail = ({ fetchLogById, isFetching, service }) => {
	const classes = useStyles();

	const { serviceId } = useParams();

	useEffect(() => {
		fetchLogById(serviceId);
	}, [serviceId, fetchLogById]);

	if (isFetching || serviceId !== service.id) {
		return <LoadingSpinner />;
	}

	return (
		<Fragment>
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid className={classes.title} item xs={12}>
						{service.title}
					</Grid>
					<Grid item xs={6}>
						<img
							style={{ width: '30rem' }}
							src={service.image}
							alt={service.title}
						/>
					</Grid>
					<Grid className={classes.details} item xs={6}>
						{service.details}
					</Grid>
					<Grid className={classes.item} item xs={4}>
						Number of Sets = {service.sets}
					</Grid>
					<Grid className={classes.item} item xs={4}>
						Number Of Reps = {service.reps}
					</Grid>
					<Grid className={classes.item} item xs={4}>
						Amount Of Weight = {service.weight}
					</Grid>
				</Grid>
			</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	service: state.selectedService.item,
	isFetching: state.selectedService.isFetching,
});

export default connect(mapStateToProps, { fetchLogById })(ServiceDetail);
